const Header = () => {
  return (
    <header className="bg-night-gradient-teal-end p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <a href="#hero" className="text-2xl font-serif text-comet-white hover:text-comet-pink-peach transition-colors duration-300">Celestial Portfolio</a>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300 relative group">About<span className="absolute left-0 bottom-0 w-full h-0.5 bg-comet-pink-peach scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span></a></li>
          <li><a href="#projects" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300 relative group">Projects<span className="absolute left-0 bottom-0 w-full h-0.5 bg-comet-pink-peach scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span></a></li>
          <li><a href="#contact" className="text-comet-white hover:text-comet-pink-peach transition-colors duration-300 relative group">Contact<span className="absolute left-0 bottom-0 w-full h-0.5 bg-comet-pink-peach scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

