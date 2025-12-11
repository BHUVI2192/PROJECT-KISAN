
export const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export const translations: Record<string, any> = {
  en: {
    app: {
      title: "Kisan AI",
      skip_link: "Skip to main content",
      powered_by: "Powered by AI",
      menu_open: "Open navigation menu",
      menu_close: "Close menu"
    },
    sidebar: {
      dashboard: "Dashboard",
      disease_doctor: "Disease Doctor",
      market_insights: "Market Insights",
      expert_chat: "Expert Chat",
      govt_schemes: "Govt Schemes",
      select_language: "Select Language"
    },
    weather: {
      title: "Smart Crop Advisor",
      locating: "Locating farm...",
      location_denied: "New Delhi (Default)",
      forecast_5d: "5-Day Forecast",
      labels: {
        hot_dry: "Hot & Dry",
        humid: "Humid",
        rainy: "Rainy",
        windy: "Windy",
        pleasant: "Pleasant",
        cold: "Cold"
      },
      risks: {
        disease: "Disease Risk",
        spray: "Spray Window",
        irrigation: "Irrigation"
      }
    },
    dashboard: {
      welcome: "Welcome back, Farmer!",
      welcome_sub: "Kisan AI is ready to help you with disease detection, and market insights today.",
      weather_humidity: "Humidity",
      weather_wind: "Wind",
      weather_today: "Today's Weather",
      card_disease_title: "Disease Doctor",
      card_disease_desc: "Upload a photo to detect plant diseases and get cure suggestions.",
      card_disease_action: "Check Plant",
      card_market_title: "Market Insights",
      card_market_desc: "Real-time Mandi prices and agricultural news updates.",
      card_market_action: "View Trends",
      card_chat_title: "Expert Chat",
      card_chat_desc: "Chat with our AI expert about any farming questions you have.",
      card_chat_action: "Ask Questions",
      card_schemes_title: "Govt Schemes",
      card_schemes_desc: "Find subsidies, loans, and insurance schemes relevant to you.",
      card_schemes_action: "Find Schemes",
      tip_title: "Seasonal Tip: Wheat Sowing",
      tip_desc: "As winter approaches, ensure optimal soil moisture before sowing wheat. Recommended varieties include HD-2967. Use the Expert Chat to check your soil health."
    },
    disease_detector: {
      title: "Plant Doctor",
      subtitle: "Upload a photo of your affected plant leaf for instant diagnosis and remedies.",
      upload: {
        placeholder: "Click to upload image",
        supports: "Supports JPG, PNG (Max 5MB)",
        analyze_btn: "Diagnose Disease",
        analyzing_btn: "Analyzing Leaf...",
        change_image: "Change selected image"
      },
      results: {
        empty: "Diagnosis results will appear here after analysis.",
        scanning: "Scanning Plant...",
        scanning_sub: "AI is identifying potential diseases and cures.",
        healthy: "Healthy",
        diseased: "Disease Detected",
        overview: "Overview",
        symptoms: "Symptoms Identified",
        treatments: "Recommended Treatments",
        care_tips: "Care Tips"
      }
    },
    market_insights: {
      title: "Market Insights",
      subtitle: "Discover real-time Mandi prices and agricultural trends powered by Google Search.",
      search_placeholder: "Search (e.g., 'Potato prices in Indore')",
      search_btn: "Search",
      trending_label: "Trending Searches:",
      trending_items: ["Wheat prices in Punjab", "Tomato rates in Nashik", "Cotton market trends"],
      loading_text: "Analyzing market trends & prices...",
      overview: "Market Overview",
      current_rate: "Current Rate",
      sources: "Sources Verified"
    },
    chat: {
      title: "Expert Agri-Chat",
      status: "Online • AI Assistant",
      welcome_msg: "Namaste! I am your Kisan AI assistant. Ask me anything about farming, crops, prices, or weather!",
      input_placeholder: "Type your question here...",
      send_label: "Send message",
      typing: "Bot is typing"
    },
    govt_schemes: {
      title: "Government Schemes",
      subtitle: "Find financial aid, subsidies, and insurance schemes tailored for you.",
      form: {
        state: "Select State",
        category: "Scheme Category",
        search_btn: "Find Schemes",
        categories: {
          all: "All Categories",
          financial: "Financial & Loans",
          insurance: "Crop Insurance",
          machinery: "Machinery Subsidy",
          seeds: "Seeds & Fertilizers"
        }
      },
      results: {
        loading: "Searching for schemes...",
        empty: "Select filters to find relevant government schemes.",
        benefits: "Benefits",
        eligibility: "Eligibility",
        learn_more: "Learn More"
      }
    }
  },
  hi: {
    app: {
      title: "किसान AI",
      skip_link: "मुख्य सामग्री पर जाएं",
      powered_by: "AI द्वारा संचालित",
      menu_open: "मेनू खोलें",
      menu_close: "मेनू बंद करें"
    },
    sidebar: {
      dashboard: "डैशबोर्ड",
      disease_doctor: "पौधों के डॉक्टर",
      market_insights: "बाजार भाव",
      expert_chat: "विशेषज्ञ चैट",
      govt_schemes: "सरकारी योजनाएं",
      select_language: "भाषा चुनें"
    },
    weather: {
      title: "स्मार्ट फसल सलाहकार",
      locating: "स्थान खोजा जा रहा है...",
      location_denied: "नई दिल्ली (डिफ़ॉल्ट)",
      forecast_5d: "5-दिवसीय पूर्वानुमान",
      labels: {
        hot_dry: "गर्म और शुष्क",
        humid: "आर्द्र (नमी)",
        rainy: "बरसात",
        windy: "तेज हवा",
        pleasant: "सुहावना",
        cold: "ठंडा"
      },
      risks: {
        disease: "रोग का खतरा",
        spray: "छिड़काव का समय",
        irrigation: "सिंचाई की आवश्यकता"
      }
    },
    dashboard: {
      welcome: "स्वागत है, किसान भाई!",
      welcome_sub: "किसान AI आज आपकी रोग पहचान और बाजार की जानकारी में मदद करने के लिए तैयार है।",
      weather_humidity: "नमी",
      weather_wind: "हवा",
      weather_today: "आज का मौसम",
      card_disease_title: "पौधों के डॉक्टर",
      card_disease_desc: "पौधों के रोगों का पता लगाने और उपचार पाने के लिए फोटो अपलोड करें।",
      card_disease_action: "जांच करें",
      card_market_title: "बाजार भाव",
      card_market_desc: "मंडी के ताजा भाव और कृषि समाचार अपडेट।",
      card_market_action: "रुझान देखें",
      card_chat_title: "विशेषज्ञ चैट",
      card_chat_desc: "खेती से जुड़े किसी भी सवाल के लिए हमारे AI विशेषज्ञ से चैट करें।",
      card_chat_action: "सवाल पूछें",
      card_schemes_title: "सरकारी योजनाएं",
      card_schemes_desc: "सब्सिडी, ऋण और बीमा योजनाएं खोजें।",
      card_schemes_action: "योजनाएं खोजें",
      tip_title: "मौसमी सुझाव: गेहूं की बुवाई",
      tip_desc: "सर्दियों के करीब आने पर, गेहूं की बुवाई से पहले मिट्टी में पर्याप्त नमी सुनिश्चित करें। एचडी-2967 जैसी किस्मों की सिफारिश की जाती है।"
    },
    disease_detector: {
      title: "प्लांट डॉक्टर",
      subtitle: "तत्काल निदान और उपचार के लिए अपने प्रभावित पौधे की पत्ती की फोटो अपलोड करें।",
      upload: {
        placeholder: "फोटो अपलोड करने के लिए क्लिक करें",
        supports: "JPG, PNG का समर्थन करता है (अधिकतम 5MB)",
        analyze_btn: "रोग का निदान करें",
        analyzing_btn: "पत्ती का विश्लेषण हो रहा है...",
        change_image: "छवि बदलें"
      },
      results: {
        empty: "निदान परिणाम विश्लेषण के बाद यहां दिखाई देंगे।",
        scanning: "पौधे को स्कैन किया जा रहा है...",
        scanning_sub: "AI संभावित रोगों और इलाज की पहचान कर रहा है।",
        healthy: "स्वस्थ",
        diseased: "रोग का पता चला",
        overview: "अवलोकन",
        symptoms: "पहचाने गए लक्षण",
        treatments: "सुझाए गए उपचार",
        care_tips: "देखभाल के सुझाव"
      }
    },
    market_insights: {
      title: "बाजार भाव (इनसाइट्स)",
      subtitle: "Google सर्च द्वारा संचालित रीयल-टाइम मंडी कीमतों और कृषि रुझानों को खोजें।",
      search_placeholder: "खोजें (जैसे, 'इंदौर में आलू के भाव')",
      search_btn: "खोजें",
      trending_label: "ट्रेंडिंग खोजें:",
      trending_items: ["पंजाब में गेहूं के भाव", "नासिक में टमाटर के रेट", "भारत में कपास के बाजार रुझान"],
      loading_text: "बाजार के रुझानों और कीमतों का विश्लेषण हो रहा है...",
      overview: "बाजार अवलोकन",
      current_rate: "वर्तमान दर",
      sources: "सत्यापित स्रोत"
    },
    chat: {
      title: "विशेषज्ञ एग्री-चैट",
      status: "ऑनलाइन • AI सहायक",
      welcome_msg: "नमस्ते! मैं आपका किसान AI सहायक हूं। खेती, फसल, कीमतों या मौसम के बारे में मुझसे कुछ भी पूछें!",
      input_placeholder: "अपना प्रश्न यहां लिखें...",
      send_label: "संदेश भेजें",
      typing: "बॉट टाइप कर रहा है"
    },
    govt_schemes: {
      title: "सरकारी योजनाएं",
      subtitle: "अपने लिए सब्सिडी, वित्तीय सहायता और बीमा योजनाएं खोजें।",
      form: {
        state: "राज्य चुनें",
        category: "योजना श्रेणी",
        search_btn: "योजनाएं खोजें",
        categories: {
          all: "सभी श्रेणियां",
          financial: "वित्तीय और ऋण",
          insurance: "फसल बीमा",
          machinery: "यंत्रसामग्री अनुदान",
          seeds: "बीज और उर्वरक"
        }
      },
      results: {
        loading: "योजनाएं खोजी जा रही हैं...",
        empty: "सरकारी योजनाएं खोजने के लिए फिल्टर चुनें।",
        benefits: "लाभ",
        eligibility: "पात्रता",
        learn_more: "अधिक जाणून घ्या"
      }
    }
  },
  // Simplified placeholders for other languages to save space, assuming pattern is clear
  pa: {
    app: { title: "ਕਿਸਾਨ AI", skip_link: "ਮੁੱਖ ਸਮੱਗਰੀ 'ਤੇ ਜਾਓ", powered_by: "AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ", menu_open: "ਮੇਨੂ ਖੋਲ੍ਹੋ", menu_close: "ਮੇਨੂ ਬੰਦ ਕਰੋ" },
    sidebar: { dashboard: "ਡੈਸ਼ਬੋਰਡ", disease_doctor: "ਪੌਦਿਆਂ ਦੇ ਡਾਕਟਰ", market_insights: "ਮਾਰਕੀਟ ਜਾਣਕਾਰੀ", expert_chat: "ਮਾਹਰ ਚੈਟ", govt_schemes: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ", select_language: "ਭਾਸ਼ਾ ਚੁਣੋ" },
    weather: { title: "ਸਮਾਰਟ ਫਸਲ ਸਲਾਹਕਾਰ", locating: "ਸਥਾਨ ਲੱਭ ਰਿਹਾ ਹੈ...", location_denied: "ਨਵੀਂ ਦਿੱਲੀ (ਡਿਫੌਲਟ)", forecast_5d: "5-ਦਿਨ ਦਾ ਪੂਰਵ ਅਨੁਮਾਨ", labels: { hot_dry: "ਗਰਮ ਅਤੇ ਖੁਸ਼ਕ", humid: "ਨਮੀ ਵਾਲਾ", rainy: "ਮੀਂਹ ਵਾਲਾ", windy: "ਹਵਾਦਾਰ", pleasant: "ਸੁਹਾਵਣਾ", cold: "ਠੰਡਾ" }, risks: { disease: "ਬਿਮਾਰੀ ਦਾ ਖਤਰਾ", spray: "ਸਪਰੇਅ ਵਿੰਡੋ", irrigation: "ਸਿੰਚਾਈ ਦੀ ਲੋੜ" } },
    dashboard: { welcome: "ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ ਵੀਰ!", welcome_sub: "ਕਿਸਾਨ AI ਅੱਜ ਬਿਮਾਰੀਆਂ ਦਾ ਪਤਾ ਲਗਾਉਣ ਅਤੇ ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ।", weather_humidity: "ਨਮੀ", weather_wind: "ਹਵਾ", weather_today: "ਅੱਜ ਦਾ ਮੌਸਮ", card_disease_title: "ਪੌਦਿਆਂ ਦੇ ਡਾਕਟਰ", card_disease_desc: "ਪੌਦਿਆਂ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਦਾ ਪਤਾ ਲਗਾਉਣ ਅਤੇ ਇਲਾਜ ਲਈ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।", card_disease_action: "ਜਾਂਚ ਕਰੋ", card_market_title: "ਮਾਰਕੀਟ ਜਾਣਕਾਰੀ", card_market_desc: "ਮੰਡੀ ਦੀਆਂ ਤਾਜ਼ਾ ਕੀਮਤਾਂ ਅਤੇ ਖੇਤੀਬਾੜੀ ਖਬਰਾਂ।", card_market_action: "ਰੁਝਾਨ ਵੇਖੋ", card_chat_title: "ਮਾਹਰ ਚੈਟ", card_chat_desc: "ਖੇਤੀ ਨਾਲ ਜੁੜੇ ਕਿਸੇ ਵੀ ਸਵਾਲ ਲਈ ਸਾਡੇ AI ਮਾਹਰ ਨਾਲ ਗੱਲ ਕਰੋ।", card_chat_action: "ਸਵਾਲ ਪੁੱਛੋ", card_schemes_title: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ", card_schemes_desc: "ਸਬਸਿਡੀਆਂ, ਕਰਜ਼ੇ ਅਤੇ ਬੀਮਾ ਸਕੀਮਾਂ ਲੱਭੋ।", card_schemes_action: "ਸਕੀਮਾਂ ਲੱਭੋ", tip_title: "ਮੌਸਮੀ ਸੁਝਾਅ: ਕਣਕ ਦੀ ਬਿਜਾਈ", tip_desc: "ਸਰਦੀਆਂ ਨੇੜੇ ਆਉਣ 'ਤੇ, ਕਣਕ ਦੀ ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਵਿੱਚ ਉਚਿਤ ਨਮੀ ਯਕੀਨੀ ਬਣਾਓ। ਐਚਡੀ-2967 ਵਰਗੀਆਂ ਕਿਸਮਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।" },
    disease_detector: { title: "ਪਲਾਂਟ ਡਾਕਟਰ", subtitle: "ਤੁਰੰਤ ਨਿਦਾਨ ਅਤੇ ਇਲਾਜ ਲਈ ਆਪਣੇ ਪ੍ਰਭਾਵਿਤ ਪੌਦੇ ਦੇ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।", upload: { placeholder: "ਫੋਟੋ ਅਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ", supports: "JPG, PNG ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ (ਅਧਿਕਤਮ 5MB)", analyze_btn: "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲਗਾਓ", analyzing_btn: "ਪੱਤੇ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ...", change_image: "ਚਿੱਤਰ ਬਦਲੋ" }, results: { empty: "ਨਿਦਾਨ ਨਤੀਜੇ ਵਿਸ਼ਲੇਸ਼ਣ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।", scanning: "ਪੌਦੇ ਨੂੰ ਸਕੈਨ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...", scanning_sub: "AI ਸੰਭਾਵੀ ਬਿਮਾਰੀਆਂ ਅਤੇ ਇਲਾਜ ਦੀ ਪਛਾਣ ਕਰ ਰਿਹਾ ਹੈ।", healthy: "ਸਿਹਤਮੰਦ", diseased: "ਬਿਮਾਰੀ ਦਾ ਪਤਾ ਲੱਗਾ", overview: "ਸੰਖੇਪ ਜਾਣਕਾਰੀ", symptoms: "ਪਛਾਣੇ ਗਏ ਲੱਛਣ", treatments: "ਸਿਫਾਰਸ਼ ਕੀਤੇ ਇਲਾਜ", care_tips: "ਦੇਖਭਾਲ ਸੁਝਾਅ" } },
    market_insights: { title: "ਮਾਰਕੀਟ ਜਾਣਕਾਰੀ", subtitle: "Google ਖੋਜ ਦੁਆਰਾ ਸੰਚਾਲਿਤ ਰੀਅਲ-ਟਾਈਮ ਮੰਡੀ ਕੀਮਤਾਂ ਅਤੇ ਖੇਤੀਬਾੜੀ ਰੁਝਾਨਾਂ ਨੂੰ ਲੱਭੋ।", search_placeholder: "ਖੋਜੋ (ਉਦਾਹਰਨ ਲਈ, 'ਪੰਜਾਬ ਵਿੱਚ ਕਣਕ ਦੇ ਭਾਅ')", search_btn: "ਖੋਜੋ", trending_label: "ਟ੍ਰੈਂਡਿੰਗ ਖੋਜਾਂ:", trending_items: ["ਪੰਜਾਬ ਵਿੱਚ ਕਣਕ ਦੇ ਭਾਅ", "ਨਾਸਿਕ ਵਿੱਚ ਟਮਾਟਰ ਦੇ ਰੇਟ", "ਭਾਰਤ ਵਿੱਚ ਕਪਾਹ ਦੇ ਬਾਜ਼ਾਰ ਰੁਝਾਨ"], loading_text: "ਮਾਰਕੀਟ ਰੁਝਾਨਾਂ ਅਤੇ ਕੀਮਤਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ...", overview: "ਮਾਰਕੀਟ ਸੰਖੇਪ", current_rate: "ਮੌਜੂਦਾ ਰੇਟ", sources: "ਤਸਦੀਕਸ਼ੁਦਾ ਸਰੋਤ" },
    chat: { title: "ਮਾਹਰ ਐਗਰੀ-ਚੈਟ", status: "ਆਨਲਾਈਨ • AI ਸਹਾਇਕ", welcome_msg: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਕਿਸਾਨ AI ਸਹਾਇਕ ਹਾਂ। ਖੇਤੀ, ਫਸਲਾਂ, ਕੀਮਤਾਂ ਜਾਂ ਮੌਸਮ ਬਾਰੇ ਮੇਰੇ ਤੋਂ ਕੁਝ ਵੀ ਪੁੱਛੋ!", input_placeholder: "ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ...", send_label: "ਸੁਨੇਹਾ ਭੇਜੋ", typing: "ਬੋਟ ਲਿਖ ਰਿਹਾ ਹੈ" },
    govt_schemes: { title: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ", subtitle: "ਆਪਣੇ ਲਈ ਸਬਸਿਡੀਆਂ, ਵਿੱਤੀ ਸਹਾਇਤਾ ਅਤੇ ਬੀਮਾ ਯੋਜਨਾਵਾਂ ਲੱਭੋ।", form: { state: "ਰਾਜ ਚੁਣੋ", category: "ਸਕੀਮ ਸ਼੍ਰੇਣੀ", search_btn: "ਸਕੀਮਾਂ ਲੱਭੋ", categories: { all: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ", financial: "ਵਿੱਤੀ ਅਤੇ ਕਰਜ਼ੇ", insurance: "ਫਸਲ ਬੀਮਾ", machinery: "ਮਸ਼ੀਨਰੀ ਸਬਸਿਡੀ", seeds: "ਬੀਜ ਅਤੇ ਖਾਦਾਂ" } }, results: { loading: "ਸਕੀਮਾਂ ਦੀ ਖੋਜ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...", empty: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਲੱਭਣ ਲਈ ਫਿਲਟਰ ਚੁਣੋ।", benefits: "ਲਾਭ", eligibility: "ਯੋਗਤਾ", learn_more: "ਹੋਰ ਜਾਣੋ" } }
  },
  mr: {
    app: { title: "किसान AI", skip_link: "मुख्य सामग्रीकडे जा", powered_by: "AI द्वारे समर्थित", menu_open: "मेनू उघडा", menu_close: "मेनू बंद करा" },
    sidebar: { dashboard: "डॅशबोर्ड", disease_doctor: "वनस्पती डॉक्टर", market_insights: "बाजार भाव", expert_chat: "तज्ञ चॅट", govt_schemes: "सरकारी योजना", select_language: "भाषा निवडा" },
    weather: { title: "स्मार्ट पीक सल्लागार", locating: "स्थान शोधले जात आहे...", location_denied: "नवी दिल्ली (डिफॉल्ट)", forecast_5d: "5-दिवसीय अंदाज", labels: { hot_dry: "गरम आणि कोरडे", humid: "दमट", rainy: "पावसाळी", windy: "वादळी", pleasant: "आनंददायी", cold: "थंड" }, risks: { disease: "रोग जोखीम", spray: "फवारणीची वेळ", irrigation: "सिंचन गरज" } },
    dashboard: { welcome: "स्वागत आहे, शेतकरी दादा!", welcome_sub: "किसान AI आज तुम्हाला रोग निदान आणि बाजारातील माहितीमध्ये मदत करण्यास तयार आहे.", weather_humidity: "आर्द्रता", weather_wind: "वारा", weather_today: "आजचे हवामान", card_disease_title: "वनस्पती डॉक्टर", card_disease_desc: "वनस्पती रोगांचे निदान आणि उपचारांसाठी फोटो अपलोड करा.", card_disease_action: "तपासा", card_market_title: "बाजार भाव", card_market_desc: "बाजार समितीचे ताजे भाव आणि कृषी बातम्या अद्यतने.", card_market_action: "ट्रेंड पहा", card_chat_title: "तज्ञ चॅट", card_chat_desc: "शेतीशी संबंधित कोणत्याही प्रश्नासाठी आमच्या AI तज्ञाशी चॅट करा.", card_chat_action: "प्रश्न विचारा", card_schemes_title: "सरकारी योजना", card_schemes_desc: "अनुदान, कर्ज आणि विमा योजना शोधा.", card_schemes_action: "योजना शोधा", tip_title: "हंगामी टीप: गव्हाची पेरणी", tip_desc: "हिवाळा जवळ आल्याने, गव्हाच्या पेरणीपूर्वी जमिनीत पुरेसा ओलावा असल्याची खात्री करा. HD-2967 सारख्या वाणांची शिफारस केली जाते." },
    disease_detector: { title: "प्लांट डॉक्टर", subtitle: "त्वरित निदान आणि उपचारांसाठी आपल्या प्रभावित वनस्पतीच्या पानाचा फोटो अपलोड करें.", upload: { placeholder: "फोटो अपलोड करण्यासाठी क्लिक करें", supports: "JPG, PNG चे समर्थन करते (कमाल 5MB)", analyze_btn: "रोगाचे निदान करा", analyzing_btn: "पानाचे विश्लेषण होत आहे...", change_image: "प्रतिमा बदला" }, results: { empty: "निदान परिणाम विश्लेषणानंतर येथे दिसतील.", scanning: "वनस्पती स्कॅन केली जात आहे...", scanning_sub: "AI संभाव्य रोग आणि उपचारांची ओळख करत आहे.", healthy: "निरोगी", diseased: "रोग आढळला", overview: "आढावा", symptoms: "ओळखलेली लक्षणे", treatments: "शिफारस केलेले उपचार", care_tips: "काळजीच्या टिपा" } },
    market_insights: { title: "बाजार भाव", subtitle: "Google सर्च द्वारे समर्थित रिअल-टाइम बाजार समिती किंमती आणि कृषी ट्रेंड शोधा.", search_placeholder: "शोधा (उदा., 'नाशिकमध्ये कांद्याचे भाव')", search_btn: "शोधा", trending_label: "ट्रेंडिंग शोध:", trending_items: ["पुण्यात गव्हाचे भाव", "नाशिकमध्ये टोमॅटोचे दर", "भारतात कापूस बाजार ट्रेंड"], loading_text: "बाजार ट्रेंड आणि किंमतींचे विश्लेषण होत आहे...", overview: "बाजार आढावा", current_rate: "सध्याचा दर", sources: "सत्यापित स्रोत" },
    chat: { title: "तज्ञ एग्री-चॅट", status: "ऑनलाइन • AI द्वारे समर्थित", welcome_msg: "नमस्ते! मी तुमचा किसान AI सहाय्यक आहे. शेती, पिके, किंमती किंवा हवामानाबद्दल मला काहीही विचारा!", input_placeholder: "अपना प्रश्न येथे टाइप करा...", send_label: "संदेश पाठवा", typing: "बॉट टाइप करत आहे" },
    govt_schemes: { title: "सरकारी योजना", subtitle: "आपल्यासाठी अनुदान, आर्थिक मदत आणि विमा योजना शोधा.", form: { state: "राज्य निवडा", category: "योजना श्रेणी", search_btn: "योजना शोधा", categories: { all: "सर्व श्रेणी", financial: "आर्थिक आणि कर्ज", insurance: "पीक विमा", machinery: "यंत्रसामग्री अनुदान", seeds: "बियाणे आणि खते" } }, results: { loading: "योजना शोधल्या जात आहेत...", empty: "सरकारी योजना शोधण्यासाठी फिल्टर निवडा.", benefits: "फायदे", eligibility: "पात्रता", learn_more: "अधिक जाणून घ्या" } }
  },
  kn: {
    app: { title: "ಕಿಸಾನ್ AI", skip_link: "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ತೆರಳಿ", powered_by: "AI ಮೂಲಕ", menu_open: "ಮೆನು ತೆರೆಯಿರಿ", menu_close: "ಮೆನು ಮುಚ್ಚಿ" },
    sidebar: { dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", disease_doctor: "ಸಸ್ಯ ವೈದ್ಯ", market_insights: "ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ", expert_chat: "ತಜ್ಞರ ಚಾಟ್", govt_schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", select_language: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ" },
    weather: { title: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಸಲಹೆಗಾರ", locating: "ಸ್ಥಳ ಪತ್ತೆ ಮಾಡಲಾಗುತ್ತಿದೆ...", location_denied: "ನವದೆಹಲಿ (ಡೀಫಾಲ್ಟ್)", forecast_5d: "5-ದಿನದ ಮುನ್ಸೂಚನೆ", labels: { hot_dry: "ಬಿಸಿ ಮತ್ತು ಒಣ", humid: "ಆರ್ದ್ರ", rainy: "ಮಳೆ", windy: "ಗಾಳಿ", pleasant: "ಆಹ್ಲಾದಕರ", cold: "ಶೀತ" }, risks: { disease: "ರೋಗದ ಅಪಾಯ", spray: "ಸಿಂಪಡಣೆ ಸಮಯ", irrigation: "ನೀರಾವರಿ ಅಗತ್ಯ" } },
    dashboard: { welcome: "ಸ್ವಾಗತ, ರೈತ ಮಿತ್ರರೇ!", welcome_sub: "ಕಿಸಾನ್ AI ಇಂದು ನಿಮಗೆ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿಯೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ.", weather_humidity: "ತೇವಾಂಶ", weather_wind: "ಗಾಳಿ", weather_today: "ಇಂದಿನ ಹವಾಮಾನ", card_disease_title: "ಸಸ್ಯ ವೈದ್ಯ", card_disease_desc: "ಸಸ್ಯ ರೋಗಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪಡೆಯಲು ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.", card_disease_action: "ಪರಿಶೀಲಿಸಿ", card_market_title: "ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ", card_market_desc: "ನೈಜ ಸಮಯದ ಮಂಡಿ ಬೆಲೆಗಳು ಮತ್ತು ಕೃಷಿ ಸುದ್ದಿ ನವೀಕರಣಗಳು.", card_market_action: "ಪ್ರವೃತ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ", card_chat_title: "ತಜ್ಞರ ಚಾಟ್", card_chat_desc: "ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮ್ಮ AI ತಜ್ಞರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ.", card_chat_action: "ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ", card_schemes_title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", card_schemes_desc: "ಸಬ್ಸಿಡಿಗಳು, ಸಾಲಗಳು ಮತ್ತು ವಿಮಾ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.", card_schemes_action: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", tip_title: "ಋತುಮಾನದ ಸಲಹೆ: ಗೋಧಿ ಬಿತ್ತನೆ", tip_desc: "ಚಳಿಗಾಲ ಸಮೀಪಿಸುತ್ತಿದ್ದಂತೆ, ಗೋಧಿ ಬಿತ್ತನೆ ಮಾಡುವ ಮೊದಲು ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಎಚ್‌ಡಿ-2967 ನಂತಹ ತಳಿಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ." },
    disease_detector: { title: "ಪ್ಲಾಂಟ್ ಡಾಕ್ಟರ್", subtitle: "ತಕ್ಷಣದ ರೋಗನಿರ್ಣಯ ಮತ್ತು ಪರಿಹಾರಗಳಿಗಾಗಿ ನಿಮ್ಮ ಬಾಧಿತ ಸಸ್ಯದ ಎಲೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.", upload: { placeholder: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ", supports: "JPG, PNG ಬೆಂಬಲಿಸುತ್ತದೆ (ಗರಿಷ್ಠ 5MB)", analyze_btn: "ರೋಗ ಪತ್ತೆ ಮಾಡಿ", analyzing_btn: "ಎಲೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...", change_image: "ಚಿತ್ರವನ್ನು ಬದಲಾಯಿಸಿ" }, results: { empty: "ವಿಶ್ಲೇಷಣೆಯ ನಂತರ ರೋಗನಿರ್ಣಯದ ಫಲಿತಾಂಶಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.", scanning: "ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತಿದೆ...", scanning_sub: "AI ಸಂಭಾವ್ಯ ರೋಗಗಳು ಮತ್ತು ಚಿಕಿತ್ಸೆಯನ್ನು ಗುರುತಿಸುತ್ತಿದೆ.", healthy: "ಆರೋಗ್ಯಕರ", diseased: "ರೋಗ ಪತ್ತೆಯಾಗಿದೆ", overview: "ಅವಲೋಕನ", symptoms: "ಗುರುತಿಸಲಾದ ಲಕ್ಷಣಗಳು", treatments: "ಶಿಫಾರಸು ಮಾಡಲಾದ ಚಿಕಿತ್ಸೆಗಳು", care_tips: "ಆರೈಕೆ ಸಲಹೆಗಳು" } },
    market_insights: { title: "ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿ", subtitle: "Google ಹುಡುಕಾಟದಿಂದ ನಡೆಸಲ್ಪಡುವ ನೈಜ ಸಮಯದ ಮಂಡಿ ಬೆಲೆಗಳು ಮತ್ತು ಕೃಷಿ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.", search_placeholder: "ಹುಡುಕಿ (ಉದಾ., 'ಶಿವಮೊಗ್ಗದಲ್ಲಿ ಅಡಿಕೆ ಬೆಲೆ')", search_btn: "ಹುಡುಕಿ", trending_label: "ಟ್ರೆಂಡಿಂಗ್ ಹುಡುಕಾಟಗಳು:", trending_items: ["ಕರ್ನಾಟಕದಲ್ಲಿ ರಾಗಿ ಬೆಲೆ", "ಕೋಲಾರದಲ್ಲಿ ಟೊಮೆಟೊ ದರ", "ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹತ್ತಿ ಬೆಲೆ"], loading_text: "ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು ಮತ್ತು ಬೆಲೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...", overview: "ಮಾರುಕಟ್ಟೆ ಅವಲೋಕನ", current_rate: "ಪ್ರಸ್ತುತ ದರ", sources: "ದೃಢೀಕರಿಸಿದ ಮೂಲಗಳು" },
    chat: { title: "ತಜ್ಞ ಎಗ್ರಿ-ಚಾಟ್", status: "ಆನ್‌ಲೈನ್ • AI ಸಹಾಯಕ", welcome_msg: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕಿಸಾನ್ AI ಸಹಾಯಕ. ಕೃಷಿ, ಬೆಳೆಗಳು, ಬೆಲೆಗಳು ಅಥವಾ ಹವಾಮಾನದ ಬಗ್ಗೆ ನನ್ನನ್ನು ಏನೇ ಕೇಳಿ!", input_placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...", send_label: "ಸಂದೇಶ ಕಳುಹಿಸಿ", typing: "ಬಾಟ್ ಟೈಪ್ ಮಾಡುತ್ತಿದೆ" },
    govt_schemes: { title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", subtitle: "ನಿಮಗಾಗಿ ಸಬ್ಸಿಡಿಗಳು, ಆರ್ಥಿಕ ನೆರವು ಮತ್ತು ವಿಮಾ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ.", form: { state: "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ", category: "ಯೋಜನೆ ವರ್ಗ", search_btn: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", categories: { all: "ಎಲ್ಲಾ ವರ್ಗಗಳು", financial: "ಹಣಕಾಸು ಮತ್ತು ಸಾಲಗಳು", insurance: "ಬೆಳೆ ವಿಮೆ", machinery: "ಯಂತ್ರೋಪಕರಣ ಸಬ್ಸಿಡಿ", seeds: "ಬೀಜಗಳು ಮತ್ತು ರಸಗೊಬ್ಬರಗಳು" } }, results: { loading: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...", empty: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.", benefits: "ಪ್ರಯೋಜನಗಳು", eligibility: "ಅರ್ಹತೆ", learn_more: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ" } }
  }
};
