import MetaTag from "./meta-tag";

export type MetaTagDefinition = {
  name: string;
  description: string;
  example: string;
  link: string;
  metaTag?: MetaTag;
};
