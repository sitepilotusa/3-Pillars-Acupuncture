const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.3pillarsholistichealth.com";

const businessName = "3 Pillars Holistic Health";
const defaultDescription =
  "Acupuncture, Ayurveda, and herbal medicine in Wheat Ridge, CO. Personalized holistic care and wellness services.";
const defaultImage = new URL("/og.png", siteUrl).toString();

const resolveUrl = (path) => new URL(path, siteUrl).toString();

const baseMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: businessName,
    template: `%s | ${businessName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: businessName,
    title: businessName,
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description: defaultDescription,
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const createPageMetadata = ({ title, description, path, image }) => {
  const pageImage = image || defaultImage;
  const absoluteUrl = resolveUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: businessName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pageImage],
    },
  };
};

export { baseMetadata, businessName, createPageMetadata, defaultImage, siteUrl };
