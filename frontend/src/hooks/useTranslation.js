import { useLanguage } from '../context/LanguageContext';
import translations from '../translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const languageMap = {
    'english': 'en',
    'amharic': 'amharic'
  };

  const t = (key) => {
    const keys = key.split('.');
    const langKey = languageMap[language] || 'en';
    let value = translations[langKey];
    
    for (const k of keys) {
      if (!value || !value[k]) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };

  return { t };
};
