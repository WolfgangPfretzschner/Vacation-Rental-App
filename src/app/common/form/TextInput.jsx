import React from 'react'
import { Form, Label } from 'semantic-ui-react'

const TextInput = ({input, width, type, placeholder, meta: {touched, error, active}}) => {
  return (
    <Form.Field error={touched || active && !!error} width={width}>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <Label basic color='orange' >{error}</Label>}
    </Form.Field>
  )
}

export default TextInput
