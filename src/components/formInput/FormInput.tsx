import React, { FC } from 'react'
import './style/formInput.scss'

interface IFormInputProps {
  label: string
  handleChange: () => void
  value: []
}

const FormInput: FC<IFormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
