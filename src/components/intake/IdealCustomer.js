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

export default function IdealCustomer() {
  // handle form values
  const { values, updateValue } = useForm({
    // Ideal Visitor
    idealcustomer: '',
  })
  return (
    <Services>
      <label htmlFor="idealcustomer">
        What is your ideal visitor looking for from your product or service?
      </label>
      <textarea
        name="idealcustomer"
        id="idealcustomer"
        type="text"
        value={values.idealcustomer}
        onChange={updateValue}
        rows="7"
        placeholder="What does your customer want from your products or services? (e.g. relief to have comfortable shoes that last)"
      />
    </Services>
  )
}
