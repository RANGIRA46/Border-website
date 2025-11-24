import { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from '@/lib/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get from localStorage or default to English
        const stored = localStorage.getItem('border-lang');
        return (stored as Language) || 'en';
    });

    useEffect(() => {
        // Save to localStorage whenever language changes
        localStorage.setItem('border-lang', language);

        // Set HTML lang attribute for accessibility
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

// Language metadata for UI
export const languageOptions = [
    { code: 'en' as Language, name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'fr' as Language, name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'sw' as Language, name: 'Kiswahili', nativeName: 'Kiswahili', flag: '🇹🇿' },
    { code: 'rw' as Language, name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', flag: '🇷🇼' },
];
