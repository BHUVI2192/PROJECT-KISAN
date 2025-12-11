
import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODELS = {
  FLASH: 'gemini-2.5-flash',
  PRO: 'gemini-3-pro-preview' 
};

// Helper to get language name
const getLanguageName = (code: string) => {
  const map: Record<string, string> = {
    'en': 'English',
    'hi': 'Hindi',
    'pa': 'Punjabi',
    'mr': 'Marathi',
    'ta': 'Tamil',
    'bn': 'Bengali',
    'te': 'Telugu',
    'kn': 'Kannada'
  };
  return map[code] || 'English';
};

/**
 * Analyzes plant image for diseases.
 */
export const analyzePlantDisease = async (base64Image: string, language: string = 'en'): Promise<string> => {
  const langName = getLanguageName(language);
  try {
    const response = await ai.models.generateContent({
      model: MODELS.FLASH,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', 
              data: base64Image
            }
          },
          {
            text: `Analyze this plant leaf image. 
            Identify the plant and determine if it is healthy or diseased.
            
            Return a JSON object.
            IMPORTANT: The JSON keys MUST remain in English.
            The values (content) MUST be translated to ${langName}.

            Structure:
            {
              "plant_name": "Name of the plant (in ${langName})",
              "is_healthy": boolean,
              "diagnosis": "Name of the disease or 'Healthy' (in ${langName})",
              "symptoms": ["Symptom 1 (in ${langName})", ...],
              "treatments": ["Treatment 1 (in ${langName})", ...],
              "description": "A brief description (in ${langName})"
            }`
          }
        ]
      },
      config: {
        responseMimeType: "application/json"
      }
    });
    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze plant image.");
  }
};

/**
 * Chat with context.
 */
export const chatWithBot = async (history: {role: string, parts: {text: string}[]}[], message: string, language: string = 'en') => {
  const langName = getLanguageName(language);
  try {
    const chat = ai.chats.create({
      model: MODELS.FLASH,
      history: history,
      config: {
        systemInstruction: `You are Kisan AI, a helpful, friendly, and knowledgeable agricultural assistant for farmers. 
        Keep answers practical, concise, and easy to understand. Use emojis where appropriate.
        ALWAYS Answer in ${langName} language.`,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    throw new Error("I'm having trouble connecting right now. Please try again.");
  }
};

/**
 * Get Crop Recommendation based on soil data
 */
export const getCropRecommendation = async (
  nitrogen: string,
  phosphorus: string,
  potassium: string,
  ph: string,
  rainfall: string,
  city: string,
  language: string = 'en'
): Promise<string> => {
  const langName = getLanguageName(language);
  try {
    const prompt = `
      Act as an expert agronomist.
      Analyze the following soil and environmental conditions for crop recommendation:
      - Nitrogen: ${nitrogen}
      - Phosphorus: ${phosphorus}
      - Potassium: ${potassium}
      - pH Level: ${ph}
      - Rainfall: ${rainfall} mm
      - Location/City: ${city}

      Recommend the best suitable crops for these conditions.
      
      Return a structured JSON response.
      IMPORTANT:
      1. JSON keys MUST be in English.
      2. Content values MUST be translated to ${langName}.

      Structure:
      {
        "recommended_crops": [
          {
            "name": "Crop Name (in ${langName})",
            "season": "Season (e.g., Rabi, Kharif)",
            "reason": "Why is this crop suitable?",
            "market_potential": "High/Medium/Low"
          }
        ],
        "soil_health_tips": ["Tip 1", "Tip 2", ...]
      }
    `;

    const response = await ai.models.generateContent({
      model: MODELS.FLASH,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Gemini Crop Advisor Error:", error);
    throw new Error("Failed to get crop recommendations.");
  }
};

/**
 * Get Market Insights using Search Grounding
 */
export const getMarketInsights = async (query: string, language: string = 'en'): Promise<{ data: any; rawText: string; sources: any[] }> => {
  const langName = getLanguageName(language);
  try {
    const prompt = `
      You are an agricultural market expert. Find the latest market prices (Mandi rates) and news for: "${query}".
      
      Analyze the search results and organize them into a structured JSON response.
      
      IMPORTANT:
      1. The JSON keys MUST remain in English (e.g., "market_summary", "groups", "category", "items", "name", "price", "trend", "news").
      2. The values (content texts) MUST be translated into ${langName}.

      Structure:
      {
        "market_summary": "A concise overview (in ${langName})",
        "groups": [
          {
            "category": "Category name (in ${langName})",
            "items": [
              {
                "name": "Item name (in ${langName})",
                "price": "Price info (e.g., ₹2500/Q)",
                "trend": "up" | "down" | "stable",
                "news": "Key driver or news (in ${langName})"
              }
            ]
          }
        ]
      }
      
      Do not include markdown code blocks. Just raw JSON.
    `;

    const response = await ai.models.generateContent({
      model: MODELS.FLASH,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "{}";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    let data = null;
    try {
      const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      data = JSON.parse(cleanText);
    } catch (e) {
      console.warn("Failed to parse market insights JSON", e);
    }
    
    return { data, rawText: text, sources };
  } catch (error) {
    console.error("Gemini Search Error:", error);
    throw new Error("Failed to fetch market data.");
  }
};

/**
 * Get Government Schemes
 */
export const getGovernmentSchemes = async (state: string, category: string, language: string = 'en'): Promise<any[]> => {
  const langName = getLanguageName(language);
  try {
    const prompt = `
      Act as an expert government policy consultant for agriculture.
      Find and list the top 5 active government agricultural schemes available in India, specifically for:
      - State/Region: ${state}
      - Category: ${category}

      Provide the response in a structured JSON format.
      IMPORTANT: 
      1. JSON keys MUST be in English.
      2. Content values (name, description, etc.) MUST be translated to ${langName}.

      Schema:
      [
        {
          "name": "Scheme Name",
          "description": "Brief description",
          "benefits": "What is the subsidy or benefit?",
          "eligibility": "Who can apply?",
          "official_link_query": "Search query to find official link"
        }
      ]
    `;

    const response = await ai.models.generateContent({
      model: MODELS.FLASH,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text || "[]";
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini Schemes Error:", error);
    throw new Error("Failed to fetch schemes.");
  }
};
