import React, { FC } from 'react'
import './style/homepage.scss'
import Directory from '../../components/directory/Directory'

const HomePage: FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage
