import * as firebase from "firebase"

import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCMa_g4AbrfyNl6FZcsCdO6XcPSJFWpPBQ",
  authDomain: "chatapplication-d8381.firebaseapp.com",
  projectId: "chatapplication-d8381",
  storageBucket: "chatapplication-d8381.appspot.com",
  messagingSenderId: "309841098265",
  appId: "1:309841098265:web:0b6f211d76766e19d09c88",
  measurementId: "G-XXS00CF1M8"
};

let app

if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig)
}else{ 
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth()
export {db , auth}