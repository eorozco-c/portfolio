import React from 'react';
import { FaServer, FaCode, FaProjectDiagram, FaDatabase, FaCodeBranch, FaAws, FaPython, FaPhp, FaLaravel, FaJs, FaReact, FaHtml5, FaCss3, FaSass, FaGitAlt , FaLinux, FaTools,FaNetworkWired  } from 'react-icons/fa';
import { SiNginx, SiDjango, SiFlask, SiCodeigniter, SiJquery, SiMysql, SiMariadb, SiPostgresql, SiPowerbi, SiPandas, SiNumpy, SiAmazonaws, SiIcloud, SiMicrosoftazure, SiRedis } from 'react-icons/si';


const skills = [
    { category: 'Backend Development', icon: <FaServer />, items: ['Python', 'Django', 'Flask', 'PHP', 'Laravel', 'Codeigniter', 'NodeJS'] },
    { category: 'Frontend Development', icon: <FaCode />, items: ['JavaScript', 'React', 'JQuery', 'HTML', 'CSS', 'SASS'] },
    { category: 'Data Analysis & Visualization', icon: <FaProjectDiagram />, items: ['PowerBI', 'Pandas', 'Numpy'] },
    { category: 'Database Management', icon: <FaDatabase />, items: ['MySQL', 'MariaDB', 'PostgreSQL','Redis'] },
    { category: 'Version Control & Collaboration', icon: <FaCodeBranch />, items: ['Git'] },
    {category: 'Infrastructure', icon: <SiIcloud />, items: ['Linux', 'AWS', 'Azure', 'Networking','NGINX']},
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
            return <FaGitAlt  />;
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
            return <SiMicrosoftazure  />;
        case 'Networking':
            return <FaNetworkWired />;
        case 'NGINX':
            return <SiNginx  />;
        case 'redis':
            return <SiRedis />;
        default:
            return <FaTools />;
    }
};

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto flex flex-col items-center justify-center md:h-screen ">
            <h1 className="text-3xl font-bold mb-10">Habilidades</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <div key={skill.category} className="text-center">
                        <div className="flex flex-col items-center mb-4 ">
                            <h2 className=" text-4xl">{skill.icon}</h2>
                            <h2 className="text-xl font-semibold">{skill.category}</h2>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {skill.items.map((item) => (
                                <div key={item} className="p-2">
                                    <div className="flex flex-col items-center mb-4">
                                        <h3 className="text-xl">{getIcon(item)}</h3>
                                        <p className="text-sm">{item}</p>
                                    </div>
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
