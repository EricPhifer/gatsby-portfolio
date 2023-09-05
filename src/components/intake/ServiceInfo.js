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

export default function ServiceInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Sevice Info
    serviceinfo: '',
  })
  return (
    <Services>
      <label htmlFor="serviceinfo">Describe your product or service. </label>
      <textarea
        name="serviceinfo"
        id="serviceinfo"
        type="text"
        value={values.serviceinfo}
        onChange={updateValue}
        rows="7"
        placeholder="Give a short description of the product or service that you offer. If you have many products (e.g. retail) then describe the type of products and unique experience you offer."
      />
    </Services>
  )
}
