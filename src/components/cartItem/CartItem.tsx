import React, { FC } from 'react'
import './style/cartItem.scss'

interface ICartItemProps {
  item: {
    name: string
    imageUrl: string
    price: number
    quantity?: number
  }
}

const CartItem: FC<ICartItemProps> = ({
  item: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
