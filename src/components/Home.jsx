import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import ProfileImage from './ProfileImage';
import { useDownload } from '../hooks/useDownload';

function Home() {
    const { downloadCV, isDownloading } = useDownload();

    return (
        <section id="home" className="container min-h-screen flex items-center justify-center mx-auto py-20 px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-12 relative">

                {/* Contenido Principal */}
                <div className="lg:w-3/5 space-y-8 z-10">
                    <div className="glass p-8 rounded-2xl relative overflow-hidden">
                        {/* Efecto de brillo animado */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>

                        <div className="relative z-10">
                            <h1 className="text-4xl lg:text-6xl font-black mb-4">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Hola, soy
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Ernesto Orozco
                                </span>
                            </h1>

                            <div className="h-20 mb-6">
                                <TypeAnimation
                                    className="text-xl lg:text-2xl font-medium text-theme-accent"
                                    cursor={true}
                                    sequence={[
                                        'Desarrollador Full-Stack con 13+ años de experiencia', 2000,
                                        'Especialista en Infraestructura y DevOps', 2000,
                                        'Arquitecto de Soluciones Escalables', 2000,
                                        'Innovador en Tecnologías Modernas', 2000,
                                    ]}
                                    repeat={Infinity}
                                    speed={50}
                                />
                            </div>

                            <p className="text-lg text-theme-secondary mb-8 leading-relaxed">
                                Transformo ideas en soluciones tecnológicas robustas. Me especializo en crear
                                sistemas escalables que impulsan el crecimiento empresarial.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="https://github.com/eorozco-c"
                                    className="btn-primary group hover:bg-gray-800 transition-all duration-300"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="group-hover:rotate-12 transition-transform duration-300" />
                                    Ver Proyectos
                                </a>
                                <a href="https://www.linkedin.com/in/ernesto-orozco-castro/"
                                    className="btn-primary bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-none"
                                    target="_blank" rel="noreferrer">
                                    <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
                                    Conectemos
                                </a>
                                <button
                                    onClick={downloadCV}
                                    disabled={isDownloading}
                                    className="btn-primary bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isDownloading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            Descargando...
                                        </>
                                    ) : (
                                        <>
                                            <FaDownload />
                                            Descargar CV
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Imagen Profesional */}
                <div className="lg:w-2/5 flex justify-center relative">
                    {/* Fondo decorativo animado */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>

                    <div className="relative">
                        {/* Container de la imagen con efectos */}
                        <div className="glass p-6 rounded-3xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
                            {/* Efecto de resplandor en hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <ProfileImage
                                    className="w-64 h-80 lg:w-72 lg:h-96 object-cover rounded-2xl shadow-2xl transform hover:rotate-1 transition-all duration-500"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                                        objectPosition: 'center top'
                                    }}
                                />



                            </div>
                        </div>

                        {/* Elementos decorativos flotantes */}
                        <div className="absolute -z-10 top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
                        <div className="absolute -z-10 bottom-10 -right-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute -z-10 top-1/2 -right-5 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
                    </div>
                </div>

                {/* Elemento decorativo de fondo */}
                <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 rounded-3xl"></div>
            </div>
        </section>
    );
}

export default Home;