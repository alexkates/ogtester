async function parseMetaTags(metaTags: string[]) {
  "use server";

  const metaObject: Record<string, string> = {};
  const metaTagPattern = /<meta (.*?)\/>/g;

  for (const tag of metaTags) {
    const matches = tag.match(metaTagPattern);

    if (matches) {
      for (const match of matches) {
        const attributePattern = /([^\s="']+)=["']?([^"']+)["']?/g;
        const attributes = match.match(attributePattern);

        if (attributes) {
          let name = "";
          let content = "";

          for (const attribute of attributes) {
            const [key, value] = attribute.split("=");
            if (key === "name") {
              name = value.replace(/["']/g, "");
            } else if (key === "property") {
              name = value.replace(/["']/g, "");
            } else if (key === "content") {
              content = value.replace(/["']/g, "");
            }
          }

          if (name && content) {
            metaObject[name] = content;
          }
        }
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
    const metaTags = text.match(/<meta[^>]+>/g) as string[];

    const parsedMetaTags = await parseMetaTags(metaTags);
    parsedMetaTags["url"] = url;

    return parsedMetaTags;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default fetchMetaTags;
