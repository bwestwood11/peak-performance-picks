import { Metadata } from "next";

export const SeoMetadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peak Performance | Trusted Health & Fitness Reviews",
    description:
      "Top Trusted Source when it comes to reviews on health and fitness products. We provide honest, in-depth reviews on a wide range of health and fitness products to help you make the best choices for your fitness journey.",
    url: "https://www.peakperformancepicks.com",
    siteName: "Peak Performance Picks",
    images: [
        {
            url: '/hero-section-screenshot.png',
            width: 800,
            height: 600,
        }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevVibe Studio | Web Design | Web Development",
    description: "Creative agency specializing in Web Design, Web Development and Content Creation",
    images: [
        {
            url: 'https://www.devvibestudio.com/hero-section-screenshot.png',
            width: 800,
            height: 600,
        }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
} satisfies Metadata
