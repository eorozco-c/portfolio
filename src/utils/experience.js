// Fecha de inicio de mi carrera (ajusta esta fecha según corresponda)
const CAREER_START_DATE = new Date('2012-01-01'); // Enero 2012

export const calculateYearsOfExperience = () => {
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - CAREER_START_DATE);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    return diffYears;
};

export const getExperienceText = () => {
    const years = calculateYearsOfExperience();
    return `${years}+ años`;
};
