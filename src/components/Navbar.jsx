import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import photo from '../assets/rubik_orig.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.addEventListener('mousedown', closeMenu);
        } else {
            document.removeEventListener('mousedown', closeMenu);
        }
    };

    const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
            setIsOpen(false);
            document.removeEventListener('mousedown', closeMenu);
        }
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('mousedown', closeMenu);
        };
    }, []);


    const [offset, setOffset] = useState(0);
    const [homeOffset, setHomeOffset] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOffset(-70);
                setHomeOffset(-100);
            } else {
                setOffset(0);
                setHomeOffset(0);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    return (
        <nav className="w-full fixed top-0 z-10 bg-gray-800 bg-opacity-90 shadow-lg">
            <div className="container flex items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center">
                    <Link to="home" smooth={true} duration={500}
                        offset={homeOffset}
                        className="text-white text-2xl font-bold cursor-pointer flex items-center"> 
                        <img src={photo} alt="Rubik's cube" className="h-10 w-10 mr-2" />
                        Ernesto Orozco
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="about" smooth={true} duration={500} offset={offset} className="text-white p-2 hover:text-gray-300 cursor-pointer">Sobre Mi</Link>
                    <Link to="skills" smooth={true} duration={500} offset={offset} className="text-white p-2 hover:text-gray-300 cursor-pointer">Habilidades</Link>
                    <Link to="projects" smooth={true} duration={500} offset={offset} className="text-white p-2 hover:text-gray-300 cursor-pointer">Proyectos</Link>
                </div>
                <div className="md:hidden" ref={buttonRef}>
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div ref={menuRef} className="md:hidden bg-gray-800 bg-opacity-90 px-4 py-2">
                    <Link to="about" smooth={true} duration={500} offset={offset} className="block text-white p-2 hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Sobre Mi</Link>
                    <Link to="skills" smooth={true} duration={500} offset={offset} className="block text-white p-2 hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Habilidades</Link>
                    <Link to="projects" smooth={true} duration={500} offset={offset} className="block text-white p-2 hover:text-gray-300 cursor-pointer" onClick={toggleMenu}>Proyectos</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
