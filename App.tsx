
import React, { useState } from 'react';
import { ViewState } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DiseaseDetector from './components/DiseaseDetector';
import MarketInsights from './components/MarketInsights';
import AgriChat from './components/AgriChat';
import GovernmentSchemes from './components/GovernmentSchemes';
import FloatingChat from './components/FloatingChat';
import { Menu, Sprout } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useLanguage();

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onChangeView={setCurrentView} />;
      case ViewState.DISEASE_DETECTOR:
        return <DiseaseDetector />;
      case ViewState.MARKET_INSIGHTS:
        return <MarketInsights />;
      case ViewState.AGRI_CHAT:
        return <AgriChat />;
      case ViewState.GOVERNMENT_SCHEMES:
        return <GovernmentSchemes />;
      default:
        return <Dashboard onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-emerald-700 text-white px-4 py-2 rounded-md shadow-lg"
      >
        {t('app.skip_link')}
      </a>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-4 lg:px-6 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-1.5 rounded-lg shadow-sm">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-emerald-950 font-sans">
              {t('app.title')}
            </h1>
         </div>
         
         <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-gray-500 hover:bg-gray-100 hover:text-emerald-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:hidden transition-colors"
            aria-label={isSidebarOpen ? t('app.menu_close') : t('app.menu_open')}
            aria-expanded={isSidebarOpen}
            aria-controls="sidebar-navigation"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
      </header>

      {/* Main Layout Container */}
      <div className="flex pt-16 h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <Sidebar 
          currentView={currentView} 
          onChangeView={setCurrentView}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative lg:ml-64">
          
          {/* Scrollable View Content */}
          <main 
            id="main-content" 
            className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar focus:outline-none bg-gray-50"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto w-full">
              {renderView()}
            </div>
          </main>

          {/* Floating Chat Widget - Hidden on Chat Page */}
          {currentView !== ViewState.AGRI_CHAT && <FloatingChat />}
        </div>
      </div>
    </div>
  );
};

export default App;
