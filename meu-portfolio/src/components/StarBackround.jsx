import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      function setTime (){
        setInit(true);
      }setTimeout(setTime, 4000)


    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "tran",
      },
      particles: {
        number: { value: 250 },
        color: { value: "#FFFFFF" },
        size: { value: 0.05 },
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