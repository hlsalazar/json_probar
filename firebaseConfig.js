import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

// Verificación de las variables de entorno
console.log('API_KEY:', process.env.NEXT_PUBLIC_API_KEY);
console.log('AUTH_DOMAIN:', process.env.NEXT_PUBLIC_AUTH_DOMAIN);
console.log('DATABASE_URL:', process.env.NEXT_PUBLIC_DATABASE_URL);
console.log('PROJECT_ID:', process.env.NEXT_PUBLIC_PROJECT_ID);
console.log('STORAGE_BUCKET:', process.env.NEXT_PUBLIC_STORAGE_BUCKET);
console.log('MESSAGING_SENDER_ID:', process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID);
console.log('APP_ID:', process.env.NEXT_PUBLIC_APP_ID);
console.log('MEASUREMENT_ID:', process.env.NEXT_PUBLIC_MEASUREMENT_ID);

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
