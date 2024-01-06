import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { cn } from "@/lib/utils";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import metaTags from "@/data/metaTags";

type Props = {
  tags: [string, string | string[] | undefined][];
  className?: string;
};

function OgTable({ tags, className }: Props) {
  return (
    <Table className={cn(className)}>
      <TableHeader>
        <TableRow>
          <TableHead>Property</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tags.map(([key, value]) => {
          const info = metaTags.find((tag) => tag.name === key);

          return (
            <TableRow key={key}>
              <TableCell className="">
                {info && (
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
                )}
                {key}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default OgTable;
