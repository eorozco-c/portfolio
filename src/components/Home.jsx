import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFilePdf  } from 'react-icons/fa';
import photo from '../assets/eorozco1.png';

function Home() {

    return (
        <section id="home" className="container md:h-screen flex items-center justify-center mx-auto  md:my-10 mt-20 md:p-8 px-4">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="md:w-2/5">
                    <img src={photo} alt="profile" className="rounded-full shadow-2xl" />
                </div>
                <div className="md:w-2/5">
                    <h1 className="text-5xl font-bold">Hola!, soy Ernesto Orozco.</h1>
                    <TypeAnimation
                        className="text-2xl mt-10"
                        cursor={true}
                        sequence={[
                            'Desarrollador Full-Stack.', 1000,
                            'Administrador de Sistemas.', 1000,
                            'Proactivo y autodidacta.', 1000,
                        ]}
                        repeat={Infinity}
                        speed={60}
                    />
                    <div className="flex mt-10">
                        <a href="https://github.com/eorozco-c" className="text-3xl mr-4" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ernesto-orozco-castro/" className="text-3xl mr-4" target="_blank">
                            <FaLinkedin />
                        </a>
                        {/* <a href="/assets/Curriculum vitaeV3.1.pdf" download className="text-3xl" target="_blank">
                            <FaFilePdf />
                        </a> */}

                    </div> 
                </div>
            </div>
        </section>
    );
}

export default Home;