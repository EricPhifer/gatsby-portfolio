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

export default function SimpleProcess() {
  // handle form values
  const { values, updateValue } = useForm({
    // Steps (Plan)
    simpleprocess: '',
  })
  return (
    <Services>
      <label htmlFor="simpleprocess">
        What is your simple process for solving these problems?
      </label>
      <textarea
        name="simpleprocess"
        id="simpleprocess"
        type="text"
        value={values.simpleprocess}
        onChange={updateValue}
        rows="7"
        placeholder="List 3 or 4 steps for how your visitors can obtain a successful outcome using your product or service."
      />
    </Services>
  )
}
