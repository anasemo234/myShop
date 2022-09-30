import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


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

// Google sign-in/up serviec
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

// Returns Firebase Auth object for the app
export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// Creates firestore database
export const db = getFirestore();

// Getting data from auth service and store that inside firestore
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInforamtion = {}
) => {
    if (!userAuth) return
    // 'users' is name of collection
    // userAuth.uid is our uid (unique identifier)
    const userDocRef = doc(db, 'users', userAuth.uid)


    // gets data of a specific document from collection  
    const userSnapshot = await getDoc(userDocRef)

    // Checks whether or not inside of our database does that reference and the data related to that reference even exists
    // If there is a place in the database for this data give it back... if not creats one
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInforamtion,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
        return userDocRef
    }
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if email or password is not recieved it will exit
    // method does not get called
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    // if email or password is not recieved it will exit
    // method does not get called
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth)


// Its calls a callback when user is sign in or sign out because that is an AuthStateChange
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback)