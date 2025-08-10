import { Button } from '../components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-night-gradient-teal-end p-8 mt-16 text-comet-white">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Collaborated With Section */}
        <div className="w-full text-center">
          <h3 className="text-xl font-semibold mb-4">Collaborated With</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Placeholder for logos - replace with actual image tags */}
            <span className="text-lg font-medium opacity-75">Brand A</span>
            <span className="text-lg font-medium opacity-75">Brand B</span>
            <span className="text-lg font-medium opacity-75">Brand C</span>
          </div>
        </div>

        {/* Built With Section */}
        <div className="w-full text-center">
          <h3 className="text-xl font-semibold mb-4">Built With</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="px-4 py-2 bg-deep-sky-blue rounded-full text-sm font-medium shadow-md">React</span>
            <span className="px-4 py-2 bg-deep-sky-blue rounded-full text-sm font-medium shadow-md">Vite</span>
            <span className="px-4 py-2 bg-deep-sky-blue rounded-full text-sm font-medium shadow-md">Tailwind CSS</span>
            <span className="px-4 py-2 bg-deep-sky-blue rounded-full text-sm font-medium shadow-md">Framer Motion</span>
          </div>
        </div>

        <p className="text-center text-sm opacity-80">&copy; 2025 Celestial Portfolio. All rights reserved.</p>

        <div className="flex justify-center space-x-6 text-3xl">
          <Button asChild variant="link" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="LinkedIn">
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </Button>
          <Button asChild variant="link" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="GitHub">
            <a href="#"><i className="fab fa-github"></i></a>
          </Button>
          <Button asChild variant="link" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300" aria-label="Twitter">
            <a href="#"><i className="fab fa-twitter"></i></a>
          </Button>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
