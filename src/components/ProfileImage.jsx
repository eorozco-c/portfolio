import React from 'react';
import { useState, useEffect } from 'react';

const ProfileImage = ({ className, alt = "Ernesto Orozco - Desarrollador Full Stack" }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Función para importar la imagen de manera dinámica
        const loadImage = async () => {
            try {
                // Intentar cargar la imagen nueva primero
                const { default: newImage } = await import('../assets/eorozco1.jpg');
                setImageSrc(newImage);
            } catch (error) {
                console.warn('No se pudo cargar eorozco-2.jpg, usando imagen de respaldo');
                try {
                    // Si falla, usar la imagen de respaldo
                    const { default: fallbackImage } = await import('../assets/eorozco1.png');
                    setImageSrc(fallbackImage);
                } catch (fallbackError) {
                    console.error('No se pudo cargar ninguna imagen de perfil');
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadImage();
    }, []);

    if (isLoading) {
        return (
            <div className={`${className} bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse flex items-center justify-center`}>
                <div className="text-gray-500 text-2xl">📸</div>
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            loading="lazy"
            onError={(e) => {
                console.error('Error loading profile image:', e);
                // En caso de error, ocultar la imagen
                e.target.style.display = 'none';
            }}
        />
    );
};

export default ProfileImage;
