import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl z-10"
            >
                <h2 className="text-accent font-medium tracking-wider uppercase text-sm md:text-base">
                    Portafolio Personal
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter">
                    Jesus Enrique <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Leos Morones
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
                    Estudiante de Tecnologías de la Información e Innovación Digital.
                    <span className="text-white font-medium"> Desarrollador Fullstack & Web3</span> enfocado en resolver problemas reales mediante código.
                </p>

                <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-accent text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            Ver Proyectos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-all hover:border-white/30"
                    >
                        Contáctame
                    </a>
                </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        </section>
    );
};

export default Hero;
