import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhex7pKVrImG-6wLn0lGfPK_2xoH8Gl10",
    authDomain: "record-shop-db.firebaseapp.com",
    projectId: "record-shop-db",
    storageBucket: "record-shop-db.appspot.com",
    messagingSenderId: "989849871069",
    appId: "1:989849871069:web:c4219ae8bb2c334299f134"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)