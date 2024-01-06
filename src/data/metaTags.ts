const metaTags = [
  {
    name: "title",
    description:
      "Defines the page's title, crucial for SEO and displayed in browser tabs. It's the primary identifier for search engines and users, summarizing the page's content.",
    example: "My Awesome Website",
  },
  {
    name: "description",
    description:
      "Offers a brief overview of the page's content. This snippet is often used by search engines in search results, influencing click-through rates.",
    example: "This is my awesome website",
  },
  {
    name: "keywords",
    description:
      "Lists relevant keywords for the page. While less critical for modern SEO, it helps in categorizing the page's content.",
    example: "website, awesome, cool",
  },
  {
    name: "author",
    description:
      "Identifies the author of the page's content, adding credibility and context for search engines and users.",
    example: "John Doe",
  },
  {
    name: "robots",
    description:
      "Provides directives to search engine crawlers, such as whether to index the page or follow links, influencing the page's search engine visibility.",
    example: "index, follow",
  },
  {
    name: "viewport",
    description:
      "Specifies the viewport settings for responsive design, ensuring the page is displayed correctly on various devices.",
    example: "width=device-width, initial-scale=1.0",
  },
  {
    name: "og:title",
    description:
      "Defines the title used when the page is shared on social platforms like Facebook, Instagram, and LinkedIn.",
    example: "My Awesome Website",
  },
  {
    name: "og:description",
    description:
      "Sets the description for the page when shared on social networks, crucial for engaging users on platforms like Facebook, Instagram, and LinkedIn.",
    example: "This is my awesome website",
  },
  {
    name: "og:image",
    description:
      "Specifies an image to represent the page when shared on social media, vital for attracting attention on platforms like Facebook, Instagram, and LinkedIn.",
    example: "https://example.com/image.png",
  },
  {
    name: "og:url",
    description:
      "The canonical URL of the page, ensuring consistency when the page is shared or linked on social media platforms.",
    example: "https://example.com",
  },
  {
    name: "og:site_name",
    description: "The name of the website, used for branding when the page is shared on social platforms.",
    example: "My Awesome Website",
  },
  {
    name: "og:locale",
    description:
      "Sets the locale of the page, important for regional targeting and language settings in social media shares.",
    example: "en_US",
  },
  {
    name: "og:type",
    description:
      "Identifies the type of content on the page, helping social platforms categorize and display the shared content appropriately.",
    example: "website",
  },
  {
    name: "twitter:card",
    description:
      "Defines the type of Twitter card used, important for controlling how content appears when shared on Twitter.",
    example: "summary",
  },
  {
    name: "twitter:site",
    description:
      "The Twitter username of the website, linking the shared content to a specific Twitter account for increased engagement.",
    example: "@example",
  },
  {
    name: "twitter:title",
    description:
      "The title of the page as it should appear when shared on Twitter, important for branding and recognition on the platform.",
    example: "My Awesome Website",
  },
  {
    name: "twitter:description",
    description:
      "A description of the page for Twitter shares, key to engaging users and driving traffic from Twitter.",
    example: "This is my awesome website",
  },
  {
    name: "twitter:image",
    description: "Specifies an image for Twitter shares, crucial for visual appeal and engagement on the platform.",
    example: "https://example.com/image.png",
  },
  {
    name: "twitter:creator",
    description:
      "The Twitter username of the author, connecting the content to the creator's Twitter profile for increased personal engagement.",
    example: "@example",
  },
] as const;

export default metaTags;
