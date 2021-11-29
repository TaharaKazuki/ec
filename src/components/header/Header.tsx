import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './style/header.scss'
import firebase from '../../firebase/firebaseUtils'

interface IHeaderProps {
  currentUser: firebase.User | null
}

const Header: FC<IHeaderProps> = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
