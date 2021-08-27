 import firebase from "firebase/app";
import "firebase/firestore"

firebase.initializeApp ({
  apiKey: "AIzaSyB1UqggDgfdUw2Twu0SRIsxTsS_SyWYaTM",
  authDomain: "ecommerce-f7d70.firebaseapp.com",
  projectId: "ecommerce-f7d70",
  storageBucket: "ecommerce-f7d70.appspot.com",
  messagingSenderId: "340508342952",
  appId: "1:340508342952:web:aab4473327180124c1609d"
});

const db = firebase.firestore()
export{
  firebase,
  db,
}