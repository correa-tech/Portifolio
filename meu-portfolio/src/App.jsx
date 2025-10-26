
import "./App.css"
import Particless from "./components/particules";
import { Canvas } from "@react-three/fiber";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {

  const [exploded, setExploded] = useState(false);


useEffect(() => {
  const timer = setTimeout(() => {
    setExploded(true);
  }, 2000);

  return () => clearTimeout(timer); // limpa o timeout se o componente desmontar
}, []); // [] garante que execute apenas 1 vez


  return (
  <main className="relative w-screen h-screen overflow-hidden text-white bg-app">

    <Canvas className="w-full h-screen" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <Particless count={2000} exploded={exploded} setExploded={setExploded} />
    </Canvas>

    {/* Overlay Header */}
    <div className={`absolute top-0 left-0 w-full z-10 transition-all duration-3000 ${exploded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <Header />
    </div>

    {/* Conteúdo central */}
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center transition-all duration-3000 ${exploded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <div className="group relative inline-block cursor-pointer">
      <h1 className="text-8xl font-bold mb-0 opacity-80 group-hover transition-opacity blur-[0.4px] drop-shadow-xl/50">Guilherme</h1>
      <p className="text-xl antialiased italic font-semibold  drop-shadow-xl/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Desenvolvedor Fullstack</p>
      </div>

    </div>

    

    
    

  </main>
  );
}

export default App;