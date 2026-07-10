export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  name: "Brick Calculator",

  applicationCategory: "ConstructionApplication",

  operatingSystem: "Any",

  isAccessibleForFree: true,

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },

  url: "https://buildestic.com/brick-calculator",

  description:
    "Free online brick calculator to estimate the number of bricks required for a wall using different brick standards, custom brick sizes, waste allowance and material cost.",

  publisher: {
    "@type": "Organization",
    name: "Buildestic",
  },
};

export const webPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  name: "Brick Calculator",

  url: "https://buildestic.com/brick-calculator",

  description:
    "Calculate bricks required for a wall with waste allowance and material cost estimation.",

  isPartOf: {
    "@type": "WebSite",
    name: "Buildestic",
    url: "https://buildestic.com",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://buildestic.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Brick Calculator",
      item: "https://buildestic.com/brick-calculator",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "How many bricks do I need for my wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Enter the wall dimensions, brick size and waste allowance to estimate the number of bricks required.",
      },
    },
    {
      "@type": "Question",
      name: "Does this calculator include waste?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can include a waste allowance of 5%, 10% or a custom percentage.",
      },
    },
    {
      "@type": "Question",
      name: "Can I calculate custom brick sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Select Custom Brick Size and enter the brick length, width and height.",
      },
    },
  ],
};