import { useState, useEffect } from 'react';

// Hook personalizado para manejar imágenes con fallback
export const useProfileImage = () => {
    const [currentImage, setCurrentImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lista de imágenes disponibles (en orden de preferencia)
    const imageOptions = [
        '/src/assets/eorozco-2.png',  // Imagen nueva preferida
        '/src/assets/eorozco1.png',   // Imagen fallback
    ];

    useEffect(() => {
        const loadImage = async () => {
            setIsLoading(true);

            for (const imagePath of imageOptions) {
                try {
                    // Intentar cargar la imagen
                    const img = new Image();
                    await new Promise((resolve, reject) => {
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = imagePath;
                    });

                    // Si se carga exitosamente, usarla
                    setCurrentImage(imagePath);
                    setError(null);
                    break;
                } catch (err) {
                    console.warn(`No se pudo cargar la imagen: ${imagePath}`);
                    setError(err);
                }
            }

            setIsLoading(false);
        };

        loadImage();
    }, []);

    return { currentImage, isLoading, error };
};

// Hook para calcular la edad dinamicamente
export const useAge = (birthDate) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const calculateAge = () => {
            const today = new Date();
            const birth = new Date(birthDate);
            let calculatedAge = today.getFullYear() - birth.getFullYear();
            const monthDiff = today.getMonth() - birth.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                calculatedAge--;
            }

            return calculatedAge;
        };

        setAge(calculateAge());

        // Actualizar cada año en el cumpleaños
        const interval = setInterval(() => {
            setAge(calculateAge());
        }, 24 * 60 * 60 * 1000); // Verificar cada día

        return () => clearInterval(interval);
    }, [birthDate]);

    return age;
};
