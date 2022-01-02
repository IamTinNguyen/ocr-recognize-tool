import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCfF3hp5cuGDpme0Y77c8ilMbaQcMKKmgs",
    authDomain: "midterm-project-7c6a0.firebaseapp.com",
    projectId: "midterm-project-7c6a0",
    storageBucket: "midterm-project-7c6a0.appspot.com",
    messagingSenderId: "471117544890",
    appId: "1:471117544890:web:f20fab87f8c7212caf3183",
    measurementId: "G-H6PZZKSH7X"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };