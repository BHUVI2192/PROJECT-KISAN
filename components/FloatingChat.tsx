
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import AgriChat from './AgriChat';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end sm:items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-96 h-[550px] max-h-[75vh] bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-fade-in origin-bottom-right ring-1 ring-black/5">
          <AgriChat isWidget={true} onClose={() => setIsOpen(false)} />
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300
          ${isOpen ? 'bg-gray-800 hover:bg-gray-900 rotate-90' : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-110'}
          text-white
        `}
        aria-label={isOpen ? t('app.menu_close') : t('sidebar.expert_chat')}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default FloatingChat;
