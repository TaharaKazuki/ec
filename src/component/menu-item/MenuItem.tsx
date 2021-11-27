import React, { FC } from 'react'
import './style/menuItem.scss'

interface IMenuItemProps {
  key: number
  title: string
  imageUrl: string
  size?: string
}

const MenuItem: FC<IMenuItemProps> = ({ key, title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
