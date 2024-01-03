import { load } from "cheerio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return Response.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const headResponse = await fetch(url);

    if (!headResponse.ok) {
      return Response.json({ error: "Invalid URL" }, { status: 400 });
    }

    const text = await headResponse.text();
    const metatags = parseMetatags(text);

    return Response.json(metatags);
  } catch (error) {
    const errorMessage = (error as Error).cause;
    console.error(errorMessage);
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}

function parseMetatags(html: string): Record<string, string> {
  const rawMetaTags = html.match(/<meta[^>]+>/g) as string[];

  const metaTags: Record<string, string> = rawMetaTags.reduce(
    (acc, metaTag) => {
      const $ = load(metaTag);
      const metaTagAttributes = $("meta")
        .get()
        .reduce((acc, metaTag) => {
          const attributes = metaTag.attribs as Record<string, string>;
          const key = attributes.name || attributes.property;
          const value = attributes.content;

          if (key && value) {
            acc[key] = value;
          }

          return acc;
        }, {} as Record<string, string>);

      return { ...acc, ...metaTagAttributes };
    },
    {} as Record<string, string>
  );

  return metaTags;
}
