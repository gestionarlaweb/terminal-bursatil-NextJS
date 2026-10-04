'use client';

import { useState } from 'react';
import { NewsItem } from '@/types/news';
import NewsCard from './NewsCard';

interface DashboardClientProps {
    initialArticles: NewsItem[];
}

export default function DashboardClient({ initialArticles }: DashboardClientProps) {
    const [filter, setFilter] = useState<'ALL' | 'NVIDIA' | 'AMD'>('ALL');

    const filteredArticles = initialArticles.filter(article => {
        if (filter === 'ALL') return true;
        return article.company.toUpperCase() === filter;
    });

    return (
        <div>
            {/* Pestañas de filtro */}
            <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
                <button
                    onClick={() => setFilter('ALL')}
                    className={`px-4 py-2 rounded text-xs font-mono font-bold transition ${filter === 'ALL'
                            ? 'bg-neutral-800 text-emerald-400 border border-emerald-800'
                            : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                        }`}
                >
                    TODAS ({initialArticles.length})
                </button>
                <button
                    onClick={() => setFilter('NVIDIA')}
                    className={`px-4 py-2 rounded text-xs font-mono font-bold transition ${filter === 'NVIDIA'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                        }`}
                >
                    NVIDIA
                </button>
                <button
                    onClick={() => setFilter('AMD')}
                    className={`px-4 py-2 rounded text-xs font-mono font-bold transition ${filter === 'AMD'
                            ? 'bg-red-950 text-red-400 border border-red-800'
                            : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                        }`}
                >
                    AMD
                </button>
            </div>

            {/* Cuadrícula de resultados */}
            {filteredArticles.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 font-mono text-sm">
                    No se han encontrado noticias. Comprueba que el backend de Spring Boot está en marcha en el puerto 8080.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredArticles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}