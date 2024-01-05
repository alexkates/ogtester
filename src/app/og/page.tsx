import OgImage from "@/components/og-image";
import OgTable from "@/components/og-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  const ogImage = metaTags["og:image"] as string | undefined;
  const twitterImage = metaTags["twitter:image"] as string | undefined;

  const allTags = Object.entries(metaTags).sort(([a], [b]) => {
    const hasColon = (str: string) => str.includes(":");
    if (hasColon(a) && !hasColon(b)) return 1;
    else if (!hasColon(a) && hasColon(b)) return -1;
    else return a.localeCompare(b);
  });

  const ogTags = Object.entries(metaTags)
    .filter(([key]) => key.startsWith("og:") && key !== "og:image")
    .sort(([a], [b]) => a.localeCompare(b));
  const twitterTags = Object.entries(metaTags)
    .filter(([key]) => key.startsWith("twitter:") && key !== "twitter:image")
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Open Graph Preview for {url}</CardTitle>
          <CardDescription>
            Preview how {searchParams.title || "this page"} will look in social
            media and messengers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Open Graph">
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
              <TabsTrigger value="Twitter">Twitter</TabsTrigger>
            </TabsList>

            <TabsContent value="Open Graph">
              <OgImage src={ogImage} alt="Open Graph Image" />
              <OgTable tags={ogTags} className="mt-4" />
            </TabsContent>

            <TabsContent value="Twitter">
              <OgImage src={twitterImage} alt="Twitter Image" />
              <OgTable tags={twitterTags} className="mt-4" />
            </TabsContent>

            <TabsContent value="All">
              <OgTable tags={allTags} className="mt-4" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}

export default Page;
