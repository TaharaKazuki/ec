import React, { FC } from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import './style/collectionPreview.scss'

interface ICollectionPreviewProps {
  title: string
  items: {
    id: number
    name: string
    imageUrl: string
    price: number
  }[]
}

const collectionPreview: FC<ICollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  )
}

export default collectionPreview
