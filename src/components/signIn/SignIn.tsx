import React, { useState, FC, FormEvent, ChangeEvent } from 'react'

import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { sigInWithGoogle } from '../../firebase/firebaseUtils'

import './style/signIn.scss'

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
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
        <CustomButton type="submit" value="Submit">
          Sign in
        </CustomButton>
        <CustomButton onClick={sigInWithGoogle}>Sign in Google</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
