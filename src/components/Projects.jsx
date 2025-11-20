import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy, Rocket, Brain } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-colors ${project.className || ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        {project.icon}
                        <span className="text-accent text-sm font-bold tracking-wider uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.achievement && (
                        <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                            <Trophy className="w-4 h-4" />
                            {project.achievement}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "UNI-PONT",
            category: "Web3 / Blockchain",
            description: "API que reemplaza el OAuth tradicional permitiendo autenticación descentralizada mediante billeteras digitales. Devuelve el control de la identidad al usuario.",
            tech: ["Web3", "SIWE", "Blockchain API"],
            achievement: "2do Lugar - Ethereum Mexico 2025",
            icon: <Rocket className="w-5 h-5 text-accent" />,
            className: "md:col-span-2 md:row-span-2 min-h-[400px]"
        },
        {
            title: "SISTEMA ZIPPY",
            category: "Fullstack / Gamificación",
            description: "Sistema de economía escolar digital con moneda imaginaria 'Zippy' para premiar el desempeño académico.",
            tech: ["Economía Digital", "Gamificación", "Web Dev"],
            achievement: "4to Lugar - MIT-ICATECH",
            icon: <Brain className="w-5 h-5 text-accent" />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]"
        },
        {
            title: "YUYIN: SPACE ADVENTURE",
            category: "Game Dev",
            description: "Videojuego sobre un astronauta diseñado para combatir la falta de concentración mediante mecánicas de atención sostenida.",
            tech: ["Unity", "C#", "Game Design"],
            achievement: "NASA Space Apps",
            icon: <Gamepad2 className="w-5 h-5 text-accent" />, // Need to import Gamepad2
            className: "md:col-span-1 md:row-span-1 min-h-[200px]"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Proyectos <span className="text-accent">Destacados</span>
                </h2>
                <p className="text-gray-400">Hackathons, competencias y desarrollo personal.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

// Need to import Gamepad2 again since it's used in the array but not imported
import { Gamepad2 } from 'lucide-react';

export default Projects;
