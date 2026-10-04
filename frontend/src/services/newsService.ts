import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    // Usamos el nombre del servicio interno de Docker para la comunicación servidor a servidor
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://backend:8080/api/news';
    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, {
            cache: 'no-store' // Evitar caché estática para tener noticias en tiempo real
        });

        if (!res.ok) {
            console.error(`Error HTTP: ${res.status}`);
            return [];
        }

        return res.json();
    } catch (error) {
        console.error('No se pudo conectar con el backend:', error);
        return [];
    }
}