import OgImage from "@/components/og-image";
import OgCard from "@/components/og-card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UrlForm from "@/components/url-form";
import fetchMetaTags from "@/server/fetch-meta-tags";
import MetaTag from "@/types/metatag";
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

  const allTags = Object.values(metaTags).sort((a, b) => {
    const hasColon = (str: string) => str.includes(":");
    if (hasColon(a.name) && !hasColon(b.name)) return 1;
    else if (!hasColon(a.name) && hasColon(b.name)) return -1;
    else return a.name.localeCompare(b.name);
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
        <span className="text-muted-foreground">{url}</span>
      </div>
      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
          <TabsTrigger value="Twitter">Twitter</TabsTrigger>
        </TabsList>
        <TabsContent value="All">
          <div className="flex w-full flex-col gap-4">
            {Object.values(allTags).map((metaTag) => (
              <OgCard key={metaTag.name} metaTag={metaTag} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Open Graph">
          <OgImage src={ogImage?.content} alt="Open Graph Image" />
          <div className="flex w-full flex-col gap-4">
            {Object.values(ogTags).map((metaTag) => (
              <OgCard key={metaTag.name} metaTag={metaTag} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Twitter">
          <OgImage src={twitterImage?.content} alt="Twitter Image" />
          <div className="flex w-full flex-col gap-4">
            {Object.values(twitterTags).map((metaTag) => (
              <OgCard key={metaTag.name} metaTag={metaTag} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Page;
