import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesNBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d1117",
        },
        particles: {
          number: {
            value: 100,
          },
          shape: {
            type: "star",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesNBackground;
