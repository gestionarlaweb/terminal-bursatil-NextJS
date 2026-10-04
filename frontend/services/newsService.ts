import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    const baseUrl = 'http://localhost:8080/api/news';
    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, {
            next: { revalidate: 60 } // Revalida la caché cada minuto
        });

        if (!res.ok) {
            throw new Error('No se han podido recuperar las noticias del servidor.');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}