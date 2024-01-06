import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { cn } from "@/lib/utils";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import metaTagsDatabase from "@/data/metaTags";
import MetaTag from "@/types/metatag";

type Props = {
  metaTags: MetaTag[];
  className?: string;
};

function OgTable({ metaTags, className }: Props) {
  return (
    <Table className={cn(className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Property</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metaTags.map(({ name, content }) => {
          const info = metaTagsDatabase.find((metaTagFromDatabase) => metaTagFromDatabase.name === name);

          return (
            <TableRow key={name}>
              <TableCell className="">
                {/* {info && (
                  <HoverCard>
                    <HoverCardTrigger>
                      <InfoCircledIcon className="mr-1 inline-block h-4 w-4" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{info.name}</span>
                        <span className="text-sm text-muted-foreground">{info.description}</span>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                )} */}
                {name}
              </TableCell>
              <TableCell>{content}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default OgTable;
