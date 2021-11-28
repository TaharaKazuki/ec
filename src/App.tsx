import React, { FC } from 'react'
//router
import { Switch, Route } from 'react-router-dom'
//component
import HomePage from './pages/homepage/HomePage'
import './App.scss'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const App: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
