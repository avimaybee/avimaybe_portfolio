import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center text-center min-h-screen bg-gradient-to-b from-primary-deep-sky-blue to-night-gradient-teal-end overflow-hidden">
      {/* Background elements for celestial effect and parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Placeholder for stars/nebulae background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/celestial-bg.jpg)' }}></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.img
          src="/assets/headshot.png" // Placeholder for actual headshot
          alt="Professional Headshot"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.h1
          className="text-6xl md:text-7xl font-serif font-extrabold text-comet-white leading-tight mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your Name Here: AI-Enhanced Creative
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-comet-white mb-8 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Leveraging Artificial Intelligence to craft stunning front-end experiences, innovative designs, and compelling content.
        </motion.p>
        <motion.button
          className="bg-comet-pink-peach text-primary-deep-sky-blue font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-glow transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
