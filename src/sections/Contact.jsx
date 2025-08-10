import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-night-gradient-teal-end text-comet-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-header font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Have a project in mind or just want to say hello? Feel free to reach out!
        </motion.p>

        <motion.form
          className="flex flex-col gap-6 bg-deep-sky-blue p-8 rounded-2xl shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-neutral-off-white text-deep-sky-blue placeholder-desaturated-gray focus:outline-none focus:ring-2 focus:ring-comet-pink-peach focus:shadow-glow-sm transition-all duration-300"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-neutral-off-white text-deep-sky-blue placeholder-desaturated-gray focus:outline-none focus:ring-2 focus:ring-comet-pink-peach focus:shadow-glow-sm transition-all duration-300"
          />
          <Textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg bg-neutral-off-white text-deep-sky-blue placeholder-desaturated-gray focus:outline-none focus:ring-2 focus:ring-comet-pink-peach focus:shadow-glow-sm transition-all duration-300"
          ></Textarea>
          <Button
            type="submit"
            className="px-8 py-3 bg-comet-pink-peach text-deep-sky-blue rounded-full text-lg font-medium shadow-glow-sm hover:bg-soft-gold transition-all duration-400 ease-in-out transform hover:-translate-y-1"
          >
            Send Message
          </Button>
        </motion.form>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg mb-4">Current Availability: <span className="font-semibold text-comet-pink-peach">Open for new projects!</span></p>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="#" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            {/* Add more social media icons as needed */}
          </div>
          <p className="text-sm opacity-70 mt-8">(Note: Social media icons require Font Awesome or similar library to be linked in index.html)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
