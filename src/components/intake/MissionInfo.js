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

export default function MissionInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Ideal Visitor
    missioninfo: '',
  })
  return (
    <Services>
      <label htmlFor="missioninfo">
        What is the mission or vision of your organization?{' '}
      </label>
      <textarea
        name="missioninfo"
        id="missioninfo"
        type="text"
        value={values.missioninfo}
        onChange={updateValue}
        rows="7"
        placeholder="Who do you help and how do you help thme?"
      />
    </Services>
  )
}
