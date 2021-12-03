import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './style/header.scss'
import { auth } from '../../firebase/firebaseUtils'
import { ICurrentUser } from '../../App'

import { useAppDispatch } from '../../app/hooks'
import { setCurrentUser } from '../../features/user/userSlice'

interface IHeaderProps {
  currentUser: ICurrentUser | null
}

const Header: FC<IHeaderProps> = ({ currentUser }) => {
  const dispatch = useAppDispatch()

  const signOut = () => {
    auth.signOut()
    dispatch(
      setCurrentUser({
        currentUser: null,
      })
    )
  }
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
        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
