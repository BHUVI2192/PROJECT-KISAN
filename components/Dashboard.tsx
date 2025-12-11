
import React from 'react';
import { ViewState } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ScanLine, TrendingUp, MessageCircleQuestion, ArrowRight, Sun, Landmark } from 'lucide-react';

interface DashboardProps {
  onChangeView: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onChangeView }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header Section */}
      <div className="w-full">
        {/* Welcome Card */}
        <div className="bg-gradient-to-br from-emerald-800 to-green-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden flex flex-col justify-center min-h-[280px]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" aria-hidden="true"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{t('dashboard.welcome')} 🌾</h1>
            <p className="text-emerald-50 text-lg leading-relaxed opacity-90 max-w-lg">
              {t('dashboard.welcome_sub')}
            </p>
            
            <button 
              onClick={() => onChangeView(ViewState.AGRI_CHAT)}
              className="mt-8 bg-white text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors w-fit shadow-lg shadow-black/10 flex items-center gap-2"
            >
              <MessageCircleQuestion size={20} />
              {t('dashboard.card_chat_action')}
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button 
          onClick={() => onChangeView(ViewState.DISEASE_DETECTOR)}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all text-left group focus:outline-none focus:ring-4 focus:ring-emerald-50 h-full flex flex-col"
        >
          <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-rose-600 group-hover:text-white transition-colors" aria-hidden="true">
            <ScanLine size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dashboard.card_disease_title')}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{t('dashboard.card_disease_desc')}</p>
          <div className="flex items-center text-rose-600 font-semibold group-hover:translate-x-1 transition-transform">
            {t('dashboard.card_disease_action')} <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </div>
        </button>

        <button 
          onClick={() => onChangeView(ViewState.MARKET_INSIGHTS)}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all text-left group focus:outline-none focus:ring-4 focus:ring-emerald-50 h-full flex flex-col"
        >
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors" aria-hidden="true">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dashboard.card_market_title')}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{t('dashboard.card_market_desc')}</p>
          <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
            {t('dashboard.card_market_action')} <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </div>
        </button>

        <button 
          onClick={() => onChangeView(ViewState.GOVERNMENT_SCHEMES)}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all text-left group focus:outline-none focus:ring-4 focus:ring-emerald-50 h-full flex flex-col"
        >
          <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors" aria-hidden="true">
            <Landmark size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dashboard.card_schemes_title')}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{t('dashboard.card_schemes_desc')}</p>
          <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
            {t('dashboard.card_schemes_action')} <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </div>
        </button>

        <button 
          onClick={() => onChangeView(ViewState.AGRI_CHAT)}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all text-left group focus:outline-none focus:ring-4 focus:ring-emerald-50 h-full flex flex-col"
        >
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors" aria-hidden="true">
            <MessageCircleQuestion size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t('dashboard.card_chat_title')}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{t('dashboard.card_chat_desc')}</p>
          <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform">
            {t('dashboard.card_chat_action')} <ArrowRight size={18} className="ml-2" aria-hidden="true" />
          </div>
        </button>
      </div>

      {/* Seasonal Tip Banner */}
      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-sm">
         <div className="bg-amber-100 p-4 rounded-full shrink-0 text-amber-600" aria-hidden="true">
            <Sun className="w-8 h-8" />
         </div>
         <div>
            <h3 className="text-lg font-bold text-amber-900 mb-1">{t('dashboard.tip_title')}</h3>
            <p className="text-amber-800/80 leading-relaxed">
               {t('dashboard.tip_desc')}
            </p>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
