import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAr2XCjmN8_8-8lKKDZB6EIneNKo1XO3M4",
  authDomain: "chat-app-26cf8.firebaseapp.com",
  projectId: "chat-app-26cf8",
  storageBucket: "chat-app-26cf8.appspot.com",
  messagingSenderId: "1091269151681",
  appId: "1:1091269151681:web:07211629995ff68396bd40"
}


firebase.initializeApp(firebaseConfig)

export default firebase
