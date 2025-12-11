
import { useState, useEffect, useCallback, useRef } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const synth = useRef<SpeechSynthesis | null>(null);
  const isCancelled = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synth.current = window.speechSynthesis;

      const updateVoices = () => {
         const availableVoices = window.speechSynthesis.getVoices();
         setVoices(availableVoices);
      };

      updateVoices();
      
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }

    return () => {
      if (synth.current) {
        synth.current.cancel();
      }
    };
  }, []);

  const getBestVoice = useCallback((langCode: string) => {
    if (!voices.length) return null;

    const langConfig: Record<string, { tags: string[], preferredNames: string[] }> = {
      'en': { 
        tags: ['en-IN', 'en-GB', 'en-US'], 
        preferredNames: ['Google', 'Microsoft', 'Natural'] 
      },
      'hi': { 
        tags: ['hi-IN', 'hi'], 
        preferredNames: ['Google', 'Lekha', 'Microsoft'] 
      },
      'pa': { 
        tags: ['pa-IN', 'pa'], 
        preferredNames: ['Google', 'Microsoft'] 
      },
      'mr': { 
        tags: ['mr-IN', 'mr'], 
        preferredNames: ['Google', 'Microsoft'] 
      },
      'ta': { 
        tags: ['ta-IN', 'ta', 'ta-LK'], 
        preferredNames: ['Google', 'Microsoft'] 
      },
      'bn': { 
        tags: ['bn-IN', 'bn-BD', 'bn'], 
        preferredNames: ['Google', 'Microsoft'] 
      },
      'kn': { 
        tags: ['kn-IN', 'kn'], 
        preferredNames: ['Google', 'Microsoft'] 
      },
      'te': { 
        tags: ['te-IN', 'te'], 
        preferredNames: ['Google', 'Microsoft'] 
      }
    };

    const config = langConfig[langCode] || langConfig['en'];

    // 1. Match Tag + Vendor
    for (const tag of config.tags) {
      for (const name of config.preferredNames) {
        const match = voices.find(v => 
          (v.lang === tag || v.lang.replace('_', '-') === tag) && 
          v.name.includes(name)
        );
        if (match) return match;
      }
    }

    // 2. Match Tag
    for (const tag of config.tags) {
      const match = voices.find(v => v.lang === tag || v.lang.replace('_', '-') === tag);
      if (match) return match;
    }

    // 3. Match Base Lang
    for (const tag of config.tags) {
      const base = tag.split('-')[0];
      const match = voices.find(v => v.lang.startsWith(base));
      if (match) return match;
    }

    return null;
  }, [voices]);

  const cleanAndChunkText = (text: string): string[] => {
    // 1. Normalize Units & Symbols for better reading
    let clean = text
      .replace(/(\d+)°C/g, '$1 degrees Celsius')
      .replace(/(\d+)%/g, '$1 percent')
      .replace(/[*#_`~]/g, '') // Remove Markdown
      .replace(/\[.*?\]/g, '') // Remove Citations
      .replace(/https?:\/\/\S+/g, 'link')
      // Remove Emojis
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();

    // 2. Split into sentences to avoid 15s browser timeout bug and improve flow
    // Regex splits by punctuation (. ? ! ।) but keeps the delimiter
    // Added '।' for Hindi/Indian languages support
    const chunks = clean.match(/[^.?!।]+[.?!।]+|[^.?!।]+$/g) || [clean];
    
    return chunks.map(c => c.trim()).filter(c => c.length > 0);
  };

  const speak = useCallback((text: string, langCode: string) => {
    if (!synth.current) return;

    // Reset state
    synth.current.cancel();
    isCancelled.current = false;
    setIsSpeaking(true);

    const chunks = cleanAndChunkText(text);
    const selectedVoice = getBestVoice(langCode);

    let chunkIndex = 0;

    const speakNextChunk = () => {
      // Check if user pressed stop or we ran out of chunks
      if (isCancelled.current || chunkIndex >= chunks.length) {
        setIsSpeaking(false);
        return;
      }

      const chunkText = chunks[chunkIndex];
      const utterance = new SpeechSynthesisUtterance(chunkText);

      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        const langTagMap: Record<string, string> = {
            'hi': 'hi-IN', 'pa': 'pa-IN', 'mr': 'mr-IN', 
            'ta': 'ta-IN', 'bn': 'bn-IN', 'kn': 'kn-IN', 
            'te': 'te-IN', 'en': 'en-IN'
        };
        utterance.lang = langTagMap[langCode] || 'en-US';
      }

      // Voice Tuning
      switch(langCode) {
        case 'hi': case 'mr': case 'bn': case 'pa':
            utterance.rate = 0.9; utterance.pitch = 1.0; break;
        case 'ta': case 'kn': case 'te':
            utterance.rate = 0.85; utterance.pitch = 1.05; break;
        default:
            utterance.rate = 1.0; utterance.pitch = 1.0;
      }

      utterance.onend = () => {
        chunkIndex++;
        speakNextChunk();
      };

      utterance.onerror = (e) => {
        console.error("TTS Error:", e);
        // Sometimes cancel triggers error, ensure we stop
        setIsSpeaking(false);
      };

      synth.current?.speak(utterance);
    };

    speakNextChunk();
  }, [getBestVoice]);

  const stop = useCallback(() => {
    if (synth.current) {
        isCancelled.current = true; // Signal the loop to stop
        synth.current.cancel();
        setIsSpeaking(false);
    }
  }, []);

  return { speak, stop, isSpeaking };
};
