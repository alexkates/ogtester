import OgImage from "@/components/og-image";
import OgTable from "@/components/og-table";
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
    <main className="lex flex-col">
      <Card>
        <CardHeader>
          <CardTitle>
            {metaTags["title"]?.name || metaTags["og:title"]?.name || metaTags["twitter:title"]?.name}
          </CardTitle>
          <CardDescription>{url}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All" className="w-full">
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
              <TabsTrigger value="Twitter">Twitter</TabsTrigger>
            </TabsList>
            <TabsContent value="All">
              <OgTable metaTags={Object.values(allTags)} className="mt-4" />
            </TabsContent>
            <TabsContent value="Open Graph">
              <OgImage src={ogImage?.content} alt="Open Graph Image" />
              <OgTable metaTags={ogTags} className="mt-4" />
            </TabsContent>
            <TabsContent value="Twitter">
              <OgImage src={twitterImage?.content} alt="Twitter Image" />
              <OgTable metaTags={twitterTags} className="mt-4" />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}

export default Page;
