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

export default function Awards() {
  // handle form values
  const { values, updateValue } = useForm({
    // Awards
    awards: '',
  })
  return (
    <Services>
      <label htmlFor="awards">
        List an relevant accomplishments that show your authority in your
        market.
      </label>
      <textarea
        name="awards"
        id="awards"
        type="text"
        value={values.awards}
        onChange={updateValue}
        rows="7"
        placeholder="Awards, years serving the community, etc."
      />
    </Services>
  )
}
