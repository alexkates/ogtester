import metaTagsDatabase from "@/data/metaTags";
import MetaTag from "@/types/metatag";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  metaTag: MetaTag;
};

function OgCard({ metaTag }: Props) {
  const metaTagDefinition = metaTagsDatabase[metaTag.name];
  return (
    <Card>
      <CardHeader>
        {metaTag.name}
        <CardTitle></CardTitle>
        <CardDescription className="break-words">{metaTag.content}</CardDescription>
      </CardHeader>
      {/* <CardContent>{metaTagDefinition?.description || "No definition found."}</CardContent>
      <CardFooter>footer</CardFooter> */}
    </Card>
  );
}

export default OgCard;
