import React, { useState, useEffect, FC } from 'react'
//router
import { Switch, Route } from 'react-router-dom'
// page component
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInSignUpPage from './pages/signin_signup/SignInSignUpPage'
// common component
import Header from './components/header/Header'
// auth
import firebase, {
  auth,
  createUserProfileDocument,
} from './firebase/firebaseUtils'
// style
import './App.scss'

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user)
      setCurrentUser(user)
      return () => {
        unsubscribeFromAuth()
      }
    })
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
