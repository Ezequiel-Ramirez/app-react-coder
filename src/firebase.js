import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq2HDtdrE7oaTwRzhQjxHvnZYLACsUaug",
    authDomain: "proyecto-tienda-react.firebaseapp.com",
    projectId: "proyecto-tienda-react",
    storageBucket: "proyecto-tienda-react.appspot.com",
    messagingSenderId: "593029415909",
    appId: "1:593029415909:web:bd36cf0be1312af208650c"
  };

 const app =  firebase.initializeApp(firebaseConfig);
 export const firestore = firebase.firestore(app)