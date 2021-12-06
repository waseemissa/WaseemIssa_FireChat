import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDdpNGm-Z1fWvd1UZhhsXUX58-MbE7VqI",
    authDomain: "fir-chat-eaae3.firebaseapp.com",
    projectId: "fir-chat-eaae3",
    storageBucket: "fir-chat-eaae3.appspot.com",
    messagingSenderId: "119782918399",
    appId: "1:119782918399:web:1b3805c4e889d0341764ca",
    measurementId: "G-51CLJ89K0Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db, auth};
