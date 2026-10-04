import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    // Si corre en el servidor (SSR de Docker), usa la red interna. Si corre en el navegador, usa la IP pública.
    const baseUrl = typeof window === 'undefined'
        ? 'http://backend:8080/api/news'
        : 'http://13.60.173.123:8081/api/news';

    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) {
            console.error(`Error HTTP: ${res.status}`);
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error al conectar con la backend:', error);
        return [];
    }
}