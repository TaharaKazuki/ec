import React, { FC, ChangeEvent } from 'react'
import './style/formInput.scss'

interface IFormInputProps {
  label: string
  name: string
  type: string
  value: string
  required: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput: FC<IFormInputProps> = ({
  handleChange,
  label,
  value,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
