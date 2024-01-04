import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const ogImage = searchParams["og:image"] as string | undefined;
  const twitterImage = searchParams["twitter:image"] as string | undefined;

  return (
    <main>
      <Tabs defaultValue="Open Graph">
        <TabsList>
          <TabsTrigger value="Open Graph">Open Graph</TabsTrigger>
          <TabsTrigger value="Twitter">Twitter</TabsTrigger>
        </TabsList>
        <TabsContent value="Open Graph">
          <img src={ogImage} alt="Open Graph Image" />
          <Table>
            <TableBody>
              {Object.entries(searchParams)
                .filter(([key]) => key.startsWith("og:") && key !== "og:image")
                .map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="Twitter">
          <img src={twitterImage} alt="Twitter Image" />
          <Table>
            <TableBody>
              {Object.entries(searchParams)
                .filter(
                  ([key]) =>
                    key.startsWith("twitter:") && key !== "twitter:image"
                )
                .map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default Page;
