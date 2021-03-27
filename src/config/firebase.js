import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  // apiKey: "AIzaSyAr2XCjmN8_8-8lKKDZB6EIneNKo1XO3M4",
  // authDomain: "chat-app-26cf8.firebaseapp.com",
  // projectId: "chat-app-26cf8",
  // storageBucket: "chat-app-26cf8.appspot.com",
  // messagingSenderId: "1091269151681",
  // appId: "1:1091269151681:web:07211629995ff68396bd40"
  apiKey: "AIzaSyCj30rbF6POBByDWBEHXZo0ThZAa5aBvEo",
  authDomain: "chatapp47-team.firebaseapp.com",
  projectId: "chatapp47-team",
  storageBucket: "chatapp47-team.appspot.com",
  messagingSenderId: "94612085430",
  appId: "1:94612085430:web:ced8813bd60083fb5a2417"
}


firebase.initializeApp(firebaseConfig)

export default firebase
