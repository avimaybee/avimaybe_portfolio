const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-night-gradient-teal-end">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-comet-white mb-4">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-2 rounded bg-comet-white text-primary-deep-sky-blue" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-comet-white text-primary-deep-sky-blue" />
          <textarea placeholder="Message" rows="4" className="p-2 rounded bg-comet-white text-primary-deep-sky-blue"></textarea>
          <button type="submit" className="bg-comet-pink-peach text-primary-deep-sky-blue font-bold py-2 px-4 rounded hover:bg-soft-gold">Send Message</button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-comet-white hover:text-comet-pink-peach">LinkedIn</a>
          <a href="#" className="text-comet-white hover:text-comet-pink-peach">GitHub</a>
          <a href="#" className="text-comet-white hover:text-comet-pink-peach">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
