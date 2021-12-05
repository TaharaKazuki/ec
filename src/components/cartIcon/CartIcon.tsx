import React, { FC } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
// redux
import { toggleCartDisplay } from '../../features/cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'
// style
import './style/cartIcon.scss'

const CartIcon: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartDisplay())}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
