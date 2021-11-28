import React, { FC } from 'react'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview'
// static data
import SHOP_DATA from '../shop/data/shopData'

const ShopPage: FC = () => {
  const collections = SHOP_DATA

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
