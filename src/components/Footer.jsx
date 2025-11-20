import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 border-t border-white/10 mt-20">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    ¿Listo para <span className="text-accent">Innovar?</span>
                </h2>
                <p className="text-gray-400 max-w-xl mb-12">
                    Siempre estoy abierto a nuevas oportunidades, colaboraciones en Web3 o proyectos de desarrollo interesantes.
                </p>

                <div className="flex gap-6 mb-12">
                    <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all hover:scale-110 group">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all hover:scale-110 group">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all hover:scale-110 group">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all hover:scale-110 group">
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>

                <div className="text-gray-500 text-sm">
                    <p>© 2025 Jesus Enrique Leos Morones. Built with React & Tailwind.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
