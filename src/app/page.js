"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../app/globals.css";
import { useEffect, useState } from "react";

// Lazy Load Components for Performance
const Loader = dynamic(() => import("./particle/Loder"), { ssr: false });
const Particle = dynamic(() => import("./particle/Particle"), { ssr: false });
const About = dynamic(() => import("./about/About"), { ssr: false });
const Skill = dynamic(() => import("./skill/Skill"), { ssr: false });
const Certificates = dynamic(() => import("./certificates/Certificates"), { ssr: false });
const Mlproject = dynamic(() => import("./mlprojects/Mlproject"), { ssr: false });
const Rnproject = dynamic(() => import("./reactnative/Rnproject"), { ssr: false });
const Blockpro = dynamic(() => import("./blockchain/Blockpro"), { ssr: false });
const Webpro = dynamic(() => import("./webproject/Webpro"), { ssr: false });
const Contact = dynamic(() => import("./contact/Contact"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Optimized load delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Shashwat Manglam Jain - AI Developer & Data Scientist</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Explore the portfolio of Shashwat Manglam Jain, an AI/ML Developer, Blockchain Expert, and Full-Stack MERN Developer." />
        <meta name="keywords" content="Shashwat Manglam Jain, AI Developer, Data Scientist, Blockchain Developer, MERN Stack, Machine Learning" />
        <meta name="author" content="Shashwat Manglam Jain" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shashwatmanglamjain.netlify.app/" />

        {/* Open Graph Meta Tags (for Facebook & LinkedIn) */}
        <meta property="og:title" content="Shashwat Manglam Jain - AI Developer & Data Scientist" />
        <meta property="og:description" content="Portfolio of Shashwat Manglam Jain, an AI/ML expert with a passion for innovation and development." />
        <meta property="og:image" content="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />
        <meta property="og:url" content="https://shashwatmanglamjain.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shashwat Manglam Jain - AI Developer & Data Scientist" />
        <meta name="twitter:description" content="Portfolio of Shashwat Manglam Jain, AI & ML Developer with expertise in Blockchain & MERN stack." />
        <meta name="twitter:image" content="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        }) }} />
      </Head>

      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Particle />
            <About />
            <Skill />
            <Certificates />
            <Mlproject />
            <Rnproject />
            <Blockpro />
            <Webpro />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}
