import React, { FC, DetailedHTMLProps } from 'react'
import './style/customButton.scss'

interface ICustomButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isGoogleSignIn?: boolean
  inverted?: boolean
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
