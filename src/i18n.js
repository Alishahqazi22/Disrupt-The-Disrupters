import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        trackOrder: "Track Order",
        language: "English",
        currency: "USD",
        followUs: "Follow us:",
      },
    },
    ur: {
      translation: {
        trackOrder: "آرڈر ٹریک کریں",
        language: "اردو",
        currency: "پاکستانی روپیہ",
        followUs: "ہمیں فالو کریں:",
      },
    },
    ar: {
      translation: {
        trackOrder: "تتبع الطلب",
        language: "العربية",
        currency: "درهم",
        followUs: "تابعنا:",
      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
