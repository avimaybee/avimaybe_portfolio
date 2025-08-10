import { motion, useScroll, useTransform } from 'framer-motion';
import StarfieldLayer from '../components/StarfieldLayer';
import { Button } from '../components/ui/button';

const Hero = ({ prefersReducedMotion }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "50%"]); // Parallax for background
  const nebulaY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-20%"]); // Parallax for nebula

  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 2 };
  const springTransition = prefersReducedMotion ? { type: "tween", duration: 0 } : { type: "spring", stiffness: 260, damping: 20 };
  const textTransition = prefersReducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.8 };
  const buttonTransition = prefersReducedMotion ? { duration: 0 } : { delay: 0.9, duration: 0.8 };

  return (
    <section className="relative flex items-center justify-center text-center min-h-screen bg-gradient-to-b from-deep-sky-blue to-night-gradient-teal-end overflow-hidden">
      {/* Background elements for celestial effect and parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }} // Apply parallax to the background container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        {/* Starfield Layers */}
        <StarfieldLayer prefersReducedMotion={prefersReducedMotion} speed={0.5} density={300} size={0.5} opacity={0.8} twinkle={true} />
        <StarfieldLayer prefersReducedMotion={prefersReducedMotion} speed={1} density={150} size={1} opacity={0.6} twinkle={true} />
        <StarfieldLayer prefersReducedMotion={prefersReducedMotion} speed={1.5} density={50} size={1.5} opacity={0.4} twinkle={true} />

        {/* Cosmic Clouds / Nebula Overlay */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/assets/celestial-nebulae.png)', y: nebulaY }}
        ></motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.img
          src="/assets/headshot.png" // IMPORTANT: Replace with your actual headshot image (e.g., /assets/your-headshot.jpg)
          alt="Professional Headshot"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={springTransition}
        />
        <motion.h1
          className="text-5xl md:text-7xl font-header text-comet-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
        >
          AI-Enhanced Creative <br /> Crafting Digital Galaxies
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-body text-comet-white opacity-80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
        >
          Leveraging cutting-edge AI to deliver unparalleled front-end development, design, and content solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={buttonTransition}
        >
          <Button
            className="px-8 py-3 bg-night-gradient-teal-start text-comet-white rounded-full text-lg font-medium shadow-glow-sm hover:bg-night-gradient-teal-end hover:shadow-glow-lg transition-shadow duration-400 ease-in-out transform hover:-translate-y-1"
          >
            Explore My Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
