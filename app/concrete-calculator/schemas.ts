export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",

  name: "Concrete Calculator",

  applicationCategory: "ConstructionApplication",

  operatingSystem: "Any",

  description:
    "Free online Concrete Calculator to estimate concrete volume, cement bags, sand, aggregate, waste allowance, and material cost for construction projects.",

  url: "https://buildestic.com/concrete-calculator",

  image: "https://buildestic.com/android-chrome-512x512.png",

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export const webPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  name: "Concrete Calculator",

  url: "https://buildestic.com/concrete-calculator",

  description:
    "Calculate concrete volume, cement bags, sand, aggregate, waste allowance, and material cost with our free online Concrete Calculator.",
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
      name: "Concrete Calculator",
      item: "https://buildestic.com/concrete-calculator",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "How do I calculate the amount of concrete needed?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Multiply the length, width, and depth to calculate the concrete volume. This calculator automatically estimates cement bags, sand, aggregate, waste allowance, and material cost.",
      },
    },

    {
      "@type": "Question",

      name: "Which concrete grade should I choose?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "M20 is commonly used for residential construction. M10 and M15 are suitable for non-structural work, while M25 and M30 are used for reinforced concrete structures.",
      },
    },

    {
      "@type": "Question",

      name: "Why should I include waste allowance?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Waste allowance helps compensate for material lost during transportation, mixing, and placement. A 10% allowance is commonly recommended.",
      },
    },

    {
      "@type": "Question",

      name: "Does this calculator support feet and meters?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. The calculator supports both feet and meters and automatically performs the required unit conversions.",
      },
    },

    {
      "@type": "Question",

      name: "Can I estimate material cost?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. Enter the cost per cubic meter to estimate the total concrete material cost.",
      },
    },
  ],
};