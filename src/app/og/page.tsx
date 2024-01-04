import OgImage from "@/components/og-image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.url as string | undefined;
  const ogImage = searchParams["og:image"] as string | undefined;
  const twitterImage = searchParams["twitter:image"] as string | undefined;
  const ogTags = Object.entries(searchParams)
    .filter(([key]) => key.startsWith("og:") && key !== "og:image")
    .sort(([a], [b]) => a.localeCompare(b));
  const twitterTags = Object.entries(searchParams)
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
              <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
              <TabsTrigger value="Twitter">Twitter</TabsTrigger>
            </TabsList>
            <TabsContent value="Open Graph">
              <OgImage src={ogImage} alt="Open Graph Image" />
              <Table className="mt-4">
                <TableBody>
                  {ogTags.map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="Twitter">
              <OgImage src={twitterImage} alt="Twitter Image" />
              <Table className="mt-4">
                <TableBody>
                  {twitterTags.map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
}

export default Page;
