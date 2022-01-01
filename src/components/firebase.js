import { firebase } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOH4zICMOWi0KUDRFZP8ZBKKeICYAqMO8",
    authDomain: "midterm-project-deb9b.firebaseapp.com",
    projectId: "midterm-project-deb9b",
    storageBucket: "midterm-project-deb9b.appspot.com",
    messagingSenderId: "430077830287",
    appId: "1:430077830287:web:b70e0e3a51d1b1e2cebcfa",
    measurementId: "G-WVXDRRHZ2C"
  }

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);