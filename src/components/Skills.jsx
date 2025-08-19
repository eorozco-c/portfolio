import React from 'react';
import { FaServer, FaCode, FaProjectDiagram, FaDatabase, FaCodeBranch, FaPython, FaPhp, FaLaravel, FaJs, FaReact, FaHtml5, FaCss3, FaSass, FaGitAlt, FaLinux, FaTools, FaNetworkWired } from 'react-icons/fa';
import { SiNginx, SiDjango, SiFlask, SiCodeigniter, SiJquery, SiMysql, SiMariadb, SiPostgresql, SiPowerbi, SiPandas, SiNumpy, SiAmazonaws, SiIcloud, SiMicrosoftazure, SiRedis } from 'react-icons/si';

const skills = [
    {
        category: 'Backend Development',
        icon: <FaServer />,
        items: ['Python', 'Django', 'Flask', 'PHP', 'Laravel', 'Codeigniter', 'NodeJS'],
        color: 'from-blue-500 to-purple-600'
    },
    {
        category: 'Frontend Development',
        icon: <FaCode />,
        items: ['JavaScript', 'React', 'JQuery', 'HTML', 'CSS', 'SASS'],
        color: 'from-green-500 to-teal-600'
    },
    {
        category: 'Data Analysis',
        icon: <FaProjectDiagram />,
        items: ['PowerBI', 'Pandas', 'Numpy'],
        color: 'from-orange-500 to-red-600'
    },
    {
        category: 'Database Management',
        icon: <FaDatabase />,
        items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Redis'],
        color: 'from-indigo-500 to-blue-600'
    },
    {
        category: 'Version Control',
        icon: <FaCodeBranch />,
        items: ['Git'],
        color: 'from-gray-500 to-gray-700'
    },
    {
        category: 'Infrastructure',
        icon: <SiIcloud />,
        items: ['Linux', 'AWS', 'Azure', 'Networking', 'NGINX'],
        color: 'from-purple-500 to-pink-600'
    },
];

const getIcon = (item) => {
    switch (item) {
        case 'Python':
            return <FaPython />;
        case 'Django':
            return <SiDjango />;
        case 'Flask':
            return <SiFlask />;
        case 'PHP':
            return <FaPhp />;
        case 'Laravel':
            return <FaLaravel />;
        case 'Codeigniter':
            return <SiCodeigniter />;
        case 'NodeJS':
            return <FaJs />;
        case 'JavaScript':
            return <FaJs />;
        case 'React':
            return <FaReact />;
        case 'JQuery':
            return <SiJquery />;
        case 'HTML':
            return <FaHtml5 />;
        case 'CSS':
            return <FaCss3 />;
        case 'SASS':
            return <FaSass />;
        case 'Git':
            return <FaGitAlt />;
        case 'PowerBI':
            return <SiPowerbi />;
        case 'Pandas':
            return <SiPandas />;
        case 'Numpy':
            return <SiNumpy />;
        case 'MySQL':
            return <SiMysql />;
        case 'MariaDB':
            return <SiMariadb />;
        case 'PostgreSQL':
            return <SiPostgresql />;
        case 'Linux':
            return <FaLinux />;
        case 'AWS':
            return <SiAmazonaws />;
        case 'Azure':
            return <SiMicrosoftazure />;
        case 'Networking':
            return <FaNetworkWired />;
        case 'NGINX':
            return <SiNginx />;
        case 'Redis':
            return <SiRedis />;
        default:
            return <FaTools />;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto py-20 px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Habilidades Técnicas
                </h2>
                <p className="text-lg text-theme-secondary max-w-2xl mx-auto">
                    Tecnologías y herramientas que domino para crear soluciones completas y escalables
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <div key={skill.category} className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                        <div className="text-center mb-6">
                            <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-2xl text-white">{skill.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-theme-primary mb-2">{skill.category}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {skill.items.map((item) => (
                                <div key={item} className="flex flex-col items-center p-3 glass rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                                    <span className="text-lg text-theme-accent mb-1">{getIcon(item)}</span>
                                    <span className="text-xs text-center text-theme-secondary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
