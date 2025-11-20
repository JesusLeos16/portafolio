import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Sobre <span className="text-accent">Mí</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Soy un apasionado por la innovación digital y el desarrollo de software.
                        Actualmente estudio <span className="text-white font-medium">Tecnologías de la Información e Innovación Digital</span> en la
                        <span className="text-accent font-medium"> Universidad Tecnológica de Chihuahua (UTCH)</span>.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Mi enfoque principal es el desarrollo <span className="text-white font-medium">Fullstack</span> y el ecosistema <span className="text-white font-medium">Web3</span>,
                        aunque también disfruto creando experiencias interactivas en <span className="text-white font-medium">Unity</span>.
                        Me motiva resolver problemas complejos y crear soluciones que tengan un impacto real en la sociedad.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
                        <div className="text-center z-10">
                            <span className="text-6xl md:text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors">DEV</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
