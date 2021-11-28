import React, { FC } from 'react'
//router
import { Switch, Route } from 'react-router-dom'
// page component
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInSignUpPage from './pages/signin_signup/SignInSignUpPage'
// common component
import Header from './components/header/Header'
// style
import './App.scss'

const App: FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
