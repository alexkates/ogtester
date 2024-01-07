import MetaTag from "@/types/meta-tag";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MetaTagDefinition } from "@/types/meta-tag-definition";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

type Props = {
  metaTagDefinition: MetaTagDefinition;
  metaTag?: MetaTag;
};

function OgCard({ metaTagDefinition, metaTag }: Props) {
  return (
    <Card>
      {!metaTag?.content && (
        <span className="relative -left-2 -top-2 flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 rounded-full bg-destructive"></span>
        </span>
      )}
      <CardHeader>
        <CardTitle>
          <Link href={metaTagDefinition.link} className="flex items-center underline" target="_blank">
            {metaTagDefinition.name}
            <ArrowTopRightIcon className="h-4 w-4" />
          </Link>
        </CardTitle>
        <CardDescription className="break-words">{metaTagDefinition.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-lg">
        {metaTag?.content && <span>{metaTag.content}</span>}
        {!metaTag?.content && <span className="text-destructive">Could not find tag {metaTag?.name}.</span>}
      </CardContent>
    </Card>
  );
}

export default OgCard;
