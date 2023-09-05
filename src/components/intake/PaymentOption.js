import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Note = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`

const PaymentType = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
  label.pmtradio {
    width: 100%;
    height: 8rem;
    border: 0.5rem solid var(--intake-foreground);
    border-radius: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input[type='radio'] {
    opacity: 0;
    width: 90%;
    height: 86%;
    position: absolute;
    z-index: 150;
    &:checked + label.pmtradio {
      background-color: var(--intake-foreground);
      color: var(--intake-background);
    }
  }
`

const RadioContainer = styled.fieldset`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`

export default function PaymentOption() {
  // handle form values
  const { _values, updateValue } = useForm({
    // Miscellaneous Documents
    pmttype: '',
  })
  return (
    <PaymentType>
      <p>How would you prefer to pay?</p>
      <RadioContainer>
        <input
          name="pmttype"
          id="onetimepmt"
          type="radio"
          value="One-Time Payment of $3,497"
          onChange={updateValue}
        />
        <label className="pmtradio" htmlFor="onetimepmt">
          One-Time Payment of $3,497
        </label>
      </RadioContainer>
      <RadioContainer>
        <input
          name="pmttype"
          id="subscriptionpmt"
          type="radio"
          value="$697/month for 6 mo."
          onChange={updateValue}
        />
        <label className="pmtradio" htmlFor="subscriptionpmt">
          $697/month for 6 mo.
        </label>
      </RadioContainer>
      <Note>
        This covers the first year of all technical maintenance. Maintenance
        renews for $750/year and will chage 12 months after the launch of your
        website.
      </Note>
    </PaymentType>
  )
}
