
import React, { useState, useRef } from 'react';
import { analyzePlantDisease } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Upload, ScanLine, X, AlertTriangle, CheckCircle2, Loader2, Image as ImageIcon, Leaf, ShieldCheck, Activity, Info } from 'lucide-react';

interface AnalysisResult {
  plant_name: string;
  is_healthy: boolean;
  diagnosis: string;
  symptoms: string[];
  treatments: string[];
  description: string;
}

const DiseaseDetector: React.FC = () => {
  const { t, language } = useLanguage();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null); 
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const base64Data = image.split(',')[1];
      const analysisJson = await analyzePlantDisease(base64Data, language);
      const parsedResult: AnalysisResult = JSON.parse(analysisJson);
      setResult(parsedResult);
    } catch (error) {
      console.error(error);
      setError("Error analyzing image. Please try again or upload a clearer photo.");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerFileInput();
    }
  };

  const clearImage = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">{t('disease_detector.title')}</h2>
        <p className="text-gray-500">{t('disease_detector.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4">
          <div 
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={triggerFileInput}
            aria-label={image ? t('disease_detector.upload.change_image') : t('disease_detector.upload.placeholder')}
            className={`
              relative h-80 rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden bg-white cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-100
              ${image ? 'border-emerald-500' : 'border-gray-300 hover:border-emerald-400 hover:bg-gray-50'}
            `}
          >
            {image ? (
              <>
                <img src={image} alt="Uploaded plant leaf preview" className="w-full h-full object-cover" />
                <button 
                  onClick={(e) => { e.stopPropagation(); clearImage(); }}
                  className="absolute top-4 right-4 bg-white/90 text-gray-600 p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Remove image"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </>
            ) : (
              <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{t('disease_detector.upload.placeholder')}</h3>
                <p className="text-sm text-gray-400 mt-2">{t('disease_detector.upload.supports')}</p>
              </div>
            )}
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="hidden"
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!image || loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <ScanLine className="w-5 h-5" aria-hidden="true" />}
            {loading ? t('disease_detector.upload.analyzing_btn') : t('disease_detector.upload.analyze_btn')}
          </button>
        </div>

        <div 
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-[500px] overflow-y-auto custom-scrollbar relative"
          aria-live="polite"
        >
          {!result && !loading && !error && (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center space-y-4">
              <ImageIcon className="w-16 h-16 text-gray-200" aria-hidden="true" />
              <p>{t('disease_detector.results.empty')}</p>
            </div>
          )}

          {error && (
            <div className="h-full flex flex-col items-center justify-center text-red-500 text-center space-y-4" role="alert">
              <AlertTriangle className="w-16 h-16 text-red-200" aria-hidden="true" />
              <p>{error}</p>
            </div>
          )}

          {loading && (
             <div className="h-full flex flex-col items-center justify-center space-y-6">
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-emerald-500 rounded-full animate-spin border-t-transparent"></div>
                   <ScanLine className="absolute inset-0 m-auto text-emerald-600 w-8 h-8 animate-pulse" aria-hidden="true" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium text-gray-800">{t('disease_detector.results.scanning')}</h3>
                  <p className="text-sm text-gray-500">{t('disease_detector.results.scanning_sub')}</p>
                </div>
             </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              <div className={`p-4 rounded-xl border-l-4 shadow-sm relative ${
                result.is_healthy 
                  ? 'bg-green-50 border-green-500 text-green-800' 
                  : 'bg-red-50 border-red-500 text-red-800'
              }`}>
                <div className="flex items-start justify-between">
                   <div className="flex items-start gap-3">
                    {result.is_healthy ? (
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    ) : (
                      <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                    )}
                    <div>
                      <h3 className="text-lg font-bold">{result.diagnosis}</h3>
                      <p className="text-sm opacity-90 mt-1">{result.plant_name} • {result.is_healthy ? t('disease_detector.results.healthy') : t('disease_detector.results.diseased')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-500" aria-hidden="true" /> {t('disease_detector.results.overview')}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
              </div>

              {!result.is_healthy && result.symptoms.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2 border-b pb-2">
                    <Activity className="w-5 h-5 text-orange-500" aria-hidden="true" /> {t('disease_detector.results.symptoms')}
                  </h4>
                  <ul className="grid gap-2">
                    {result.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 bg-orange-50/50 p-2 rounded-lg">
                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-400 flex-shrink-0" aria-hidden="true"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.treatments.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2 border-b pb-2">
                    {result.is_healthy ? (
                      <Leaf className="w-5 h-5 text-green-500" aria-hidden="true" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                    )}
                    {result.is_healthy ? t('disease_detector.results.care_tips') : t('disease_detector.results.treatments')}
                  </h4>
                  <ul className="space-y-3">
                    {result.treatments.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/50">
                        <div className="bg-white p-1 rounded-full shadow-sm text-emerald-600 mt-0.5" aria-hidden="true">
                          <Leaf size={12} />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
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

export default DiseaseDetector;
