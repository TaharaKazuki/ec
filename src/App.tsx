import React, { FC } from 'react'
//router
import { Switch, Route } from 'react-router-dom'
// page component
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
// style
import './App.scss'

const App: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
