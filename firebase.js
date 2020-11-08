import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9KWcwUnWBjAifuwyVlzE7MNs0HshDdSA",
    authDomain: "delivery-system-app-25438.firebaseapp.com",
    databaseURL: "https://delivery-system-app-25438.firebaseio.com",
    projectId: "delivery-system-app-25438",
    storageBucket: "delivery-system-app-25438.appspot.com",
    messagingSenderId: "1023418572005",
    appId: "1:1023418572005:web:2a94798fcea431a3cbc80c",
    measurementId: "G-FK2KQNSXZ6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth  = firebase.auth();

  export { db, auth };