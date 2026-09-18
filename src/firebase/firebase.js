// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEAJMVaf9RxVsIA0sxVY8_FQEDtn_9ixY",
//   authDomain: "lucky-57e6d.firebaseapp.com",
//   projectId: "lucky-57e6d",
//   storageBucket: "lucky-57e6d.firebasestorage.app",
//   messagingSenderId: "178307177019",
//   appId: "1:178307177019:web:790c7aa5cbf08b34391a1e",
//   measurementId: "G-KR38WGZP0C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAEAJMVaf9RxVsIA0sxVY8_FQEDtn_9ixY",
    authDomain: "lucky-57e6d.firebaseapp.com",
    projectId: "lucky-57e6d",
    storageBucket: "lucky-57e6d.firebasestorage.app",
    messagingSenderId: "178307177019",
    appId: "1:178307177019:web:790c7aa5cbf08b34391a1e",
    measurementId: "G-KR38WGZP0C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider =
    new GoogleAuthProvider();

export const analytics =
    typeof window !== "undefined"
        ? getAnalytics(app)
        : null;

export default app;