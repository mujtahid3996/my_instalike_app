import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCXQ4qRzkAJVBeCdl_YrflJAT136LKaWfQ",
    authDomain: "mujtahids-instagram.firebaseapp.com",
    projectId: "mujtahids-instagram",
    storageBucket: "mujtahids-instagram.appspot.com",
    messagingSenderId: "82746441324",
    appId: "1:82746441324:web:95fcdae008d53b0fdf2249"
  }; 
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const projectStorage =   firebase.storage()
   const projectFirestore = firebase.firestore()
   const timeStamp =firebase.firestore.FieldValue.serverTimestamp


   export { projectFirestore, projectStorage, timeStamp }