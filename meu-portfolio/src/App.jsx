
import "./App.css"
import Particless from "./components/particules";
import fotoPerfil from './assets/perfil.jpg'
import { Canvas } from "@react-three/fiber";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import StarBackground from "./components/StarBackround";

function App() {

  const [exploded, setExploded] = useState(false);


useEffect(() => {
  const timer = setTimeout(() => {
    setExploded(true);
  }, 2000);

  return () => clearTimeout(timer); // limpa o timeout se o componente desmontar
}, []); // [] garante que execute apenas 1 vez


  return (
  <main className="w-screen text-white bg-app overflow-x-hidden">

    <section className="relative h-screen overflow-hidden">
    <Canvas className="w-full h-screen" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <Particless count={2000} exploded={exploded} setExploded={setExploded} />
    </Canvas>

    {/* Overlay Header */}
    <div className={`absolute top-0 left-0 w-full z-10 transition-all duration-3000 ${exploded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
      <Header className= 'fixed' />
    </div>

    {/* Conteúdo central */}
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center transition-all duration-3000 ${exploded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <div className="group relative inline-block cursor-pointer">
        <h1 className="text-8xl font-bold mb-0 opacity-80 group-hover transition-opacity blur-[0.4px] drop-shadow-xl/50">Guilherme</h1>
        <p className="text-xl antialiased italic font-semibold  drop-shadow-xl/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Desenvolvedor Fullstack</p>
      </div>
    </div>
    </section>

    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-app to-black px-8">
        <StarBackground/>

        <div className="max-w-2x1 w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img src={fotoPerfil} alt="Foto de perfil" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <h2 className="text-6xl font-bold  opacity-80 ">
              Sobre mim
            </h2>
            <p className="text-lg leading-relaxed opacity-90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam beatae impedit magni repellat doloremque ipsa quae illo expedita eligendi quam in adipisci animi accusantium, vitae assumenda sint totam recusandae!</p>
            <p className="text-lg leading-relaxed opacity-80">
               Quando não estou codando, costumo estudar novas tecnologias, tocar
              violão e criar projetos pessoais que me desafiam a aprender algo novo.
             </p>
          </div>
        </div>

    </section>

  </main>
  );
}

export default App;