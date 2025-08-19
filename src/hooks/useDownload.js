import { useState } from 'react';

export const useDownload = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadCV = async () => {
        setIsDownloading(true);

        try {
            // Primero intentar descargar el CV más reciente
            const cvPath = '/src/assets/Curriculum vitaeV4.pdf';

            // Crear un enlace temporal para la descarga
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Ernesto_Orozco_CV_2025.pdf';
            link.target = '_blank';

            // Simular click para iniciar descarga
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Opcional: Enviar evento de analytics
            if (window.gtag) {
                window.gtag('event', 'download', {
                    'event_category': 'CV',
                    'event_label': 'CV_Download',
                    'value': 1
                });
            }

        } catch (error) {
            console.error('Error al descargar CV:', error);
            alert('Error al descargar el CV. Por favor, inténtalo de nuevo.');
        } finally {
            setIsDownloading(false);
        }
    };

    return { downloadCV, isDownloading };
};
