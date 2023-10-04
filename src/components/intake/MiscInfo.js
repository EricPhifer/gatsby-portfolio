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

export default function MiscInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Miscellaneous Info
    miscinfo: '',
  })
  return (
    <Services>
      <label htmlFor="miscinfo">
        Is there any other information you want me to know?
      </label>
      <textarea
        name="miscinfo"
        id="miscinfo"
        type="text"
        value={values.miscinfo}
        onChange={updateValue}
        rows="7"
        placeholder="Add any additional information here you'd like me to know."
      />
    </Services>
  )
}
