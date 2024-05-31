import React from 'react';
import photo from '../assets/rubik_bg.gif';
//break of page


const AboutMe = () => {
    return (
        <section id="about" className="container md:h-screen flex items-center justify-center mx-auto sm:mb-20 my-10 px-4">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-2/5">
                    <h1 className="text-3xl font-bold">Sobre Mi</h1>
                    <p className="text-xl mt-10">
                        Soy Desarrollador Full Stack con 12 años de experiencia en el rubro TI.
                        Tengo amplia experiencia en administración de infraestructuras TI y en la supervisión y evaluación de incidentes.
                        Soy proactivo, autodidacta y capaz de coordinar múltiples tareas bajo presión.
                    </p>
                    <p className="text-xl mt-4">
                        Aunque me siento más cómodo trabajando en el lado del servidor,
                        también disfruto del desarrollo del lado del cliente, especialmente
                        con herramientas que me permiten operar en ambos ámbitos.
                    </p>
                </div>
                <div className="md:w-2/5">
                    <img src={photo} alt="rubik gif" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;