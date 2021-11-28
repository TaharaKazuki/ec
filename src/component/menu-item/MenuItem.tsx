import React, { FC } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './style/menuItem.scss'

interface IMenuItemProps extends RouteComponentProps {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

const MenuItem: FC<IMenuItemProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem)
