import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Trophy, Rocket, Brain, Swords, Gamepad2, ShoppingBag, X } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onClick(project)}
            className={`relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-colors cursor-pointer ${project.className || ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
            )}
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
                            {project.achievementIcon || <Trophy className="w-4 h-4" />}
                            {project.achievement}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-accent/10 relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-accent hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Header Image */}
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 -mt-20 relative">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                                {project.icon}
                            </div>
                            <span className="text-accent font-bold tracking-wider uppercase text-sm">
                                {project.category}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{project.title}</h2>
                        {project.achievement && (
                            <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-6">
                                {project.achievementIcon || <Trophy className="w-4 h-4" />}
                                {project.achievement}
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-white">Sobre el Proyecto</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {project.extendedDescription || project.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-white">Tecnologías</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 text-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
                                    <div className="space-y-3">
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors font-medium group"
                                        >
                                            <Github className="w-5 h-5" />
                                            Ver Código
                                        </a>
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent hover:bg-accent/80 text-white transition-colors font-medium shadow-lg shadow-accent/20"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "UNI-PONT",
            category: "Web3 / Blockchain",
            description: "API que reemplaza el OAuth tradicional permitiendo autenticación descentralizada mediante billeteras digitales. Devuelve el control de la identidad al usuario.",
            extendedDescription: "Uni-Pont es una solución innovadora diseñada para devolver la soberanía de la identidad digital a los usuarios. Utilizando el estándar 'Sign-In with Ethereum' (SIWE), permite a los desarrolladores integrar autenticación segura y descentralizada en sus aplicaciones con solo unas pocas líneas de código. El sistema elimina la necesidad de contraseñas y reduce la dependencia de grandes proveedores de identidad centralizados.",
            tech: ["Web3", "SIWE", "Blockchain API", "Node.js", "Express"],
            achievement: "2do Lugar - Ethereum Mexico 2025",
            image: "/unipont.png",
            icon: <Rocket className="w-5 h-5 text-accent" />,
            className: "md:col-span-2 md:row-span-2 min-h-[400px]",
            repoLink: "https://github.com",
            demoLink: "https://demo.com"
        },
        {
            title: "SISTEMA ZIPPY",
            category: "Fullstack / Gamificación",
            description: "Sistema de economía escolar digital con moneda imaginaria 'Zippy' para premiar el desempeño académico.",
            extendedDescription: "Zippy transforma la experiencia educativa mediante la gamificación. Los profesores pueden otorgar 'Zippys' a los estudiantes por buen comportamiento, calificaciones altas o participación. Estos puntos pueden ser canjeados en una tienda virtual escolar por recompensas reales o privilegios. Incluye un panel de administración para maestros y una billetera digital divertida para los alumnos.",
            tech: ["Economía Digital", "Gamificación", "Web Dev", "React", "Firebase"],
            achievement: "4to Lugar - MIT-ICATECH",
            image: "/zippy.png",
            icon: <Brain className="w-5 h-5 text-accent" />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            repoLink: "https://github.com",
            demoLink: "https://demo.com"
        },
        {
            title: "YUYIN: SPACE ADVENTURE",
            category: "Game Dev",
            description: "Videojuego sobre un astronauta diseñado para combatir la falta de concentración mediante mecánicas de atención sostenida.",
            extendedDescription: "Yuyin es más que un juego; es una herramienta terapéutica disfrazada de aventura espacial. Diseñado con la ayuda de psicólogos infantiles, utiliza mecánicas de juego específicas que requieren atención sostenida y respuesta rápida para ayudar a niños con déficit de atención a entrenar su concentración de una manera divertida y no intrusiva.",
            tech: ["Unity", "C#", "Game Design", "Pixel Art"],
            achievement: "NASA Space Apps",
            image: "/yuyin.png",
            icon: <Gamepad2 className="w-5 h-5 text-accent" />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            repoLink: "https://github.com",
            demoLink: "https://demo.com"
        },
        {
            title: "CHAOSPORTS",
            category: "Fullstack / E-commerce",
            description: "Plataforma web de catálogo para una tienda de artes marciales. Incluye sistema de categorías, vista de productos y contacto vía WhatsApp.",
            extendedDescription: "Una solución de comercio electrónico moderna y robusta para una tienda especializada en artes marciales. A diferencia de las plataformas genéricas, Chaosports está optimizada para mostrar equipamiento técnico con especificaciones detalladas. Cuenta con integración directa a WhatsApp Business para cerrar ventas, gestión de inventario en tiempo real y un diseño agresivo acorde a la marca.",
            tech: ["React", "Node.js", "Tailwind", "MongoDB"],
            achievement: "Proyecto Freelance",
            achievementIcon: <ShoppingBag className="w-4 h-4" />,
            image: "/chaosp.png",
            icon: <Swords className="w-5 h-5 text-accent" />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            repoLink: "https://github.com",
            demoLink: "https://demo.com"
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
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
