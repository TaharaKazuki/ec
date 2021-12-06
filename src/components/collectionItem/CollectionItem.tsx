import React, { FC } from 'react'
import './style/collectionItem.scss'
import CustomButton from '../customButton/CustomButton'

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
    </div>
  )
}

export default CollectionItem
