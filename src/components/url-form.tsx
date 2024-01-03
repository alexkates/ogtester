import { notFound, redirect } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UrlForm() {
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

      return await parseMetaTags(metaTags);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async function onSubmit(formData: FormData) {
    "use server";

    const url = formData.get("url") as string;
    const metaTags = await fetchMetaTags(url);

    if (!metaTags || Object.keys(metaTags).length === 0) {
      notFound();
    }

    const redirectUrl = "/og?" + new URLSearchParams(metaTags).toString();
    redirect(redirectUrl.toString());
  }

  return (
    <form action={onSubmit}>
      <Input placeholder="https://alexkates.dev" name="url" />

      <Button type="submit">Submit</Button>
    </form>
  );
}
