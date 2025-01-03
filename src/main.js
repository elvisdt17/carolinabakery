import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import "./style.css"; // TailwindCSS styles

// i18n Configuration
const i18n = createI18n({
  locale: "en", // Default language
  fallbackLocale: "en",
  messages: { en, es },
});

// Create and mount the app
createApp(App).use(router).use(i18n).mount("#app");
