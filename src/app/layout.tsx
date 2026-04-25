import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollTracker from "@/components/ScrollTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GIRISHGOUDA - Full Stack Developer | React, Next.js, Node.js Expert",
  description:
    "Portfolio of GIRISHGOUDA, a passionate Full Stack Developer with 2+ years of experience. Specializing in React, Next.js, Node.js, AWS, and modern web technologies. Currently working as Full-Stack Developer Intern at Captain Side.",
  keywords: [
    "Yeshwanth R",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Captain Side",
    "Hackathon Winner",
    "Freelance Developer",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  authors: [{ name: "GIRISHGOUDA" }],
  creator: "GIRISHGOUDA",
  publisher: "GIRISHGOUDA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yeshwanth.live"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GIRISHGOUDA - Full Stack Developer | React, Next.js Expert",
    description:
      "Portfolio of GIRISHGOUDA, a passionate Full Stack Developer with 2+ years of experience. Specializing in React, Next.js, Node.js, AWS, and modern web technologies.",
    url: "https://yeshwanth.live",
    siteName: "GIRISHGOUDA Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GIRISHGOUDA - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIRISHGOUDA - Full Stack Developer | React, Next.js Expert",
    description:
      "Portfolio of GIRISHGOUDA, a passionate Full Stack Developer with 2+ years of experience. Specializing in React, Next.js, Node.js, AWS, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@YESHWANTH_R_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yeshwanth R",
              jobTitle: "Full Stack Developer",
              description:
                "Passionate Full Stack Developer with 2+ years of experience specializing in React, Next.js, Node.js, and AWS technologies.",
              url: "https://yeshwanth.live",
              image: "https://yeshwanth.live/og-image.png",
              sameAs: [
                "https://github.com/Girishgouda07",
                "https://www.linkedin.com/in/girishgouda-sheshanagoudra-62a792342/",
                "https://x.com/YESHWANTH_R_",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "AWS",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "Framer Motion",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Captain Side",
                jobTitle: "Full-Stack Developer Intern",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Dayananda Sagar University",
                description: "B.Tech Computer Science Engineering",
              },
              award: [
                "1st Place - BuiltIt Hackathon (Captain Side)",
                "Finalist - IIT Dharwad Dev Hacks 6.0",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics />
        <ScrollTracker />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll to top on page refresh and disable scroll restoration
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
              
              // Force scroll to top on page load
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
              
              // Also scroll to top immediately
              window.scrollTo(0, 0);
            `,
          }}
        />
      </body>
    </html>
  );
}
