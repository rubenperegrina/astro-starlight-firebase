import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBP3dvmZB5w-4vCo_O4A6qYZkS9iJals5g",
  authDomain: "astro-starlight-firebase.firebaseapp.com",
  projectId: "astro-starlight-firebase",
  storageBucket: "astro-starlight-firebase.appspot.com",
  messagingSenderId: "361080495531",
  appId: "1:361080495531:web:e2f0726bfabdd4af7606ee",
  measurementId: "G-KX1VPW3K12"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);