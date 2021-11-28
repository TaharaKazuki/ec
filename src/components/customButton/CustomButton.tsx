import React, { FC } from 'react'
import './style/customButton.scss'

const CustomButton: FC = ({ children, ...otherProps }) => {
  return (
    <div className="custom-button" {...otherProps}>
      {children}
    </div>
  )
}

export default CustomButton
