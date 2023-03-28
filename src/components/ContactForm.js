import React from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';

const Form = styled.form`
  width: 80vw;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -21rem;
  margin-left: -40vw;
  transition: .5s all ease;
  label {
    display: none;
  }
  input, textarea {
    font-size: 1.75rem;
  }
  legend {
    width: 98%;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

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
    border-bottom: .4rem inset var(--black);
    background: transparent;
  }
  @media screen only and (max-width: 500px) {
    input {
      width: 100%;
    }
  }
`;

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
    border-bottom: .4rem inset var(--black);
    background: transparent;
  }
  textarea {
    width: calc(53% - 2.5rem);
    margin-left: 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: .4rem inset var(--black);
    border-right: .4rem inset var(--black);
    background: transparent;
  }
`;

const Submit = styled.button`
  width: 20rem;
  background: tomato;
  color: var(--white);
  border-radius: 1rem;
  font-size: 1.85rem;
  &:focus {
    border: .2rem dotted blue;
  }
`;

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
    border: .125rem solid var(--green);
    color: var(--green);
  }
`;

export default function ContactForm() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  console.log(contact, error, loading, submitContact);
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <Form
        method='post'
        netlify-honeypot='bot-field'
        data-netlify='true'
        name='standard-contact'
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
            placeholder="What website do you need help with?"
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
            href="https://calendly.com/ericphifer/30-minute-website-consultation" rel="noopener noreferrer" 
            target="_blank"
          >
            Get a Consultation
          </Buttonesque>
          <Submit type="submit" value="Submit">
            Submit
          </Submit>
        </InlineField>
      </Form>
    </>
  );
}
