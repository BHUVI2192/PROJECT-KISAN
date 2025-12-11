
import React, { useState } from 'react';
import { getCropRecommendation } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Sprout, Droplets, ThermometerSun, FlaskConical, MapPin, Loader2, AlertCircle, TrendingUp } from 'lucide-react';
import { CropFormData } from '../types';

const CropAdvisor: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<CropFormData>({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
    rainfall: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const jsonStr = await getCropRecommendation(
        formData.nitrogen,
        formData.phosphorus,
        formData.potassium,
        formData.ph,
        formData.rainfall,
        formData.city,
        language
      );
      
      const cleanedJson = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
      setResult(JSON.parse(cleanedJson));
    } catch (err) {
      setError("Failed to generate recommendations. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">{t('crop_advisor.title')}</h2>
        <p className="text-gray-500">{t('crop_advisor.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Soil details form">
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label htmlFor="nitrogen" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.nitrogen')}</label>
                <div className="relative">
                  <FlaskConical className="absolute left-3 top-2.5 w-4 h-4 text-emerald-500" aria-hidden="true" />
                  <input 
                    id="nitrogen"
                    required 
                    name="nitrogen" 
                    placeholder="50" 
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                    value={formData.nitrogen} 
                    onChange={handleChange} 
                    type="number" 
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="phosphorus" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.phosphorus')}</label>
                <div className="relative">
                  <FlaskConical className="absolute left-3 top-2.5 w-4 h-4 text-orange-500" aria-hidden="true" />
                  <input 
                    id="phosphorus"
                    required 
                    name="phosphorus" 
                    placeholder="40" 
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                    value={formData.phosphorus} 
                    onChange={handleChange} 
                    type="number" 
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="potassium" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.potassium')}</label>
                <div className="relative">
                  <FlaskConical className="absolute left-3 top-2.5 w-4 h-4 text-purple-500" aria-hidden="true" />
                  <input 
                    id="potassium"
                    required 
                    name="potassium" 
                    placeholder="30" 
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                    value={formData.potassium} 
                    onChange={handleChange} 
                    type="number" 
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="ph" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.ph')}</label>
                <div className="relative">
                  <ThermometerSun className="absolute left-3 top-2.5 w-4 h-4 text-rose-500" aria-hidden="true" />
                  <input 
                    id="ph"
                    required 
                    name="ph" 
                    placeholder="6.5" 
                    step="0.1" 
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                    value={formData.ph} 
                    onChange={handleChange} 
                    type="number" 
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="rainfall" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.rainfall')}</label>
                <div className="relative">
                  <Droplets className="absolute left-3 top-2.5 w-4 h-4 text-blue-500" aria-hidden="true" />
                  <input 
                    id="rainfall"
                    required 
                    name="rainfall" 
                    placeholder="200" 
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                    value={formData.rainfall} 
                    onChange={handleChange} 
                    type="number" 
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="city" className="text-xs font-semibold text-gray-500 uppercase">{t('crop_advisor.form.city')}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                <input 
                  id="city"
                  required 
                  name="city" 
                  placeholder="e.g. Nashik, Punjab" 
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" 
                  value={formData.city} 
                  onChange={handleChange} 
                  aria-required="true"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Sprout className="w-5 h-5" aria-hidden="true" />}
              {loading ? t('crop_advisor.form.analyzing') : t('crop_advisor.form.submit')}
            </button>
          </form>
        </div>

        <div className="md:col-span-7 space-y-6" aria-live="polite">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 border border-red-100" role="alert">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
              {error}
            </div>
          )}

          {!result && !loading && !error && (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 border-2 border-dashed border-gray-200 rounded-2xl">
              <Sprout className="w-16 h-16 mb-4 text-gray-200" aria-hidden="true" />
              <p>{t('crop_advisor.results.empty')}</p>
            </div>
          )}

          {loading && (
             <div className="h-64 flex flex-col items-center justify-center text-emerald-600 space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-emerald-100 rounded-full animate-spin border-t-emerald-600"></div>
                  <Sprout className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-emerald-600" aria-hidden="true" />
                </div>
                <p className="animate-pulse font-medium">{t('crop_advisor.results.loading_text')}</p>
             </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 p-1.5 rounded-lg"><Sprout className="w-5 h-5" aria-hidden="true"/></span>
                  {t('crop_advisor.results.top_picks')}
                </h3>
              </div>
              
              <div className="grid gap-4">
                {result.recommended_crops?.map((crop: any, index: number) => (
                  <article key={index} className="bg-white p-5 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{crop.name}</h4>
                      <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                        {crop.season}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{crop.reason}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-blue-500" aria-hidden="true" />
                      <span>{t('crop_advisor.results.market_potential')}: <span className="font-semibold text-gray-700">{crop.market_potential}</span></span>
                    </div>
                  </article>
                ))}
              </div>

              {result.soil_health_tips && (
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <FlaskConical className="w-4 h-4" aria-hidden="true"/> {t('crop_advisor.results.soil_tips')}
                  </h4>
                  <ul className="space-y-2">
                    {result.soil_health_tips.map((tip: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-blue-800">
                        <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropAdvisor;
