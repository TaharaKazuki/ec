import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAQm6NVk5PcNWEQOB9PvOcmD3y17voTejM',
  authDomain: 'react-ec-6e800.firebaseapp.com',
  projectId: 'react-ec-6e800',
  storageBucket: 'react-ec-6e800.appspot.com',
  messagingSenderId: '994697266075',
  appId: '1:994697266075:web:e1597c1315bc9e4407173e',
  measurementId: 'G-G7P6V30YYQ',
}

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.info('error creating user', error)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const sigInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
