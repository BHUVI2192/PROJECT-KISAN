
import React, { useState } from 'react';
import { getGovernmentSchemes } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Landmark, Search, Filter, ChevronRight, Loader2, Info, CheckCircle2 } from 'lucide-react';

interface Scheme {
  name: string;
  description: string;
  benefits: string;
  eligibility: string;
}

const GovernmentSchemes: React.FC = () => {
  const { t, language } = useLanguage();
  const [state, setState] = useState('All India');
  const [category, setCategory] = useState('all');
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(false);

  const indianStates = [
    "All India", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setSchemes([]);

    try {
      const results = await getGovernmentSchemes(state, category, language);
      setSchemes(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-gray-800">{t('govt_schemes.title')}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('govt_schemes.subtitle')}</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <form onSubmit={handleSearch} className="grid md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-1">
               <MapPinIcon className="w-3 h-3" /> {t('govt_schemes.form.state')}
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-1">
               <Filter className="w-3 h-3" /> {t('govt_schemes.form.category')}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="all">{t('govt_schemes.form.categories.all')}</option>
              <option value="Financial Assistance">{t('govt_schemes.form.categories.financial')}</option>
              <option value="Crop Insurance">{t('govt_schemes.form.categories.insurance')}</option>
              <option value="Machinery Subsidy">{t('govt_schemes.form.categories.machinery')}</option>
              <option value="Seeds and Fertilizers">{t('govt_schemes.form.categories.seeds')}</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white p-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Search className="w-5 h-5" />}
              {t('govt_schemes.form.search_btn')}
            </button>
          </div>
        </form>
      </div>

      <div aria-live="polite">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">{t('govt_schemes.results.loading')}</p>
          </div>
        )}

        {!loading && schemes.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <Landmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">{t('govt_schemes.results.empty')}</p>
          </div>
        )}

        <div className="grid gap-6">
          {schemes.map((scheme, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex gap-3">
                    <div className="bg-emerald-50 p-2.5 rounded-lg h-fit text-emerald-600">
                      <Landmark size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-gray-800">{scheme.name}</h3>
                       <p className="text-sm text-gray-500 mt-1">{scheme.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <CheckCircle2 size={16} /> {t('govt_schemes.results.benefits')}
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{scheme.benefits}</p>
                  </div>
                  <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Info size={16} /> {t('govt_schemes.results.eligibility')}
                    </h4>
                    <p className="text-orange-800 text-sm leading-relaxed">{scheme.eligibility}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                   <a 
                     href={`https://www.google.com/search?q=${encodeURIComponent(scheme.name + " official website")}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 group"
                   >
                     {t('govt_schemes.results.learn_more')} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default GovernmentSchemes;
