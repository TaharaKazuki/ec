import React, { FC } from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

interface ICollectionPreviewProps {
  title: string
  items: {
    id: string
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
