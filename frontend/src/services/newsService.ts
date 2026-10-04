import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    const baseUrl = '/api/news';
    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error('Error al conectar con la API:', error);
        return [];
    }
}