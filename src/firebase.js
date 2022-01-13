import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDm_04aHLp664Td-excB9H0t1L-jHxZPVo",
    authDomain: "react-notes-app-e03fd.firebaseapp.com",
    projectId: "react-notes-app-e03fd",
    storageBucket: "react-notes-app-e03fd.appspot.com",
    messagingSenderId: "658991793747",
    appId: "1:658991793747:web:795adc9e72cbae339468a6",
})

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInwithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}