import React from 'react'
import styled from 'styled-components'
import useForm from '../../../utils/useForm'
import useContact from '../../../utils/useContact'

const Form = styled.form`
  max-width: 100vw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  labal,
  input,
  button {
    width: 20rem;
    height: 2rem;
  }
  button {
    background-color: var(--blue);
    color: var(--white);
  }
`

export default function IntakeForm() {
  // handle form values
  const { values, updateValue } = useForm({
    name: '',
  })
  // handle form errors
  const { errMessage } = useContact({
    values,
  })
  if (errMessage) {
    return <p>{errMessage}</p>
  }
  return (
    <Form
      name="intake-form"
      method="post"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="intake-form" />
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        value={values.name}
        onChange={updateValue}
        placeholder="Name"
        required
      />
      <button type="submit">Submit</button>
    </Form>
  )
}
