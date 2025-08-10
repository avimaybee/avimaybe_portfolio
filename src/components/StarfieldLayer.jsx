import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const StarfieldLayer = ({ speed, density, size, opacity, twinkle, prefersReducedMotion }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = {
    fullScreen: {
      enable: false, // We will control positioning in Hero.jsx
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#fafbff", // Comet White
      },
      links: {
        enable: false,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "bottom",
        enable: !prefersReducedMotion, // Disable movement if reduced motion is preferred
        outModes: {
          default: "out",
        },
        random: false,
        speed: speed, // Controlled by prop
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: density, // Controlled by prop
      },
      opacity: {
        value: opacity, // Controlled by prop
        random: true,
        anim: {
          enable: twinkle && !prefersReducedMotion, // Disable twinkle if reduced motion is preferred
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: size, // Controlled by prop
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id={`tsparticles-${speed}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
      style={{ filter: 'drop-shadow(0 0 2px rgba(250,251,255,0.3))' }} // Soft glow
    />
  );
};

export default StarfieldLayer;
