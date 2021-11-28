import React, { FC } from 'react'
import './style/customButton.scss'

interface ICustomButton {
  type: string
}

const CustomButton: FC<ICustomButton> = ({ children, ...otherProps }) => {
  return (
    <div className="custom-button" {...otherProps}>
      {children}
    </div>
  )
}

export default CustomButton
