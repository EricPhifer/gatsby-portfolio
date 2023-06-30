import React from 'react'
import styled from 'styled-components'
import useForm from '../utils/useForm'
import useContact from '../utils/useContact'

const Form = styled.form`
  width: 80vw;
  position: absolute;
  left: 50%;
  margin-top: 8rem;
  margin-left: -40vw;
  transition: 0.5s all ease;
  label {
    display: none;
  }
  input,
  textarea {
    font-size: 1.75rem;
  }
  legend {
    width: 98%;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 900px) {
    width: 98vw;
    margin-left: -49vw;
    .buttons {
      flex-flow: column-reverse nowrap;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-left: -52vw;
    legend {
      font-size: 4rem;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }
  @media only screen and (max-height: 750px) {
    legend {
      font-size: 2rem;
    }
  }
`

const InlineField = styled.fieldset`
  width: 98%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-bottom: 2rem;
  input {
    width: 30%;
    padding: 1rem;
    margin: 0 0.5rem;
    border: none;
    border-bottom: 0.4rem inset var(--black);
    background: transparent;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
    input {
      width: 90%;
    }
  }
  @media only screen and (max-height: 750px) {
    top: 53%;
    margin-bottom: 1rem;
    input {
      font-size: 1.25rem;
    }
    a,
    button {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

const FullField = styled.fieldset`
  display: flex;
  justify-content: center;
  border: none;
  margin-bottom: 2rem;
  input {
    width: 58%;
    padding: 1rem;
    margin: 0 0.5rem;
    border: none;
    border-bottom: 0.4rem inset var(--black);
    background: transparent;
  }
  textarea {
    width: calc(53% - 2.5rem);
    margin-left: 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.4rem inset var(--black);
    border-right: 0.4rem inset var(--black);
    background: transparent;
  }
  @media only screen and (max-width: 900px) {
    textarea,
    input {
      width: 90%;
    }
  }
  @media only screen and (max-height: 750px) {
    margin-bottom: 1rem;
    input,
    textarea {
      font-size: 1.25rem;
    }
  }
`

const Submit = styled.button`
  width: 20rem;
  background: tomato;
  color: var(--white);
  border-radius: 1rem;
  font-size: 1.85rem;
  &:focus {
    border: 0.2rem dotted blue;
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`

const Buttonesque = styled.a`
  width: 20rem;
  background: var(--green);
  color: var(--white);
  border-radius: 1rem;
  font-size: 1.85rem;
  margin-right: 2rem;
  padding: 2rem 1.6rem;
  text-align: center;
  &:hover {
    background: transparent;
    border: 0.125rem solid var(--green);
    color: var(--green);
  }
  @media only screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`

export default function ContactForm() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    website: '',
    message: '',
  })
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  })
  console.log(contact, error, loading, submitContact)
  if (errMessage) {
    return <p>{errMessage}</p>
  }
  return (
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="standard-contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <legend>Contact Me</legend>
      <InlineField className="nameEmail">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={updateValue}
          placeholder="Name"
          className="required"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={values.email}
          onChange={updateValue}
          placeholder="Email"
          className="required"
        />
      </InlineField>
      <FullField className="website">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          id="website"
          value={values.website}
          onChange={updateValue}
          placeholder="Website Address"
          className="required"
        />
      </FullField>
      <FullField className="message">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={values.message}
          onChange={updateValue}
          rows="7"
          placeholder="What is your #1 need?"
          className="required"
        />
      </FullField>
      <InlineField className="buttons">
        <Buttonesque
          href="https://calendly.com/ericphifer/60-minute-website-consultation"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get a Consultation
        </Buttonesque>
        <Submit type="submit" value="Submit">
          Submit
        </Submit>
      </InlineField>
    </Form>
  )
}
