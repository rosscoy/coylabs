import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

// Firebase web config is public by design (it ships to every browser).
// Access is controlled by firestore.rules, not by hiding these values.
// Env vars override the defaults if set.
const env = import.meta.env
const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || 'AIzaSyAugiUhhmcB8Y4R3CNSRDlXnywI5AukB7I',
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || 'coylabs-dev.firebaseapp.com',
  projectId: env.VITE_FIREBASE_PROJECT_ID || 'coylabs-dev',
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || 'coylabs-dev.firebasestorage.app',
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '209304652058',
  appId: env.VITE_FIREBASE_APP_ID || '1:209304652058:web:5640b3912519900036c4a3',
}

export const app = initializeApp(firebaseConfig)

// Firestore "lite" keeps the public page bundle small (no realtime listeners needed).
export const db = getFirestore(app)
