import firebase  from "firebase/app"

const firebaseConfig = {
        apiKey: "AIzaSyDsBfeYnk_ApUlPETRGxy5OdSG7YcBfO9o",
        authDomain: "tenedores-59f7a.firebaseapp.com",
        databaseURL: "https://tenedores-59f7a.firebaseio.com",
        projectId: "tenedores-59f7a",
        storageBucket: "tenedores-59f7a.appspot.com",
        messagingSenderId: "682545631385",
        appId: "1:682545631385:web:3fe6fbc760ae61353a2808"
      };
      // Initialize Firebase
     export const firebaseApp = firebase.initializeApp(firebaseConfig);
