import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAQm6NVk5PcNWEQOB9PvOcmD3y17voTejM',
  authDomain: 'react-ec-6e800.firebaseapp.com',
  projectId: 'react-ec-6e800',
  storageBucket: 'react-ec-6e800.appspot.com',
  messagingSenderId: '994697266075',
  appId: '1:994697266075:web:e1597c1315bc9e4407173e',
  measurementId: 'G-G7P6V30YYQ',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const sigInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
