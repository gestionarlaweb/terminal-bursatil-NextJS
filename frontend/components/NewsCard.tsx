import { NewsItem } from '@/types/news';

interface NewsCardProps {
    article: NewsItem;
}

export default function NewsCard({ article }: NewsCardProps) {
    const isNvidia = article.company === 'NVIDIA';

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded ${isNvidia
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}>
                        {article.company}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">
                        {article.publishedAt || 'Reciente'}
                    </span>
                </div>

                <h2 className="text-base font-semibold text-neutral-100 mb-2 leading-snug">
                    {article.title}
                </h2>

                <p className="text-xs text-neutral-400 mb-4 line-clamp-2">
                    {article.description.replace(/<[^>]*>?/gm, '')}
                </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                <span className="text-neutral-500 italic">Fuente: {article.source}</span>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                >
                    Leer más &rarr;
                </a>
            </div>
        </div>
    );
}