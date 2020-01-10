import firebase from 'firebase'
import 'firebase/auth'

let app = null

const firebaseConfig = {
  apiKey: 'AIzaSyAMFI7bKeSb4l4iOXF2s2n932J58Fm7Bdw',
  authDomain: 'oaxacaos-44980.firebaseapp.com',
  databaseURL: 'https://oaxacaos-44980.firebaseio.com',
  projectId: 'oaxacaos-44980',
  storageBucket: 'oaxacaos-44980.appspot.com',
  messagingSenderId: '310567683397',
  appId: '1:310567683397:web:c0fbc87aedc27270962a2c'
}

app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()

export const auth = firebase.auth()
