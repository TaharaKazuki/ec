import React, { FC } from 'react'
import './style/collectionItem.scss'
import CustomButton from '../customButton/CustomButton'
// redux
import { addCartItem } from '../../features/cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'

interface ICollectionItemProps {
  name: string
  price: number
  imageUrl: string
}

const CollectionItem: FC<ICollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => dispatch(addCartItem([{ name, price, imageUrl }]))}
        inverted
      >
        Add Cart
      </CustomButton>
    </div>
  )
}

export default CollectionItem
