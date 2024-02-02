import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9dfTyGYm45o9CkMCPqnFfiNRj6TPjlxc",
  authDomain: "ecommerce-7b8be.firebaseapp.com",
  projectId: "ecommerce-7b8be",
  storageBucket: "ecommerce-7b8be.appspot.com",
  messagingSenderId: "145351173021",
  appId: "1:145351173021:web:2f13993d23eb685b60c574",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
