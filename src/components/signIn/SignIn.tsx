import React, { useState, FC, FormEvent, ChangeEvent } from 'react'

import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { auth, sigInWithGoogle } from '../../firebase/firebaseUtils'

import './style/signIn.scss'

const SignIn: FC = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const { email, password } = state

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState({ email: '', password: '' })
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit">
            Sign in
          </CustomButton>
          <CustomButton isGoogleSignIn onClick={sigInWithGoogle}>
            Sign in Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
