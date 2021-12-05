import React, { useEffect, FC } from 'react'
//router
import { Switch, Route, Redirect } from 'react-router-dom'
// page component
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInSignUpPage from './pages/signin_signup/SignInSignUpPage'
// common component
import Header from './components/header/Header'
// auth
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
// reudx
import { setCurrentUser } from './features/user/userSlice'
import { useAppSelector, useAppDispatch } from './app/hooks'
// style
import './App.scss'

const App: FC = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const displayParam = useAppSelector((state) => state.cart.displayParam)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef?.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              currentUser: { id: snapShot.id, ...snapShot.data() },
            })
          )
        })
      }
      dispatch(setCurrentUser({ currentUser: null }))
      return () => {
        unsubscribeFromAuth()
      }
    })
  }, [dispatch])

  return (
    <div>
      <Header currentUser={currentUser} displayParam={displayParam} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
