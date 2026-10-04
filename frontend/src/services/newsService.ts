import { NewsItem } from '@/types/news';

export async function getNews(company?: string): Promise<NewsItem[]> {
    // Si estem a Docker, usarà http://backend:8080, sinó localhost
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/news';
    const url = company ? `${baseUrl}?company=${company}` : baseUrl;

    try {
        const res = await fetch(url, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error('No s\'han pogut recuperar les notícies del servidor.');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}