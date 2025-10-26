import { useInView } from "react-intersection-observer";
import fotoPerfil from '../assets/perfil.jpg';
import Button from "./Button";
import TechStack from "./Techs";



function SobreMimSection() {
  


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="sobre"
      ref={ref}
      className={`min-h-screen max-w-full flex items-center justify-center bg-gradient-to-b from-app to-black px-8 py-16 
        transform transition-all duration-2000 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1  md:grid-cols-2 gap-16 items-center">
        
        {/* Coluna ESQUERDA: foto + stacks */}
        <div className="group flex flex-col md:items-center gap-8 h-full justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-xl
                  transition-transform duration-2000 ease-out
                  group-hover:-translate-y-30">
            <img
              src={fotoPerfil}
              alt="Guilherme"
              className="object-cover w-full h-full group-hover transition-opacity blur-[0.4px]"
            />
          </div>

          <div className="absolute w-full max-w-[1px] grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center 
                  opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-50   
                  transition-all duration-1000 ease-out">
            <TechStack />
          </div>
        </div>

        {/* Coluna DIREITA: texto */}
        <div className="flex flex-col justify-center h-full space-y-6 text-center md:text-left">
          <h2 className="text-6xl font-bold opacity-80">Sobre mim</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Olá! Sou o Guilherme Luiz, desenvolvedor Fullstack com foco em Java e Spring Boot no backend e React com Tailwind CSS no frontend.
            Tenho interesse em criar páginas completas e bem estruturadas, unindo funcionalidade e design para entregar experiências modernas e atraentes.
            Gosto de transformar ideias em soluções escaláveis, capazes de se integrar a grandes sistemas ou aplicações empresariais.
            Atualmente, estudo para me tornar um profissional completo e autônomo, sempre buscando aprimorar minhas habilidades e criar projetos cada vez mais consistentes.
          </p>

          <a
            href="/CV-GUILHERME-LUIS-CORREA.pdf"
            download="CV-GUILHERME-LUIS-CORREA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">📄 Baixar CV</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SobreMimSection;
