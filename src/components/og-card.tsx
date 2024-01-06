import metaTagDefinitions from "@/data/meta-tag-definitions";
import MetaTag from "@/types/meta-tag";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MetaTagDefinition } from "@/types/meta-tag-definition";
import Link from "next/link";
import { ArrowTopRightIcon, Link1Icon, Link2Icon } from "@radix-ui/react-icons";

type Props = {
  metaTagDeifinition: MetaTagDefinition;
  metaTag?: MetaTag;
};

function OgCard({ metaTagDeifinition: metaTagDefinition, metaTag }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={metaTagDefinition.link} className="flex items-center underline" target="_blank">
            {metaTagDefinition.name}
            <ArrowTopRightIcon className="h-4 w-4" />
          </Link>
        </CardTitle>
        <CardDescription className="break-words">{metaTagDefinition.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-lg">{metaTag?.content || "No definition found."}</CardContent>
    </Card>
  );
}

export default OgCard;
