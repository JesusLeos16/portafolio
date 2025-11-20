import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Gamepad2, Cpu, Layers } from 'lucide-react';

const TechStack = () => {
    const technologies = [
        { name: 'React / Next.js', icon: <Code2 className="w-8 h-8" />, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: <Layers className="w-8 h-8" />, color: 'text-cyan-400' },
        { name: 'Web3 / Blockchain', icon: <Globe className="w-8 h-8" />, color: 'text-purple-400' },
        { name: 'Unity / C#', icon: <Gamepad2 className="w-8 h-8" />, color: 'text-white' },
        { name: 'Node.js', icon: <Cpu className="w-8 h-8" />, color: 'text-green-400' },
        { name: 'SQL / NoSQL', icon: <Database className="w-8 h-8" />, color: 'text-yellow-400' },
    ];

    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
                Stack <span className="text-accent">Tecnológico</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group cursor-default"
                    >
                        <div className={`p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                            {tech.icon}
                        </div>
                        <span className="font-medium text-sm text-center text-gray-300 group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
