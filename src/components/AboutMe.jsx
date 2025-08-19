import React from 'react';
import { getExperienceText } from '../utils/experience';
import photo from '../assets/rubik_bg.gif';

const AboutMe = () => {
    const experienceText = getExperienceText();

    return (
        <section id="about" className="container min-h-screen flex items-center justify-center mx-auto py-20 px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
                <div className="lg:w-3/5 space-y-6">
                    <div className="glass p-8 rounded-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Sobre Mí
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p className="text-theme-secondary">
                                Soy <span className="text-theme-primary font-semibold">Desarrollador Full Stack</span> con
                                <span className="text-theme-accent font-semibold"> {experienceText} de experiencia</span> en el rubro TI.
                                Tengo amplia experiencia en administración de infraestructuras TI y en la supervisión y evaluación de incidentes.
                            </p>
                            <p className="text-theme-secondary">
                                Soy <span className="text-theme-success font-semibold">proactivo, autodidacta</span> y capaz de coordinar
                                múltiples tareas bajo presión, siempre buscando soluciones innovadoras y eficientes.
                            </p>
                            <p className="text-theme-secondary">
                                Aunque me siento más cómodo trabajando en el <span className="text-purple-400 font-semibold">lado del servidor</span>,
                                también disfruto del desarrollo del lado del cliente, especialmente
                                con herramientas modernas que me permiten operar en ambos ámbitos.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                            <div className="glass p-4 rounded-lg">
                                <div className="text-2xl font-bold text-theme-accent">{experienceText}</div>
                                <div className="text-sm text-theme-secondary">Experiencia</div>
                            </div>
                            <div className="glass p-4 rounded-lg">
                                <div className="text-2xl font-bold text-theme-success">50+</div>
                                <div className="text-sm text-theme-secondary">Proyectos</div>
                            </div>
                            <div className="glass p-4 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400">100%</div>
                                <div className="text-sm text-theme-secondary">Dedicación</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/5 flex justify-center">
                    <div className="glass p-6 rounded-2xl">
                        <img src={photo} alt="Animación Rubik" className="rounded-xl shadow-lg max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;