import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    // Forzamos la IP pública y el puerto 8081 para que el navegador pueda consultarlo externamente
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://13.60.173.123:8081/api/news';
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