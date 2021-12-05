import React from 'react'
import CustomButton from '../customButton/CustomButton'
import './style/cartDropdown.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
