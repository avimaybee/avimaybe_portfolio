import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-deep-sky-blue text-comet-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-header font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          About Me: The AI Generalist
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          As a creative technologist, my journey has been defined by a passion for crafting immersive digital experiences and a relentless pursuit of innovation. I specialize in front-end development, intuitive UI/UX design, and compelling content creation. What truly sets my work apart is the seamless integration of Artificial Intelligence into every facet of my workflow. I leverage AI not as a replacement, but as a powerful co-pilot, amplifying creativity, streamlining processes, and delivering results that consistently exceed expectations.
        </motion.p>

        <motion.div
          className="bg-night-gradient-teal-end p-8 rounded-2xl shadow-card mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-3xl font-header font-bold mb-8">AI as my Co-Pilot: The Creative Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-comet-white">
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-4">💡</span> {/* Idea Icon */}
              <h4 className="font-bold text-xl mb-2">1. Idea</h4>
              <p className="text-sm opacity-80">Starting with a creative spark and defining the core problem or vision.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-4">🧠</span> {/* AI Brainstorm Icon */}
              <h4 className="font-bold text-xl mb-2">2. AI Brainstorm</h4>
              <p className="text-sm opacity-80">Leveraging AI tools for rapid ideation, research, and initial concept generation.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-4">✍️</span> {/* Human Refinement Icon */}
              <h4 className="font-bold text-xl mb-2">3. Human Refinement</h4>
              <p className="text-sm opacity-80">Applying expert human judgment, creativity, and precision to refine AI outputs.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-4">✨</span> {/* Final Output Icon */}
              <h4 className="font-bold text-xl mb-2">4. Final Output</h4>
              <p className="text-sm opacity-80">Delivering a polished, high-impact, and truly unique digital solution.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
