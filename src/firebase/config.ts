import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjbt41TESHK0EYS8s8w3tDGNtQGKQAs5o",
    authDomain: "queuing-system-1d6a0.firebaseapp.com",
    projectId: "queuing-system-1d6a0",
    storageBucket: "queuing-system-1d6a0.appspot.com",
    messagingSenderId: "871563682821",
    appId: "1:871563682821:web:931092f0f4a1dd6e43286c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
