import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAbzapJNifPawJmQMzXI6c9sk1lnChRelc",
    authDomain: "e-ride-9e52a.firebaseapp.com",
    projectId: "e-ride-9e52a",
    storageBucket: "e-ride-9e52a.appspot.com",
    messagingSenderId: "645544341603",
    appId: "1:645544341603:web:d632a3d255040228f14856"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


