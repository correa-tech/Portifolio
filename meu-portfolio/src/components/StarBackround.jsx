import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "tran",
      },
      particles: {
        number: { value: 250 },
        color: { value: "#2C3AED" },
        size: { value: 1.2 },
        move: { enable: true, speed: 0.1 },
        opacity: { value: 0.8 },
      },
      fullScreen: { enable: true },
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}