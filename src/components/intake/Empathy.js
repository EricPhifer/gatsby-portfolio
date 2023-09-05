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

export default function Empathy() {
  // handle form values
  const { values, updateValue } = useForm({
    // Empathy
    empathy: '',
  })
  return (
    <Services>
      <label htmlFor="empathy">
        Describe how you can relate to the problem your customers have.
      </label>
      <textarea
        name="empathy"
        id="empathy"
        type="text"
        value={values.empathy}
        onChange={updateValue}
        rows="7"
        placeholder="Empathy is one of the strongest draws for your customers to trust your business."
      />
    </Services>
  )
}
