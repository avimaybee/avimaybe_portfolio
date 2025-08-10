import { useScroll, motion } from 'framer-motion';

const CelestialScroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-comet-white origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default CelestialScroll;
