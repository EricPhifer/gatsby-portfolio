import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Tagline = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  label {
    align-self: start;
  }
  p {
    margin-bottom: 2rem;
  }
  input {
    margin-top: 2rem;
  }
`

export default function TaglineInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Tagline Info
    tagline: '',
  })
  return (
    <Tagline>
      <p className="question">
        Now we'll get some helpful information about who you are, who your
        customers are and how you help them.
      </p>
      <label htmlFor="tagline">What is your business motto or tagline?</label>
      <input
        name="tagline"
        id="tagline"
        type="text"
        value={values.tagline}
        onChange={updateValue}
        placeholder="Motto / Tagline"
      />
    </Tagline>
  )
}
