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
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
// reudx
import { Provider } from 'react-redux'
// style
import './App.scss'

export interface ICurrentUser {
  id: string
  createdAt?: { secontd: number; nonosecondes: number }
  displayName?: string
  email?: string
}

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.info('通過')
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      }
      setCurrentUser(null)
      return () => {
        unsubscribeFromAuth()
      }
    })
  }, [])

  return (
    // <Provider store={store}>
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
    // </Provider>
  )
}

export default App
