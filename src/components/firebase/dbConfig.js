import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA5n4C-KSXOyyuFk2tQ1mHmPIucokwMUFI",
    authDomain: "arauca-reactjs.firebaseapp.com",
    projectId: "arauca-reactjs",
    storageBucket: "arauca-reactjs.appspot.com",
    messagingSenderId: "245207381144",
    appId: "1:245207381144:web:bbe7a497508892188a8ced"
  };

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app
}
const auth = getAuth()
