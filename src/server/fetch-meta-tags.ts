"use server";

import { load } from "cheerio";
import MetaTag from "@/types/meta-tag";
import metaTagDefinitions from "@/data/meta-tag-definitions";

async function fetchMetaTags(url: string): Promise<Record<string, MetaTag>> {
  try {
    const headResponse = await fetch(url, {
      cache: "no-store",
    });

    if (!headResponse.ok) return {} as Record<string, MetaTag>;

    const text = await headResponse.text();
    const $ = load(text);

    const metaTags = $("meta")
      .toArray()
      .map((tag) => {
        const attributes = $(tag).attr();
        const name = attributes?.name || attributes?.property;
        const content = attributes?.content;
        return { name, content } as MetaTag;
      })
      .filter((tag) => tag.name && tag.content && metaTagDefinitions[tag.name]);

    const title = $("title").text();

    metaTags.push({ name: "title", content: title });

    return metaTags.reduce(
      (acc, tag) => {
        acc[tag.name] = tag;
        return acc;
      },
      {} as Record<string, MetaTag>,
    );
  } catch (error) {
    console.error(error);
    return {} as Record<string, MetaTag>;
  }
}

export default fetchMetaTags;
