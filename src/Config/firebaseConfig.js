// v9 compact pacckages
import firebase from 'firebase/compact/app'
import  'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4lDZbW_RAjfQS8VafnzeEqZLJ1Apdf8g",
    authDomain: "react-crud-app-54012.firebaseapp.com",
    projectId: "react-crud-app-54012",
    storageBucket: "react-crud-app-54012.appspot.com",
    messagingSenderId: "797634182492",
    appId: "1:797634182492:web:c8b87ee86a805db8af5599",
    measurementId: "G-HW2NE0ZS7R"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp