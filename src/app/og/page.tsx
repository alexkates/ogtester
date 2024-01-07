import OgImage from "@/components/og-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UrlForm from "@/components/url-form";
import fetchMetaTags from "@/server/fetch-meta-tags";
import metaTagDefinitions from "@/data/meta-tag-definitions";
import { MetaTagDefinition } from "@/types/meta-tag-definition";
import OgCardList from "@/components/og-card-list";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const url = searchParams.url as string | undefined;

  if (!url)
    return (
      <main>
        <UrlForm />
      </main>
    );

  const metaTags = await fetchMetaTags(url);

  if (!metaTags || Object.keys(metaTags).length === 0) {
    throw new Error("No meta tags found");
  }

  const allTags = Object.values(metaTagDefinitions).map((metaTagDefinition) => {
    const metaTag = metaTags[metaTagDefinition.name] ?? undefined;
    return {
      ...metaTagDefinition,
      metaTag,
    } as MetaTagDefinition;
  });

  const ogImage = metaTags["og:image"];
  const twitterImage = metaTags["twitter:image"];
  const ogTags = allTags.filter((tag) => tag.name.startsWith("og:") && tag.name !== "og:image");
  const twitterTags = allTags.filter((tag) => tag.name.startsWith("twitter:") && tag.name !== "twitter:image");

  return (
    <main className="mt-4 flex flex-col gap-8">
      <div className="flex flex-col">
        <span className="text-lg font-semibold">
          {metaTags["title"]?.content || metaTags["og:title"]?.content || metaTags["twitter:title"]?.content}
        </span>
        <Link href={url} target="_blank" className="flex items-center text-muted-foreground underline">
          {url}
          <ExternalLinkIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
          <TabsTrigger value="Twitter">Twitter</TabsTrigger>
        </TabsList>

        <TabsContent value="All">
          <div className="mb-4 flex flex-col rounded-xl border border-muted">
            <OgImage src={ogImage?.content} alt="Open Graph Image" />
          </div>
          <OgCardList metaTagDefinitions={allTags} />
        </TabsContent>

        <TabsContent value="Open Graph">
          <div className="mb-4 flex flex-col rounded-xl border border-muted">
            <OgImage src={ogImage?.content} alt="Open Graph Image" />
          </div>
          <OgCardList metaTagDefinitions={ogTags} />
        </TabsContent>

        <TabsContent value="Twitter">
          <div className="mb-4 flex flex-col rounded-xl border">
            <OgImage src={twitterImage?.content} alt="Twitter Image" className="rounded-b-none" />
            <div className="flex flex-col bg-card px-6 py-4 font-light">
              <span className="mb-1 text-sm text-muted-foreground">{url}</span>
              <span>{metaTags.title.content}</span>
              <span className="leading-tight tracking-tight text-muted-foreground">{metaTags.description.content}</span>
            </div>
          </div>
          <OgCardList metaTagDefinitions={twitterTags} />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Page;
