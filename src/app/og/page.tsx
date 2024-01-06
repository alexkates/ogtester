import OgImage from "@/components/og-image";
import OgTable from "@/components/og-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UrlForm from "@/components/url-form";
import fetchMetaTags from "@/lib/meta-tags";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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

  const allTags = Object.entries(metaTags).sort(([a], [b]) => {
    const hasColon = (str: string) => str.includes(":");
    if (hasColon(a) && !hasColon(b)) return 1;
    else if (!hasColon(a) && hasColon(b)) return -1;
    else return a.localeCompare(b);
  });
  const ogImage = metaTags["og:image"] as string | undefined;
  const twitterImage = metaTags["twitter:image"] as string | undefined;
  const ogTags = Object.entries(metaTags)
    .filter(([key]) => key.startsWith("og:") && key !== "og:image")
    .sort(([a], [b]) => a.localeCompare(b));
  const twitterTags = Object.entries(metaTags)
    .filter(([key]) => key.startsWith("twitter:") && key !== "twitter:image")
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="my-8 flex flex-col items-center gap-8">
      <UrlForm defaultValue={url} />

      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
          <TabsTrigger value="Twitter">Twitter</TabsTrigger>
        </TabsList>

        <TabsContent value="All">
          <OgTable tags={allTags} className="mt-4" />
        </TabsContent>

        <TabsContent value="Open Graph">
          <OgImage src={ogImage} alt="Open Graph Image" />
          <OgTable tags={ogTags} className="mt-4" />
        </TabsContent>

        <TabsContent value="Twitter">
          <OgImage src={twitterImage} alt="Twitter Image" />
          <OgTable tags={twitterTags} className="mt-4" />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Page;
