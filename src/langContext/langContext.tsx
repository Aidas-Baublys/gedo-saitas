import { createContext, useContext, useState, ReactNode } from 'react';

export enum Lang {
  EN = 'en',
  LT = 'lt',
}

// Define a generic type for translations
type Translations = Record<Lang, Record<string, string>>;

// Define the available languages and translations
const translations: Translations = {
  [Lang.EN]: {
    about: 'About Me',
    book: 'Book a Massage',
    contact: 'Contact Us',
    home: 'Home',
    heroTitle: "It's time to treat yourself 😎",
    heroSubtitle: 'Book a relaxing massage now:',
    findTimes: 'Find Times',
    selectTimes: 'Select a time',
    noTimes: 'No available times for this date.',
    confirmBooking: 'Confirm Booking',
  },
  [Lang.LT]: {
    about: 'Apie',
    book: 'Rezervuoti',
    contact: 'Kontaktai',
    home: 'Pradžia',
    heroTitle: 'Laikas pasirūpinti savimi 😎',
    heroSubtitle: 'Rezervuokite atpalaiduojantį masažą dabar:',
    findTimes: 'Raskite laikus',
    selectTimes: 'Pasirinkite laiką',
    noTimes: 'Nėra laisvų laikų šiai dienai.',
    confirmBooking: 'Patvirtinti laiką',
  },
};

interface LangContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContext | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(Lang.EN);

  const t = (key: string) => translations[lang][key] || key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};

// Custom hook to use the LangContext
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
