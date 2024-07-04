import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

export const firebaseConfig = {
  apiKey: window.env.NEXT_PUBLIC_API_KEY,
  authDomain: window.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: window.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: window.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: window.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: window.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: window.env.NEXT_PUBLIC_APP_ID,
  measurementId: window.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
