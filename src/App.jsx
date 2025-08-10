import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import CelestialScroll from './components/CelestialScroll';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CelestialScroll />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;