
export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  DISEASE_DETECTOR = 'DISEASE_DETECTOR',
  MARKET_INSIGHTS = 'MARKET_INSIGHTS',
  AGRI_CHAT = 'AGRI_CHAT',
  GOVERNMENT_SCHEMES = 'GOVERNMENT_SCHEMES'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  image?: string;
  isError?: boolean;
}

export interface CropFormData {
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  rainfall: string;
  city: string;
}

// Weather & Advisory Types
export interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  rainfall: number; // mm
  condition: 'Sunny' | 'Cloudy' | 'Rainy' | 'Stormy';
  date: string; // ISO date
}

export interface AgriAdvice {
  conditionLabel: string; // e.g. "Hot & Dry"
  conditionIcon: string;
  risks: {
    type: 'disease' | 'spray' | 'irrigation';
    level: 'low' | 'medium' | 'high' | 'good' | 'bad';
    label: string;
  }[];
  actions: {
    icon: string;
    text: string;
    type: 'warning' | 'suggestion';
  }[];
}
