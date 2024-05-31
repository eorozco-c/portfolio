import React from 'react';
import corusImage from '../assets/corus.jpg';
import mantenedorCorreosImage from '../assets/mantenedor_correos.png';
import clinspaImage from '../assets/clinspa.jpg';
import sisrgImage from '../assets/sisrg.jpg';

import { DiAsterisk } from 'react-icons/di';
import { FaReact,FaMailBulk  } from 'react-icons/fa';
import { SiDjango,SiWebrtc  } from 'react-icons/si';

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
        icons : ['Asterisk', 'Django', 'React', 'SMTP']
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
        <section id="projects" className="container mx-auto px-4 pt-16">
            <div className="flex flex-col items-center  mb-10">
                <h1 className="text-3xl font-bold text-center">Proyectos</h1>
                <small className="text-center text-lg mt-2 text-white">Por razones de confidencialidad, los detalles específicos de las plataformas no pueden ser compartidos.</small>
            </div>
            <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4">
            {projects.map((project, index) => (
                    <div key={index} className="portfolio_item bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden border border-gray-900">
                        <div className="portfolio_img">
                            <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
                        </div>
                        <div className="portfolio_item_info p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-2">{project.description}</p>
                    </div>
                    <div className="flex items-center justify-around my-3">
                                {project.icons && project.icons.map((icon, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <h3 className="text-xl">{getIcon(icon)}</h3>
                                        <span className="text-sm">{icon}</span>
                                    </div>
                                ))}
                            </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
