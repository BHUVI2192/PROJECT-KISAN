
import { WeatherData, AgriAdvice } from '../types';

// Mock function to simulate fetching weather from an API like OpenWeatherMap or IMD
export const getWeatherForecast = async (lat: number, lon: number): Promise<WeatherData[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const today = new Date();
  const forecast: WeatherData[] = [];

  // Generate 5 days of realistic data based on random seeds but consistent for the session
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Randomized mock logic for demonstration
    // In a real app, this comes from an API
    const isRainySeason = Math.random() > 0.7;
    const tempBase = 28;
    
    forecast.push({
      date: date.toISOString().split('T')[0],
      temp: Math.floor(tempBase + (Math.random() * 5 - 2)),
      humidity: Math.floor(40 + Math.random() * 50),
      windSpeed: Math.floor(5 + Math.random() * 20),
      rainfall: isRainySeason ? Math.floor(Math.random() * 15) : 0,
      condition: isRainySeason ? (Math.random() > 0.5 ? 'Rainy' : 'Cloudy') : 'Sunny'
    });
  }

  return forecast;
};

// The "Smart" Logic Engine
export const generateAgriAdvice = (current: WeatherData, nextDay: WeatherData): AgriAdvice => {
  const risks: AgriAdvice['risks'] = [];
  const actions: AgriAdvice['actions'] = [];
  
  // 1. Determine Condition Label
  let conditionLabel = 'Pleasant';
  if (current.temp > 35 && current.humidity < 40) conditionLabel = 'Hot & Dry';
  else if (current.temp < 15) conditionLabel = 'Cold';
  else if (current.rainfall > 5) conditionLabel = 'Rainy';
  else if (current.humidity > 80) conditionLabel = 'Humid';
  else if (current.windSpeed > 15) conditionLabel = 'Windy';

  // 2. Calculate Risks & Rules

  // Rule: Fungal Disease Risk
  if (current.humidity > 85 && current.temp > 24) {
    risks.push({ type: 'disease', level: 'high', label: 'High Fungal Risk' });
    actions.push({ icon: 'Search', type: 'warning', text: 'Inspect leaves for fungal spots due to high humidity.' });
  } else {
    risks.push({ type: 'disease', level: 'low', label: 'Low Disease Risk' });
  }

  // Rule: Spraying Window
  if (current.windSpeed > 15 || current.rainfall > 0 || nextDay.rainfall > 0) {
    risks.push({ type: 'spray', level: 'bad', label: 'Spray: Bad Window' });
    if (current.windSpeed > 15) actions.push({ icon: 'Wind', type: 'warning', text: 'Avoid spraying today due to high winds.' });
    if (current.rainfall > 0) actions.push({ icon: 'CloudRain', type: 'warning', text: 'Do not spray chemicals, rain expected.' });
  } else {
    risks.push({ type: 'spray', level: 'good', label: 'Spray: Good Window' });
  }

  // Rule: Irrigation
  if (current.rainfall > 2 || nextDay.rainfall > 5) {
    risks.push({ type: 'irrigation', level: 'low', label: 'Irrigation: Not Needed' });
    actions.push({ icon: 'Droplets', type: 'suggestion', text: 'Skip irrigation, rain is forecasted.' });
  } else if (current.temp > 32 && current.humidity < 40) {
    risks.push({ type: 'irrigation', level: 'high', label: 'Irrigation: Needed' });
    actions.push({ icon: 'Sun', type: 'suggestion', text: 'Soil moisture loss high. Irrigate in evening.' });
  } else {
    risks.push({ type: 'irrigation', level: 'medium', label: 'Irrigation: Moderate' });
  }

  // General Farming Activity
  if (conditionLabel === 'Hot & Dry') {
    actions.push({ icon: 'Sun', type: 'suggestion', text: 'Good day for drying harvested crops.' });
  }
  if (current.condition === 'Sunny' && current.windSpeed < 10) {
    actions.push({ icon: 'Sprout', type: 'suggestion', text: 'Ideal conditions for sowing or weeding.' });
  }

  return {
    conditionLabel,
    conditionIcon: current.condition,
    risks,
    actions: actions.slice(0, 3) // Limit to top 3 actions
  };
};
