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

export default function NPResolution() {
  // handle form values
  const { values, updateValue } = useForm({
    // Success
    npresolution: '',
  })
  return (
    <Services>
      <label htmlFor="npresolution">
        How does your mission bring relief to the negative consequences?
      </label>
      <textarea
        name="npresolution"
        id="npresolution"
        type="text"
        value={values.npresolution}
        onChange={updateValue}
        rows="7"
        placeholder="What are the positive changes your community will experience by donating to your cause?"
      />
    </Services>
  )
}
