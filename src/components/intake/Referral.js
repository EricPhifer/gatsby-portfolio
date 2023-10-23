import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Referrals = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media only screen and (max-height: 525px) {
    label {
      margin-bottom: 0 !important;
    }
  }
`

const Question = styled.p`
  margin: 1rem 0;
`

export default function Referral() {
  // handle form values
  const { values, updateValue } = useForm({
    // Domain Info
    referralname: '',
  })
  return (
    <Referrals>
      <Question>Were you referred by someone or a nonprofit?</Question>
      <label htmlFor="referralname">Did anyone refer you to the bundle?</label>
      <input
        name="referralname"
        id="referralname"
        type="text"
        value={values.referralname}
        onChange={updateValue}
        placeholder="Name of nonprofit or person that referred you"
      />
    </Referrals>
  )
}
