
import React, { useEffect, useState } from 'react';
import { Cloud, CloudRain, Droplets, MapPin, Sun, Wind, AlertTriangle, Sprout, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getWeatherForecast, generateAgriAdvice } from '../services/weatherService';
import { WeatherData, AgriAdvice } from '../types';

const SmartWeatherAdvisor: React.FC = () => {
  const { t } = useLanguage();
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [advice, setAdvice] = useState<AgriAdvice | null>(null);
  const [locationName, setLocationName] = useState<string>(t('weather.locating'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Get Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, reverse geocode here to get village/district name
          setLocationName(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`); // Fallback for now
          
          fetchWeather(latitude, longitude);
        },
        () => {
          // Permission denied or error
          setLocationName(t('weather.location_denied'));
          fetchWeather(28.61, 77.20); // Default to New Delhi
        }
      );
    } else {
      setLocationName(t('weather.location_denied'));
      fetchWeather(28.61, 77.20);
    }
  }, []);

  const fetchWeather = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const data = await getWeatherForecast(lat, lon);
      setForecast(data);
      if (data.length >= 2) {
        const agriAdvice = generateAgriAdvice(data[0], data[1]);
        setAdvice(agriAdvice);
      }
    } catch (error) {
      console.error("Failed to load weather", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (condition: string, className = "w-6 h-6") => {
    switch (condition) {
      case 'Rainy': return <CloudRain className={`${className} text-blue-400`} />;
      case 'Cloudy': return <Cloud className={`${className} text-gray-400`} />;
      case 'Stormy': return <Wind className={`${className} text-gray-600`} />;
      default: return <Sun className={`${className} text-yellow-400`} />;
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high':
      case 'bad': return 'bg-red-50 text-red-700 border-red-100';
      case 'medium': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'low': 
      case 'good': return 'bg-green-50 text-green-700 border-green-100';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const renderAdviceIcon = (iconName: string) => {
    const cls = "w-5 h-5 flex-shrink-0 mt-0.5";
    switch(iconName) {
      case 'Wind': return <Wind className={`${cls} text-gray-500`} />;
      case 'CloudRain': return <CloudRain className={`${cls} text-blue-500`} />;
      case 'Droplets': return <Droplets className={`${cls} text-blue-400`} />;
      case 'Search': return <Search className={`${cls} text-orange-500`} />;
      case 'Sprout': return <Sprout className={`${cls} text-green-500`} />;
      default: return <Sun className={`${cls} text-yellow-500`} />;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100/50 min-h-[200px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
           <div className="w-10 h-10 border-4 border-emerald-100 rounded-full animate-spin border-t-emerald-500"></div>
           <span className="text-sm text-gray-500 font-medium animate-pulse">{t('weather.locating')}</span>
        </div>
      </div>
    );
  }

  if (!forecast.length || !advice) return null;

  const current = forecast[0];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden">
      {/* Header: Location & Current Condition */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 opacity-90 text-sm font-medium mb-1">
              <MapPin size={16} />
              <span>{locationName}</span>
            </div>
            <div className="flex items-center gap-3">
              {getWeatherIcon(current.condition, "w-12 h-12 text-white")}
              <div>
                <h3 className="text-3xl font-bold">{advice.conditionLabel}</h3>
                <p className="text-emerald-100 text-sm">
                  {current.temp}°C • {t('dashboard.weather_humidity')} {current.humidity}% • {t('dashboard.weather_wind')} {current.windSpeed} km/h
                </p>
              </div>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-emerald-100 font-medium uppercase tracking-wider mb-1">{t('dashboard.weather_today')}</p>
            <p className="text-lg font-bold">{new Date().toLocaleDateString(undefined, { weekday: 'long' })}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Risk Tags Row */}
        <div className="flex flex-wrap gap-3">
          {advice.risks.map((risk, idx) => (
            <div 
              key={idx}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border flex items-center gap-2 ${getRiskColor(risk.level)}`}
            >
              {risk.level === 'high' || risk.level === 'bad' ? <AlertTriangle size={14} /> : <div className="w-2 h-2 rounded-full bg-current" />}
              {risk.label}
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {advice.actions.map((action, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
              {renderAdviceIcon(action.icon)}
              <div>
                 <p className="text-sm text-gray-700 font-medium leading-relaxed">{action.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Day Mini Forecast */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">{t('weather.forecast_5d')}</p>
          <div className="flex justify-between items-center overflow-x-auto pb-2 gap-4">
            {forecast.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[60px] text-center">
                 <span className="text-xs text-gray-500 mb-1">
                    {new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}
                 </span>
                 <div className="bg-gray-50 p-2 rounded-xl mb-1">
                    {getWeatherIcon(day.condition, "w-6 h-6")}
                 </div>
                 <span className="text-sm font-bold text-gray-700">{day.temp}°</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWeatherAdvisor;
