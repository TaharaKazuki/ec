import React, { FC, DetailedHTMLProps } from 'react'
import './style/customButton.scss'

const CustomButton: FC<
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
