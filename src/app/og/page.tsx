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

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url as string | undefined;
  const ogImage = searchParams["og:image"] as string | undefined;
  const twitterImage = searchParams["twitter:image"] as string | undefined;

  const generalTags = Object.entries(searchParams)
    .filter(
      ([key]) =>
        !key.startsWith("og:") &&
        !key.startsWith("twitter:") &&
        key !== "url" &&
        key !== "title"
    )
    .sort(([a], [b]) => a.localeCompare(b));

  const ogTags = Object.entries(searchParams)
    .filter(([key]) => key.startsWith("og:") && key !== "og:image")
    .sort(([a], [b]) => a.localeCompare(b));
  const twitterTags = Object.entries(searchParams)
    .filter(([key]) => key.startsWith("twitter:") && key !== "twitter:image")
    .sort(([a], [b]) => a.localeCompare(b));

  if (!searchParams && !url && !ogImage && !twitterImage) {
    return (
      <main>
        <UrlForm />
      </main>
    );
  }

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
              <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
              <TabsTrigger value="Twitter">Twitter</TabsTrigger>
              <TabsTrigger value="General">General</TabsTrigger>
            </TabsList>

            <TabsContent value="Open Graph">
              <OgImage src={ogImage} alt="Open Graph Image" />
              <OgTable tags={ogTags} className="mt-4" />
            </TabsContent>

            <TabsContent value="Twitter">
              <OgImage src={twitterImage} alt="Twitter Image" />
              <OgTable tags={twitterTags} className="mt-4" />
            </TabsContent>

            <TabsContent value="General">
              <OgTable tags={generalTags} className="mt-4" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}

export default Page;
