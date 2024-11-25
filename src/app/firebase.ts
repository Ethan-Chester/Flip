import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO1S2BHeC0YNPk16_Ir875fVnoFqUb-k4",
    authDomain: "flip-b47e9.firebaseapp.com",
    projectId: "flip-b47e9",
    storageBucket: "flip-b47e9.firebasestorage.app",
    messagingSenderId: "243918139967",
    appId: "1:243918139967:web:fb23f88a4942589ff77e8a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);