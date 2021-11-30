import React, { useState, ChangeEvent, FormEvent } from 'react'

import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'

import './style/signup.scss'

const SignUp = () => {
  const [displayName, setDisplayName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setComfirmPassword] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })

      setDisplayName('')
      setEmail('')
      setPassword('')
      setComfirmPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'displayName') {
      setDisplayName(value)
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'password') {
      setPassword(value)
    }

    if (name === 'confirmPassword') {
      setComfirmPassword(value)
    }
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
