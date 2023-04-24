// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmXswokG0QZRtZ4IObD9Guwi7ftY4EQZI",
  authDomain: "alextorodesigns.firebaseapp.com",
  projectId: "alextorodesigns",
  storageBucket: "alextorodesigns.appspot.com",
  messagingSenderId: "622819972799",
  appId: "1:622819972799:web:241bfd4eba65d4fc1fd80a",
  measurementId: "G-MSKCWNL1JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage();

export{app, analytics, storage}