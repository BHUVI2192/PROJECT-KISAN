
import React from 'react';
import { ViewState } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  LayoutDashboard, 
  Sprout, 
  ScanLine, 
  TrendingUp, 
  MessageCircleQuestion, 
  X,
  Languages,
  Landmark,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen, setIsOpen }) => {
  const { language, setLanguage, t, languages } = useLanguage();

  const navItems = [
    { id: ViewState.DASHBOARD, label: t('sidebar.dashboard'), icon: LayoutDashboard },
    { id: ViewState.DISEASE_DETECTOR, label: t('sidebar.disease_doctor'), icon: ScanLine },
    { id: ViewState.MARKET_INSIGHTS, label: t('sidebar.market_insights'), icon: TrendingUp },
    { id: ViewState.GOVERNMENT_SCHEMES, label: t('sidebar.govt_schemes'), icon: Landmark },
    { id: ViewState.AGRI_CHAT, label: t('sidebar.expert_chat'), icon: MessageCircleQuestion },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        id="sidebar-navigation"
        className={`
          fixed lg:fixed top-16 left-0 bottom-0 z-40 w-64 bg-[#064e3b] text-white shadow-2xl lg:shadow-none transform transition-transform duration-300 ease-out flex flex-col border-r border-emerald-800/30
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation"
      >
         {/* Mobile Close Button (only visible on mobile when open) */}
        <div className="lg:hidden absolute top-4 right-4 z-50">
           <button 
            onClick={() => setIsOpen(false)} 
            className="text-emerald-300 hover:text-white transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Language Section */}
        <div className="px-6 py-6 mt-2">
          <label className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 block pl-1">
            {t('sidebar.select_language')}
          </label>
          <div className="relative group">
             <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-300 transition-colors group-hover:text-emerald-100">
                <Languages className="h-4 w-4" />
             </div>
             <select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
               className="w-full appearance-none bg-emerald-900/40 hover:bg-emerald-900/60 border border-emerald-700/50 text-emerald-50 text-sm rounded-xl pl-10 pr-10 py-3 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all cursor-pointer outline-none shadow-inner"
             >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-emerald-900 text-emerald-50">
                    {lang.native} ({lang.name})
                  </option>
                ))}
             </select>
             <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400 pointer-events-none" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onChangeView(item.id);
                  setIsOpen(false);
                }}
                className={`
                  relative w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 group text-left
                  ${isActive 
                    ? 'bg-emerald-800/80 text-white shadow-lg shadow-black/5' 
                    : 'text-emerald-100/70 hover:bg-emerald-800/40 hover:text-white'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-400 rounded-r-full shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                )}
                
                <Icon 
                  className={`
                    w-[22px] h-[22px] flex-shrink-0 transition-transform duration-200
                    ${isActive ? 'text-emerald-400 scale-110' : 'text-emerald-400/60 group-hover:text-emerald-400 group-hover:scale-105'}
                  `} 
                />
                <span className={`font-medium tracking-wide ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
