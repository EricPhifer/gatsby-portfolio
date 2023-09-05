import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Services = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  label {
    align-self: start;
  }
  textarea {
    width: 94%;
    margin-top: 2rem;
    font-size: 2.35rem;
  }
`

export default function Resolution() {
  // handle form values
  const { values, updateValue } = useForm({
    // Success
    resolution: '',
  })
  return (
    <Services>
      <label htmlFor="resolution">
        How does your product or service bring relief to the negative
        consequences?
      </label>
      <textarea
        name="resolution"
        id="resolution"
        type="text"
        value={values.resolution}
        onChange={updateValue}
        rows="7"
        placeholder="What are the positive changes your customer will experience by obtaining your product/service?"
      />
    </Services>
  )
}
