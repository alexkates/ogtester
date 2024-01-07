import MetaTag from "@/types/meta-tag";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MetaTagDefinition } from "@/types/meta-tag-definition";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type Props = {
  metaTagDefinition: MetaTagDefinition;
};

function OgCard({ metaTagDefinition }: Props) {
  const metaTag = metaTagDefinition.metaTag;

  return (
    <Card className="relative break-words">
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
        <CardDescription className="leading-tight">{metaTagDefinition.description}</CardDescription>
      </CardHeader>
      <CardContent className="font-semibold leading-tight">
        {metaTag?.content && metaTag.content.startsWith("http") && (
          <Link className="break-all underline" href={metaTag.content} target="_blank">
            {metaTag.content}
          </Link>
        )}
        {metaTag?.content && !metaTag.content.startsWith("http") && <span>{metaTag.content}</span>}
        {!metaTag?.content && <span className="text-destructive">Could not find tag {metaTagDefinition.name}.</span>}
      </CardContent>
    </Card>
  );
}

export default OgCard;
