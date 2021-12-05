import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// component
import CartIcon from '../cartIcon/CartIcon'
import CartDropdown from '../cartDropdown/CartDropdown'
import { ReactComponent as Logo } from '../../assets/crown.svg'
// style
import './style/header.scss'
// firebase util
import { auth } from '../../firebase/firebaseUtils'

// interface
import { ICurrentUser } from '../../typed/userTyped'
// redux
import { useAppDispatch } from '../../app/hooks'
import { setCurrentUser } from '../../features/user/userSlice'

interface IHeaderProps {
  currentUser: ICurrentUser | null
  displayParam: boolean
}

const Header: FC<IHeaderProps> = ({ currentUser, displayParam }) => {
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
        <CartIcon />
      </div>
      {displayParam ? null : <CartDropdown />}
    </div>
  )
}

export default Header
