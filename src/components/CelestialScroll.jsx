import { useScroll, motion } from 'framer-motion';

const CelestialScroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1.5 bg-comet-pink-peach origin-left z-50 shadow-glow-sm"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default CelestialScroll;
