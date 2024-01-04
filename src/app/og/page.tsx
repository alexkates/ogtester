import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const ogImage = searchParams["og:image"] as string | undefined;
  const ogImageWidth = searchParams["og:image:width"] as string;
  const ogImageHeight = searchParams["og:image:height"] as string;
  const twitterImage = searchParams["twitter:image"] as string | undefined;
  const twitterImageWidth = searchParams["twitter:image:width"];
  const twitterImageHeight = searchParams["twitter:image:height"];

  return (
    <main>
      <img src={ogImage} alt="Open Graph Image" />
      <img src={twitterImage} alt="Twitter Image" />
      <Table>
        <TableBody>
          {Object.entries(searchParams).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

export default Page;
