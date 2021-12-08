import React, { FC } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
// redux
import { toggleCartDisplay } from '../../features/cart/cartSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
// style
import './style/cartIcon.scss'

const CartIcon: FC = () => {
  const itemCount = useAppSelector((state) => {
    return state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity!,
      0
    )
  })

  const dispatch = useAppDispatch()

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartDisplay())}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
