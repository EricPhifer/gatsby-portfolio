import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Domains = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  .question {
    margin: 1rem 0;
  }
  .notezero {
    margin-bottom: 0;
    margin-top: 2rem;
  }
  @media only screen and (max-height: 525px) {
    label {
      margin-bottom: 0 !important;
    }
  }
`

const SideBySide = styled.fieldset`
  width: 95%;
  display: inline-flex;
  justify-content: end;
  .pad-left {
    padding-left: 1rem;
  }
`

const Note = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`

export default function DomainInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Domain Info
    domainname: '',
    emailprovider: '',
    emailsetup: '',
  })
  return (
    <Domains>
      <label htmlFor="domainname">
        What is your domain (e.g. domainname.com):
      </label>
      <input
        name="domainname"
        id="domainname"
        type="text"
        value={values.domainname}
        onChange={updateValue}
        className="notezero"
        placeholder="Domain name that you currently own"
      />
      <Note>
        If you don't have one, no worries. We will help you choose one.
      </Note>
      <p className="question">
        Do you have email set up with your domain? (e.g bob@domainname.com)
      </p>
      <SideBySide>
        <label className="radio">
          Yes
          <input
            name="emailsetup"
            id="emailprovideryes"
            type="radio"
            value="Yes"
            onChange={updateValue}
          />
        </label>
        <label className="radio pad-left">
          No
          <input
            name="emailsetup"
            id="emailproviderno"
            type="radio"
            value="No"
            onChange={updateValue}
          />
        </label>
      </SideBySide>
      <label className="hidden" htmlFor="emailprovider">
        Email Provider
      </label>
      <input
        name="emailprovider"
        id="emailprovider"
        type="text"
        value={values.emailprovider}
        onChange={updateValue}
        className="notezero"
        placeholder="If yes, who manages your email?"
      />
      <Note>
        If you're not sure, just type 'not sure'. We will find out for you.
      </Note>
    </Domains>
  )
}
