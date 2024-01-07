import { MetaTagDefinition } from "@/types/meta-tag-definition";

const metaTagDefinitions: Record<string, MetaTagDefinition> = {
  title: {
    name: "title",
    description:
      "Defines the page's title, crucial for SEO and displayed in browser tabs. It's the primary identifier for search engines and users, summarizing the page's content.",
    example: "My Awesome Website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#title-tag",
  },
  description: {
    name: "description",
    description:
      "Offers a brief overview of the page's content. This snippet is often used by search engines in search results, influencing click-through rates.",
    example: "This is my awesome website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#description-tag",
  },
  robots: {
    name: "robots",
    description:
      "Provides directives to search engine crawlers, such as whether to index the page or follow links, influencing the page's search engine visibility.",
    example: "index, follow",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#robots-tag",
  },
  viewport: {
    name: "viewport",
    description:
      "Specifies the viewport settings for responsive design, ensuring the page is displayed correctly on various devices.",
    example: "width=device-width, initial-scale=1.0",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#viewport-tag",
  },
  "og:title": {
    name: "og:title",
    description:
      "Defines the title used when the page is shared on social platforms like Facebook, Instagram, and LinkedIn.",
    example: "My Awesome Website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#ogtitle",
  },
  "og:description": {
    name: "og:description",
    description:
      "Sets the description for the page when shared on social networks, crucial for engaging users on platforms like Facebook, Instagram, and LinkedIn.",
    example: "This is my awesome website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#ogdescription",
  },
  "og:image": {
    name: "og:image",
    description:
      "Specifies an image to represent the page when shared on social media, vital for attracting attention on platforms like Facebook, Instagram, and LinkedIn.",
    example: "https://alexkates.dev/opengraph-image.png",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#ogimage",
  },
  "og:url": {
    name: "og:url",
    description:
      "The canonical URL of the page, ensuring consistency when the page is shared or linked on social media platforms.",
    example: "https://example.com",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#ogurl",
  },
  "og:type": {
    name: "og:type",
    description:
      "Identifies the type of content on the page, helping social platforms categorize and display the shared content appropriately.",
    example: "website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#ogtype",
  },
  "twitter:card": {
    name: "twitter:card",
    description:
      "Defines the type of Twitter card used, important for controlling how content appears when shared on Twitter.",
    example: "summary",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#twittercard",
  },
  "twitter:title": {
    name: "twitter:title",
    description:
      "The title of the page as it should appear when shared on Twitter, important for branding and recognition on the platform.",
    example: "My Awesome Website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#twittertitle",
  },
  "twitter:description": {
    name: "twitter:description",
    description:
      "A description of the page for Twitter shares, key to engaging users and driving traffic from Twitter.",
    example: "This is my awesome website",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#twitterdescription",
  },
  "twitter:image": {
    name: "twitter:image",
    description: "Specifies an image for Twitter shares, crucial for visual appeal and engagement on the platform.",
    example: "https://alexkates.dev/twitter-image.png",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#twitterimage",
  },
  "twitter:site": {
    name: "twitter:site",
    description:
      "The Twitter username of the website, linking the shared content to a specific Twitter account for increased engagement.",
    example: "@thealexkates",
    link: "http://alexkates.dev/blog/7-essential-meta-tags-for-enhancing-your-seo-and-social-media-approach#twittersite",
  },
};

export default metaTagDefinitions;
