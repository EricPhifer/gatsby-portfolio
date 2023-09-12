import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

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
  position: relative;
  display: flex;
  justify-content: center;
  input[type='radio'] {
    width: 100% !important;
    margin: 0 !important;
    position: absolute !important;
  }

  @media only screen and (max-width: 350px) {
    label.pmtradio {
      height: 6rem;
    }
  }
  @media only screen and (max-width: 500px) {
    label.pmtradio {
      font-size: 1.5rem !important;
    }
  }
  @media only screen and (max-height: 525px) {
    label.pmtradio {
      height: 5rem;
    }
  }
`

export default function StripeSetup() {
  // handle form values
  const { _values, updateValue } = useForm({
    // Stripe Setup
    stripeoption: '',
  })
  return (
    <PaymentType>
      <p>
        There will be a separate form through Stripe to set up your EIN, Account
        Number, etc. I will provide instructions for this process. Are you
        comfortable filling out this form on your own or will you need help?
      </p>
      <RadioContainer>
        <input
          name="stripeoption"
          id="selfsetup"
          type="radio"
          value="I won't need help"
          onChange={updateValue}
        />
        <label className="pmtradio" htmlFor="selfsetup">
          I won't need help
        </label>
      </RadioContainer>
      <RadioContainer>
        <input
          name="stripeoption"
          id="setmeeting"
          type="radio"
          value="I could use help with this"
          onChange={updateValue}
        />
        <label className="pmtradio" htmlFor="setmeeting">
          I could use help with this
        </label>
      </RadioContainer>
    </PaymentType>
  )
}
