import MetaTag from "@/types/meta-tag";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MetaTagDefinition } from "@/types/meta-tag-definition";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type Props = {
  metaTagDefinition: MetaTagDefinition;
  metaTag?: MetaTag;
};

function OgCard({ metaTagDefinition, metaTag }: Props) {
  return (
    <Card className="relative">
      {!metaTag?.content && (
        <span className="absolute -left-2 -top-2 flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 rounded-full bg-destructive"></span>
        </span>
      )}
      <CardHeader>
        <CardTitle>
          <Link href={metaTagDefinition.link} className="flex items-center underline" target="_blank">
            {metaTagDefinition.name}
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </Link>
        </CardTitle>
        <CardDescription className="break-words leading-tight">{metaTagDefinition.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-lg leading-tight">
        {metaTag?.content && metaTag.content.startsWith("http") && (
          <div className="flex items-center">
            <Link className="underline" href={metaTag.content} target="_blank">
              {metaTag.content}
            </Link>
          </div>
        )}
        {metaTag?.content && !metaTag.content.startsWith("http") && (
          <Link href={metaTag.content}>{metaTag.content}</Link>
        )}
        {!metaTag?.content && (
          <span className="font-semibold text-destructive">Could not find tag {metaTag?.name}.</span>
        )}
      </CardContent>
    </Card>
  );
}

export default OgCard;
