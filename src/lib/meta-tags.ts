"use server";

import { load } from "cheerio";

async function fetchMetaTags(url: string) {
  try {
    const headResponse = await fetch(url);

    if (!headResponse.ok) return undefined;

    const text = await headResponse.text();
    const $ = load(text);

    const metaTags = $("meta")
      .toArray()
      .map((tag) => {
        const attributes = $(tag).attr();
        const name = attributes?.name || attributes?.property;
        const content = attributes?.content;
        if (name && content) {
          return { name, content };
        }
        return undefined;
      })
      .filter(Boolean);

    const title = $("title").text();

    const parsedMetaTags: Record<string, string> = {};
    for (const tag of metaTags) {
      if (tag) parsedMetaTags[tag.name] = tag.content;
    }
    parsedMetaTags["title"] = title;

    return parsedMetaTags;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default fetchMetaTags;
