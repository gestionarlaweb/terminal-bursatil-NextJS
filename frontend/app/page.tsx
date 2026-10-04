import DashboardClient from '@/components/DashboardClient';
import { getNews } from '@/services/newsService';

export const revalidate = 60; // Revalida datos cada minuto

export default async function HomePage() {
  const articles = await getNews();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-6 font-mono">
      <header className="mb-8 border-b border-neutral-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          // TERMINAL_BURSÁTIL :: NVIDIA & AMD FEED
        </h1>
        <p className="text-sm text-neutral-400">
          Seguimiento automatizado de noticias financieras y tecnológicas.
        </p>
      </header>
      <DashboardClient initialArticles={articles} />
    </main>
  );
}