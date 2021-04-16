import firebase from 'firebase'


const firebaseConfig = {
       apiKey: "AIzaSyBFW83XroC4V_v8t2fjyrChf8UzZymW0L4",
       authDomain: "rb16day.firebaseapp.com",
       projectId: "rb16day",
       storageBucket: "rb16day.appspot.com",
       messagingSenderId: "704633849354",
       appId: "1:704633849354:web:ef648235f70952021441f3",
       measurementId: "G-89BJCQBHSN"
}
   
   
   
const firebaseApp = firebase.initializeApp(firebaseConfig)
   
export const database = firebaseApp.firestore();