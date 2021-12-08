import React from 'react'
// component
import CartItem from '../cartItem/CartItem'
import CustomButton from '../customButton/CustomButton'

// redux
import { useAppSelector } from '../../app/hooks'
// style
import './style/cartDropdown.scss'

const CartDropdown = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
