import firebase from 'firebase'


const firebaseConfig = {
       apiKey: "AIzaSyBW-EqAM7D2xIXMQgnCFhZMxRjiuE5dmDI",
       authDomain: "bazla2016.firebaseapp.com",
       projectId: "bazla2016",
       storageBucket: "bazla2016.appspot.com",
       messagingSenderId: "383386703261",
       appId: "1:383386703261:web:401cab8c439f48f0df4b74",
       measurementId: "G-1L5X6B6YNS"
}
   
   
   
const firebaseApp = firebase.initializeApp(firebaseConfig)
   
export const database = firebaseApp.firestore();