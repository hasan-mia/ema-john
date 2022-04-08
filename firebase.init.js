// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBSJEBwe_qffGjjmTutrn7Uh0OuArtpCh4",
	authDomain: "emaa-jhon.firebaseapp.com",
	projectId: "emaa-jhon",
	storageBucket: "emaa-jhon.appspot.com",
	messagingSenderId: "1035166587552",
	appId: "1:1035166587552:web:94fbf36c8330d25a6607c5",
	measurementId: "G-JTKMN52C4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;