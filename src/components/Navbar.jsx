import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import photo from '../assets/rubik_orig.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const { isDark, toggleTheme } = useTheme();

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
        <nav className="w-full fixed top-0 z-50 glass border-b border-white/10">
            <div className="container flex items-center justify-between mx-auto px-4 py-4">
                <div className="flex items-center">
                    <Link to="home" smooth={true} duration={500}
                        offset={homeOffset}
                        className="text-theme-primary text-xl md:text-2xl font-bold cursor-pointer flex items-center hover:scale-105 transition-transform duration-300">
                        <div className="relative mr-3">
                            <img src={photo} alt="Rubik's cube" className="h-10 w-10 rounded-lg shadow-lg animate-float" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                        </div>
                        <span className="sr-only">Ir a inicio</span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Ernesto Orozco
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <Link to="about" smooth={true} duration={500} offset={offset}
                        className="text-theme-primary px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        Sobre Mí
                    </Link>
                    <Link to="skills" smooth={true} duration={500} offset={offset}
                        className="text-theme-primary px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        Habilidades
                    </Link>
                    <Link to="projects" smooth={true} duration={500} offset={offset}
                        className="text-theme-primary px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        Proyectos
                    </Link>
                    <div className="ml-4 pl-4 border-l border-white/20">
                        <button
                            onClick={toggleTheme}
                            aria-label="Cambiar tema"
                            className="glass text-theme-primary px-3 py-2 rounded-lg text-sm hover:scale-105 transition-all duration-300 border border-white/20 flex items-center gap-2">
                            {isDark ? <FaSun /> : <FaMoon />}
                            {isDark ? 'Claro' : 'Oscuro'}
                        </button>
                    </div>
                </div>

                <div className="md:hidden" ref={buttonRef}>
                    <button
                        onClick={toggleMenu}
                        className="text-theme-primary focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                        aria-label="Menú de navegación">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div ref={menuRef} className="md:hidden glass border-t border-white/10">
                    <div className="container px-4 py-4 space-y-2">
                        <Link to="about" smooth={true} duration={500} offset={offset}
                            className="block text-theme-primary p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            onClick={toggleMenu}>
                            Sobre Mí
                        </Link>
                        <Link to="skills" smooth={true} duration={500} offset={offset}
                            className="block text-theme-primary p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            onClick={toggleMenu}>
                            Habilidades
                        </Link>
                        <Link to="projects" smooth={true} duration={500} offset={offset}
                            className="block text-theme-primary p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            onClick={toggleMenu}>
                            Proyectos
                        </Link>
                        <div className="pt-2 border-t border-white/10">
                            <button
                                onClick={toggleTheme}
                                aria-label="Cambiar tema"
                                className="w-full glass text-theme-primary p-3 rounded-lg text-sm hover:bg-white/10 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2">
                                {isDark ? <FaSun /> : <FaMoon />}
                                {isDark ? 'Modo Claro' : 'Modo Oscuro'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
