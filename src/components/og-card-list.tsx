import { MetaTagDefinition } from "@/types/meta-tag-definition";
import React from "react";
import OgCard from "./og-card";

type Props = {
  metaTagDefinitions: MetaTagDefinition[];
};

function OgCardList({ metaTagDefinitions }: Props) {
  return (
    <div className="flex gap-4">
      {[
        metaTagDefinitions.slice(0, metaTagDefinitions.length / 2),
        metaTagDefinitions.slice(metaTagDefinitions.length / 2, metaTagDefinitions.length),
      ].map((metaTagDefinitionGroup, index) => (
        <div key={index} className="flex flex-col gap-4">
          {metaTagDefinitionGroup.map((metaTagDefinition) => (
            <OgCard key={metaTagDefinition.name} metaTagDefinition={metaTagDefinition} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default OgCardList;
