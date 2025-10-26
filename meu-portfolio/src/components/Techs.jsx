import { FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";

export default function TechStack() {
  const techs = [
  { icon: <FaJava className="text-orange-500" />, name: "Java" },
  { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
];

  return (
    <section className="min-h-[50vh] ">
      <h2 className="text-4xl text-center font-bold mb-8">Tecnologias</h2>
      <div className="flex flex-row gap-8">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group transition-transform hover:scale-110"
          >
            <div className="text-6xl mb-2 transition-transform group-hover:rotate-6">
              {tech.icon}
            </div>
            <p className="opacity-80">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
