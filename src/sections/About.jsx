const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-primary-deep-sky-blue">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-comet-white mb-4">About Me</h2>
        <p className="text-lg text-comet-white mb-8">I am a creative professional who embraces AI to enhance my workflow and deliver exceptional results.</p>
        <div className="bg-night-gradient-teal-end p-6 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-comet-white mb-4">AI as my Co-Pilot</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-comet-white">
            <div>
              <h4 className="font-bold">1. Idea</h4>
              <p>Starting with a creative spark.</p>
            </div>
            <div>
              <h4 className="font-bold">2. AI Brainstorm</h4>
              <p>Leveraging AI for rapid ideation.</p>
            </div>
            <div>
              <h4 className="font-bold">3. Human Refinement</h4>
              <p>Adding the human touch and expertise.</p>
            </div>
            <div>
              <h4 className="font-bold">4. Final Output</h4>
              <p>Delivering a polished and impactful result.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
