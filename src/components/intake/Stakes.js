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

export default function Stakes() {
  // handle form values
  const { values, updateValue } = useForm({
    // Stakes
    stakes: '',
  })
  return (
    <Services>
      <label htmlFor="stakes">
        What are the negative consequences of not getting your product or
        service? (e.g. if you sell shoes...)
      </label>
      <textarea
        name="stakes"
        id="stakes"
        type="text"
        value={values.stakes}
        onChange={updateValue}
        rows="7"
        placeholder="This will help build urgency and has two parts: the external consequence (e.g. pains in feet) and the internal consequence (anxiety over the long-term effects of wearing bad shoes). In other words, what is at stake?"
      />
    </Services>
  )
}
