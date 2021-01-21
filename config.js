import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBTgl04s77LkexSq4SWSDc61YFVSMtIB_g",
    authDomain: "booksanta-1effc.firebaseapp.com",
    projectId: "booksanta-1effc",
    storageBucket: "booksanta-1effc.appspot.com",
    messagingSenderId: "436886255170",
    appId: "1:436886255170:web:0f16f785dcddcb32e71fdb",
    measurementId: "G-TPLXK394FW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();