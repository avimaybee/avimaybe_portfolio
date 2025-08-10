import { motion, useScroll, useTransform } from 'framer-motion';
import CosmicDust from '../components/CosmicDust';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Adjust for parallax effect

  return (
    <section className="relative flex items-center justify-center text-center min-h-screen bg-gradient-to-b from-deep-sky-blue to-night-gradient-teal-end overflow-hidden">
      {/* Background elements for celestial effect and parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }} // Apply parallax to the background container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <CosmicDust /> {/* Subtle particle system */}
        {/* Starfield background - these would typically be CSS-generated or SVG patterns */}
        <div className="starfield">
          <div className="stars-small"></div>
          <div className="stars-medium"></div>
          <div className="stars-large"></div>
        </div>
        {/* Cosmic Clouds - these would typically be CSS-generated or SVG patterns */}
        <div className="clouds">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
        {/* Celestial background image/nebulae */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/assets/celestial-nebulae.png)' }}></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.img
          src="/assets/headshot.png" // IMPORTANT: Replace with your actual headshot image (e.g., /assets/your-headshot.jpg)
          alt="Professional Headshot"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-5xl md:text-7xl font-header text-comet-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          AI-Enhanced Creative <br /> Crafting Digital Galaxies
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-body text-comet-white opacity-80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Leveraging cutting-edge AI to deliver unparalleled front-end development, design, and content solutions.
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-night-gradient-teal-start text-comet-white rounded-full text-lg font-medium shadow-glow-sm hover:bg-night-gradient-teal-end transition-all duration-400 ease-in-out transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
