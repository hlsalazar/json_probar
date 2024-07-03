import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

// Verificación de las variables de entorno
console.log('API_KEY:', process.env.API_KEY);
console.log('AUTH_DOMAIN:', process.env.AUTH_DOMAIN);
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('PROJECT_ID:', process.env.PROJECT_ID);
console.log('STORAGE_BUCKET:', process.env.STORAGE_BUCKET);
console.log('MESSAGING_SENDER_ID:', process.env.MESSAGING_SENDER_ID);
console.log('APP_ID:', process.env.APP_ID);
console.log('MEASUREMENT_ID:', process.env.MEASUREMENT_ID);

export const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);
