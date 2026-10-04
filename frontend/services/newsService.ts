import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    // Usamos el nombre del servicio interno de Docker para que el SSR funcione sin bloqueos de red de AWS
    const baseUrl = 'http://backend:8080/api/news';
    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) {
            console.error(`Error HTTP: ${res.status}`);
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error al conectar con la API interna:', error);
        return [];
    }
}