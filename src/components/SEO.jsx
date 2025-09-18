import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_NAME = "WeeTech";
const DEFAULT_TITLE =
  "WeeTech – Leading IT Consultancy & Software Development Company";
const DEFAULT_DESCRIPTION =
  "WeeTech provides online safety for individuals and businesses, plus training and internships in cybersecurity and web development. Experts in network security, SEO, and web testing.";
const DEFAULT_URL = "https://adesigners.github.io/Weetech_Frontend/";
const DEFAULT_IMAGE = "/images/service-banner.png";

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index, follow",
  keywords,
}) {
  const computedTitle = title ? `${title}` : DEFAULT_TITLE;

  return (
    <Helmet prioritizeSeoTags>
      <title>{computedTitle}</title>
      <meta name="description" content={description} />
      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
        />
      )}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={computedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={computedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Misc */}
      <meta name="theme-color" content="#0b0f19" />
    </Helmet>
  );
}
