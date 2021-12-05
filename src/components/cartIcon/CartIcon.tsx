import React, { FC } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
// redux
import { toggleCartDisplay } from '../../features/cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'

const CartIcon: FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="cart-icon">
      <ShopingIcon
        className="shopping-icon"
        onClick={() => dispatch(toggleCartDisplay())}
      />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon
