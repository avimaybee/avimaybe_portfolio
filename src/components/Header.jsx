const Header = () => {
  return (
    <header className="bg-night-gradient-teal-end p-4 flex justify-between items-center">
      <h1 className="text-2xl font-serif text-comet-white">Celestial Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-comet-white hover:text-comet-pink-peach">About</a></li>
          <li><a href="#projects" className="text-comet-white hover:text-comet-pink-peach">Projects</a></li>
          <li><a href="#contact" className="text-comet-white hover:text-comet-pink-peach">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
