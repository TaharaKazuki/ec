import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAQm6NVk5PcNWEQOB9PvOcmD3y17voTejM',
  authDomain: 'react-ec-6e800.firebaseapp.com',
  projectId: 'react-ec-6e800',
  storageBucket: 'react-ec-6e800.appspot.com',
  messagingSenderId: '994697266075',
  appId: '1:994697266075:web:e8dad0f202f03a2607173e',
  measurementId: 'G-2EFN6FVMTV',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const sigInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
