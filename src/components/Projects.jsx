import React from 'react';
import corusImage from '../assets/corus.jpg';
import mantenedorCorreosImage from '../assets/mantenedor_correos.png';
import clinspaImage from '../assets/clinspa.jpg';
import sisrgImage from '../assets/sisrg.jpg';

import { DiAsterisk } from 'react-icons/di';
import { FaReact, FaMailBulk } from 'react-icons/fa';
import { SiDjango, SiWebrtc } from 'react-icons/si';

const projects = [
    {
        img: corusImage,
        title: "Corus - Contact Center",
        description: "Plataforma de telefonía capaz de gestionar flujo y distribución de llamadas y fácil de integrar con cualquier servicio externo como SMS, WhatsApp, entre otros.",
        icons: ['Asterisk', 'Django', 'React', 'WebRTC']
    },
    {
        img: mantenedorCorreosImage,
        title: "Plataforma Correo a TTS",
        description: "Plataforma que está constantemente leyendo una casilla de correos y genera llamadas a los usuarios con la información del email.",
        icons: ['Asterisk', 'Django', 'React', 'SMTP']
    },
    {
        img: clinspaImage,
        title: "Plataforma de cálculos basado en plantillas",
        description: "Plataforma que se encarga de obtener parámetros de entradas y puntos de medición que con datos filtrados por fecha se generan informes PDF y gráficos de tendencias para su posterior análisis.",
        icons: ['Django', 'React']

    },
    {
        img: sisrgImage,
        title: "Sistema de Rendicion de Gastos",
        description: "Sistema que permite a los usuarios de la empresa cargar sus gastos y generar informes de rendición de gastos.",
        icons: ['Django', 'React']
    }
];

const getIcon = (item) => {
    switch (item) {
        case 'Asterisk':
            return <DiAsterisk />;
        case 'Django':
            return <SiDjango />;
        case 'React':
            return <FaReact />;
        case 'WebRTC':
            return <SiWebrtc />;
        case 'SMTP':
            return <FaMailBulk />;
        default:
            return null;

    }
}

const Projects = () => {
    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Proyectos Destacados
                </h2>
                <p className="text-lg text-theme-secondary max-w-3xl mx-auto">
                    Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack y administración de sistemas.
                </p>
                <div className="mt-4 p-4 glass rounded-lg inline-block">
                    <small className="text-sm text-theme-secondary">
                        Por razones de confidencialidad, los detalles específicos de las plataformas no pueden ser compartidos.
                    </small>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio_item glass text-white rounded-2xl overflow-hidden group">
                        <div className="portfolio_img relative overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="portfolio_item_info p-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 text-theme-primary">{project.title}</h3>
                            <p className="text-theme-secondary mb-4 text-sm leading-relaxed">{project.description}</p>

                            <div className="border-t border-white/10 pt-4">
                                <p className="text-xs font-semibold text-theme-primary mb-3 uppercase tracking-wide">Tecnologías</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.icons && project.icons.map((icon, iconIndex) => (
                                        <div key={iconIndex} className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                            <span className="text-sm text-theme-accent">{getIcon(icon)}</span>
                                            <span className="text-xs text-theme-secondary">{icon}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="glass p-8 rounded-2xl inline-block max-w-2xl">
                    <h3 className="text-xl font-semibold text-white mb-3">¿Interesado en colaborar?</h3>
                    <p className="muted mb-4">
                        Siempre estoy abierto a nuevos desafíos y oportunidades de desarrollo.
                        Contactemos para discutir tu próximo proyecto.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <a href="https://github.com/eorozco-c" target="_blank" rel="noreferrer" className="btn-primary">
                            Ver más en GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ernesto-orozco-castro/" target="_blank" rel="noreferrer" className="btn-primary bg-[#0b74ff] text-white">
                            Conectar en LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
