import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useReducedMotion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import CelestialScroll from './components/CelestialScroll';
import SkillsConstellation from './components/SkillsConstellation';
import AIDemoOrb from './components/AIDemoOrb';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    // Optional: Hide loader when all resources are loaded
    window.addEventListener('load', () => {
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>The Celestial Portfolio - AI-Enhanced Creative</title>
        <meta name="description" content="A personal portfolio showcasing AI-enhanced front-end development, design, and content creation. Explore projects and skills powered by artificial intelligence." />
        <meta property="og:title" content="The Celestial Portfolio - AI-Enhanced Creative" />
        <meta property="og:description" content="A personal portfolio showcasing AI-enhanced front-end development, design, and content creation. Explore projects and skills powered by artificial intelligence." />
        <meta property="og:image" content="/assets/og-image.jpg" /> {/* Replace with your actual OG image */}
        <meta property="og:url" content="https://yourportfolio.com" /> {/* Replace with your actual deployed URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "[Your Name]", // Replace with your name
            "url": "https://yourportfolio.com", // Replace with your actual deployed URL
            "image": "/assets/headshot.png", // Replace with your headshot image
            "sameAs": [
              "https://linkedin.com/in/[your-linkedin]", // Replace with your LinkedIn profile
              "https://github.com/[your-github]", // Replace with your GitHub profile
              "https://twitter.com/[your-twitter]" // Replace with your Twitter profile
            ],
            "jobTitle": "AI-Enhanced Creative Professional",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-Employed"
            },
            "alumniOf": "[Your University/College]", // Optional
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Front-end Developer",
              "description": "Leveraging AI to build immersive web experiences.",
              "skills": "React, Tailwind CSS, Framer Motion, AI Prompt Engineering, UI/UX Design, Content Creation"
            }
          }}
        </script>
      </Helmet>
      {isLoading && <Loader />}
      <CelestialScroll />
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Hero prefersReducedMotion={prefersReducedMotion} />
          <Projects />
          <About />
          <SkillsConstellation prefersReducedMotion={prefersReducedMotion} />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <AIDemoOrb prefersReducedMotion={prefersReducedMotion} />
    </div>
  );
}

export default App;