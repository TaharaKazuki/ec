import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signup/SignUp'

import './style/signInSignUp.scss'

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUpPage
