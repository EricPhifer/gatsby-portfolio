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

export default function NPStakes() {
  // handle form values
  const { values, updateValue } = useForm({
    // Stakes
    npstakes: '',
  })
  return (
    <Services>
      <label htmlFor="npstakes">
        What are the negative consequences of people not supporting your cause?
        (e.g. human trafficking)
      </label>
      <textarea
        name="npstakes"
        id="npstakes"
        type="text"
        value={values.npstakes}
        onChange={updateValue}
        rows="7"
        placeholder="This will help build urgency and has two parts: the external consequence (e.g. trafficking will increase) and the internal consequence (guilt that you could have helped). What is at stake?"
      />
    </Services>
  )
}
