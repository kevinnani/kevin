import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d47a1", // Dark blue background
        },
        fullScreen: {
          enable: true, // Ensures the particles fill the screen
          zIndex: -1,   // Keeps the particles behind other elements
        },
        particles: {
          number: {
            value: 100, // Number of particles
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#ffffff" }, // Particle color (white)
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: { enable: true, speed: 1 },
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
