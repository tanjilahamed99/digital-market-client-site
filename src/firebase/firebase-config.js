// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO94B9hX_ZmVRHjd489l-_rIYpzU0ctVI",
    authDomain: "digital-shop-82fde.firebaseapp.com",
    projectId: "digital-shop-82fde",
    storageBucket: "digital-shop-82fde.appspot.com",
    messagingSenderId: "923105474190",
    appId: "1:923105474190:web:4e557359d70aaa4bda3bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth