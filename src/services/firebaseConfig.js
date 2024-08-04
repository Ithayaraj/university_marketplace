import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0TNj9NaqSP14kNoQU2YyFBYVFFt7rICo",
    authDomain: "university-marketplace-39d89.firebaseapp.com",
    projectId: "university-marketplace-39d89",
    storageBucket: "university-marketplace-39d89.appspot.com",
    messagingSenderId: "308211194603",
    appId: "1:308211194603:web:82d72a743bdf7680c1fcae",
    measurementId: "G-YP7FGDD1GJ"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);

export { auth, db };
