import { Caveat, Handjet, Poppins } from "next/font/google";
import "./globals.css";

// Correctly load fonts using next/font/google for better optimization
const caveat = Caveat({ subsets: ["latin"], weight: ["700"], display: "swap" });
const handjet = Handjet({ subsets: ["latin"], weight: ["100", "900"], display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"], display: "swap" });

export const metadata = {
  title: "Shashwat Manglam Jain - AI Developer & Data Scientist",
  description: "Portfolio of Shashwat Manglam Jain, a passionate AI/ML Developer, Blockchain Expert, and Full-Stack MERN Developer.",
  keywords: "Shashwat Manglam Jain, AI Developer, Data Scientist, Blockchain Developer, MERN Stack, Portfolio, Machine Learning",
  authors: [{ name: "Shashwat Manglam Jain", url: "https://shashwatmanglamjain.netlify.app/" }],
  robots: "index, follow",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
  },
  openGraph: {
    title: "Shashwat Manglam Jain - AI Developer & Data Scientist",
    description: "Explore the portfolio of Shashwat Manglam Jain, an emerging Data Scientist and AI Developer specializing in GPTs, ML, and Blockchain.",
    url: "https://shashwatmanglamjain.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
        width: 512,
        height: 512,
        alt: "Shashwat Manglam Jain Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat Manglam Jain - AI Developer & Data Scientist",
    description: "Explore the portfolio of Shashwat Manglam Jain, specializing in AI, ML, GPTs, and Blockchain.",
    images: ["https://cdn-icons-png.flaticon.com/512/3242/3242257.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${caveat.className} ${handjet.className}`}>
        {children}

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shashwat Manglam Jain",
              "url": "https://shashwatmanglamjain.netlify.app/",
              "jobTitle": "AI Developer & Data Scientist",
              "description": "Portfolio of Shashwat Manglam Jain, an expert in AI/ML, Blockchain, and full-stack development.",
              "alumniOf": "RGPV",
              "knowsAbout": ["AI", "Machine Learning", "Blockchain", "MERN Stack"],
              "sameAs": [
                "https://www.linkedin.com/in/shashwat-manglam-jain-5930b4275/",
                "https://github.com/Shashwat-Manglam-Jain",
                "https://www.instagram.com/shashwat_manglam_jain_/"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
