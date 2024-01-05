import cheerio from "cheerio";

async function parseMetaTags(metaTags: string[]) {
  "use server";

  const metaObject: Record<string, string> = {};

  for (const tag of metaTags) {
    const $ = cheerio.load(tag);
    const attributes = $("meta").attr();

    if (attributes) {
      const name = attributes.name || attributes.property;
      const content = attributes.content;

      if (name && content) {
        metaObject[name] = content;
      }
    }
  }

  return metaObject;
}

async function fetchMetaTags(url: string) {
  "use server";

  try {
    const headResponse = await fetch(url);

    if (!headResponse.ok) return undefined;

    const text = await headResponse.text();
    const $ = cheerio.load(text);
    const metaTags = $("meta")
      .toArray()
      .map((tag) => $.html(tag));
    const title = $("title").text();

    const parsedMetaTags = await parseMetaTags(metaTags);
    parsedMetaTags["url"] = url;
    parsedMetaTags["title"] = title || url;

    return parsedMetaTags;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default fetchMetaTags;
