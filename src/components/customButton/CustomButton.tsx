import React, { FC, DetailedHTMLProps } from 'react'
import './style/customButton.scss'

interface ICustomButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isGoogleSignIn?: boolean
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
