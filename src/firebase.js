import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCr5AR4pIwo1TRQA40kuc6d_Ga7WIoS2X0",
    authDomain: "epla-app.firebaseapp.com",
    databaseURL: "https://epla-app.firebaseio.com",
    projectId: "epla-app",
    storageBucket: "epla-app.appspot.com",
    messagingSenderId: "527639241418"
}

const firebaseApp = firebase.initializeApp(config)
export const database = firebaseApp.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
