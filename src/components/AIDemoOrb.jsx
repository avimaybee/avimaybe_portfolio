import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AIDemoOrb = ({ prefersReducedMotion }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Mock AI response based on prompt
    setTimeout(() => {
      let mockResponse = '';
      if (prompt.toLowerCase().includes('color palette')) {
        mockResponse = `// AI-Generated Celestial Color Palette
const celestialPalette = {
  deepSkyBlue: '#20406a',
  nightGradientTeal: '#427384',
  cometWhite: '#fafbff',
  cometPinkPeach: '#ecd7cf',
  warmEarthBrown: '#b08968',
};

export default celestialPalette;`;
      } else if (prompt.toLowerCase().includes('starry animation')) {
        mockResponse = `// AI-Generated Starry Animation CSS
@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.star {
  animation: twinkle 2s infinite ease-in-out;
}`;
      } else {
        mockResponse = `// AI Co-Pilot Suggestion
console.log("Exploring the cosmos of creativity with AI!");`;
      }
      setResponse(mockResponse);
      setLoading(false);
    }, prefersReducedMotion ? 0 : 1500);
  };

  const orbTransition = prefersReducedMotion ? { type: "tween", duration: 0 } : { type: "spring", stiffness: 200, damping: 10 };
  const responseTransition = prefersReducedMotion ? { duration: 0 } : { delay: 0.2, duration: 0.5 };

  return (
    <motion.div
      className="fixed bottom-8 right-8 bg-deep-sky-blue p-6 rounded-full shadow-glow-lg cursor-pointer z-50"
      whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={orbTransition}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-header text-comet-white mb-4">AI Co-Pilot Demo</h3>
        <input
          type="text"
          placeholder="Ask me about celestial designs..."
          className="w-full p-3 rounded-full bg-neutral-off-white text-deep-sky-blue placeholder-desaturated-gray focus:outline-none focus:ring-2 focus:ring-comet-pink-peach transition-all duration-300 mb-4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="px-6 py-2 bg-comet-pink-peach text-deep-sky-blue rounded-full font-medium shadow-md hover:bg-soft-gold transition-all duration-300"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Suggestion'}
        </button>

        {response && (
          <motion.div
            className="mt-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={responseTransition}
          >
            <h4 className="font-semibold text-comet-white mb-2">AI Response:</h4>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ background: '#1a365d', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.875rem', overflowX: 'auto' }}>
              {response}
            </SyntaxHighlighter>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AIDemoOrb;
