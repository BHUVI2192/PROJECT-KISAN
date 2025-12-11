
import React, { useState } from 'react';
import { getMarketInsights } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, TrendingUp, TrendingDown, Minus, ExternalLink, Loader2, Newspaper, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface MarketItem {
  name: string;
  price: string;
  trend: 'up' | 'down' | 'stable';
  news: string;
}

interface MarketGroup {
  category: string;
  items: MarketItem[];
}

interface MarketData {
  market_summary: string;
  groups: MarketGroup[];
}

const MarketInsights: React.FC = () => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [marketResult, setMarketResult] = useState<{ data: MarketData | null; rawText: string; sources: any[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setMarketResult(null);
    try {
      const result = await getMarketInsights(query, language);
      setMarketResult(result);
    } catch (error) {
      console.error(error);
      setMarketResult({ data: null, rawText: "Failed to fetch market data. Please try again.", sources: [] });
    } finally {
      setLoading(false);
    }
  };

  const trendingItems = t('market_insights.trending_items');
  const suggestions = Array.isArray(trendingItems) ? trendingItems : ["Wheat prices in Punjab", "Tomato rates in Nashik"];

  const getTrendIcon = (trend: string) => {
    switch (trend?.toLowerCase()) {
      case 'up': return <TrendingUp className="w-5 h-5 text-green-500" aria-hidden="true" />;
      case 'down': return <TrendingDown className="w-5 h-5 text-red-500" aria-hidden="true" />;
      default: return <Minus className="w-5 h-5 text-gray-400" aria-hidden="true" />;
    }
  };

  const getTrendLabel = (trend: string) => {
    switch (trend?.toLowerCase()) {
      case 'up': return <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Rising</span>;
      case 'down': return <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">Falling</span>;
      default: return <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Stable</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
       <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-gray-800">{t('market_insights.title')}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('market_insights.subtitle')}</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <form onSubmit={handleSearch} className="flex gap-3">
           <div className="relative flex-1">
             <label htmlFor="market-search" className="sr-only">Search crop prices</label>
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
             <input
              id="market-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('market_insights.search_placeholder')}
              className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-lg"
             />
           </div>
           <button 
             type="submit" 
             disabled={loading || !query.trim()}
             className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-lg shadow-emerald-100"
           >
             {loading ? <Loader2 className="animate-spin w-6 h-6" aria-hidden="true" /> : t('market_insights.search_btn')}
             <span className="sr-only">Search</span>
           </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500 font-medium">{t('market_insights.trending_label')}</span>
          {suggestions.map((s: string) => (
            <button 
              key={s} 
              onClick={() => { setQuery(s); }}
              className="text-sm px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-transparent hover:border-emerald-200"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div aria-live="polite">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
             <Loader2 className="w-12 h-12 text-emerald-600 animate-spin mb-4" aria-hidden="true" />
             <p className="text-gray-500 animate-pulse font-medium">{t('market_insights.loading_text')}</p>
          </div>
        )}

        {marketResult && !loading && (
          <div className="animate-fade-in space-y-8">
            
            {(marketResult.data?.market_summary || (!marketResult.data && marketResult.rawText)) && (
              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-sm border border-emerald-100 relative">
                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <Newspaper className="text-emerald-600 w-6 h-6" aria-hidden="true" /> {t('market_insights.overview')}
                 </h3>
                 <div className="prose prose-emerald max-w-none prose-p:text-gray-700 prose-p:leading-relaxed">
                   {marketResult.data ? (
                     <p>{marketResult.data.market_summary}</p>
                   ) : (
                     <ReactMarkdown>{marketResult.rawText}</ReactMarkdown>
                   )}
                 </div>
              </div>
            )}

            {marketResult.data?.groups?.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2">
                   <div className="bg-emerald-100 p-1.5 rounded-lg" aria-hidden="true">
                      <Tag className="w-5 h-5 text-emerald-700" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-800">{group.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                   {group.items.map((item, itemIdx) => (
                     <article key={itemIdx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                           <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                           <div className="flex items-center gap-1">
                             {getTrendIcon(item.trend)}
                           </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-2xl font-bold text-emerald-700">{item.price}</p>
                          <div className="flex items-center gap-2 mt-1">
                             {getTrendLabel(item.trend)}
                             <span className="text-xs text-gray-400">{t('market_insights.current_rate')}</span>
                          </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-50">
                           <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                             {item.news}
                           </p>
                        </div>
                     </article>
                   ))}
                </div>
              </div>
            ))}

            {marketResult.sources.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                 <h3 className="font-semibold text-gray-500 text-sm mb-3 flex items-center gap-2 uppercase tracking-wider">
                   {t('market_insights.sources')}
                 </h3>
                 <div className="grid md:grid-cols-2 gap-3">
                   {marketResult.sources.map((source, idx) => {
                     const web = source.web;
                     if (!web) return null;
                     return (
                      <a 
                        key={idx} 
                        href={web.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group"
                      >
                         <span className="text-sm text-gray-600 font-medium truncate pr-4 group-hover:text-emerald-700">{web.title}</span>
                         <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 flex-shrink-0" aria-hidden="true" />
                      </a>
                     );
                   })}
                 </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketInsights;
