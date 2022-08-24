import React from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm.js';
import useContact from '../utils/useContact';
import contactbg from '../assets/images/contactbg.png';
import dangerousimg from '../assets/images/dangerousimg.png';

import Seo from '../components/Seo';

const ContactStyles = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  background-image: url(${contactbg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
  @media only screen and (min-width: 1400px) {
    background-position: center center;
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletContactStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  width: 100%;
  height: 100vh;
  background-image: url(${contactbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
  @media only screen and (max-width: 750px) {
    background-size: cover;
  }
`;

const DangerousContactStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-height: 625px) {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    display: none;
  }
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-image: url(${dangerousimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  @media only screen and (max-width: 750px) {
    background-size: cover;
  }
`;

const MobileContactStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  width: 100%;
  height: 100vh;
  background-image: url(${contactbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
`;

const FormStyles = styled.div`
  position: absolute;
  left: 30vmin;
  top: 20vmin;
  z-index: 2;
  .formContainer {
    display: inline-flex;
    justify-content: center;
  }
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
  }
  fieldset {
    border: none;
  }
  label {
    display: none; 
  }
  .inputContainer {
    max-width: 300px;
  }
  input {
    width: 100%;
    margin: 5px 0;
    padding: 20px 0 20px;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .areaContainer {
    max-width: 350px;
  }
  textarea {
    width: 285px;
    height: 73%;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    padding: 8rem 2rem 0;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  input[type="radio"] {
    min-width: 15px;
  }
  button {
    width: 100%;
  }
  .submitButton {
    width: 100%;
    margin: 1.5rem auto;
    background: var(--red);
    color: var(--mint);
    font-size: 3rem;
    border-radius: 5px 100px;
    &:hover {
      background: var(--mint);
      color: var(--red);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletFormStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  position: absolute;
  left: 30vmin;
  top: 20vmin;
  @media only screen and (max-width: 980px) {
    left: 20vmin;
  }
  z-index: 2;
  .formContainer {
    display: inline-flex;
    justify-content: center;
  }
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
  }
  fieldset {
    border: none;
  }
  label {
    display: none; 
  }
  .inputContainer {
    max-width: 300px;
  }
  input {
    width: 100%;
    margin: 5px 0;
    padding: 20px 0 20px;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .areaContainer {
    max-width: 350px;
  }
  textarea {
    width: 285px;
    height: 73%;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    padding: 8rem 2rem 0;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  input[type="radio"] {
    min-width: 15px;
  }
  button {
    width: 100%;
  }
  .submitButton {
    width: 100%;
    margin: 1.5rem auto;
    background: var(--red);
    color: var(--mint);
    font-size: 3rem;
    border-radius: 5px 100px;
    &:hover {
      background: var(--mint);
      color: var(--red);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (max-width: 900px) {
    left: 10vmin;
    form {
      margin: 2rem;
    }
  }
  @media only screen and (max-width: 750px) {
    top: 10vmin;
    left: 25vmin;
    .formContainer {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
    .submitButton {
      margin: 2.5rem auto;
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    left: 15vmin;
  }
  @media only screen and (max-height: 800px) and (max-width: 750px) {
    top: 2vmin;
    left: 20%;
    form {
      margin: 0;
    }
    fieldset {
      padding: 2px 10px;
    }
    input {
      margin: 2px 0;
    }
  }
`;
const DangerousFormStyles = styled.div`
  /* Don't Show on small screens */
  @media only screen and (min-height: 650px) {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    display: none;
  }
  z-index: 2;
  .dangerousformContainer {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    max-width: 65%;
    position: absolute;
    bottom: 5%;
    left: 15%;
    @media only screen and (min-height: 400px) {
      bottom: 10%;
    }
    @media only screen and (min-height: 500px) {
      bottom: 15%;
    }
    @media only screen and (min-height: 600px) {
      bottom: 20%;
    }
  }
  legend {
    display: none;
  }
  fieldset {
    border: none;
  }
  label {
    display: none; 
  }
  input {
    width: 100%;
    text-align: center;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  textarea {
    width: 100%;
    text-align: center;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  .dangeroussubmitButton {
    width: 103%;
    height: 58px;
    display: block;
    padding: 0;
    background: var(--white);
    color: var(--black);
    font-size: 1.5rem;
    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;

const MobileFormStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  position: absolute;
  left: 15vmin;
  top: 10vmin;
  z-index: 2;
  .formContainer {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  legend {
    color: var(--white);
    font-size: 2rem;
    margin: 0 auto;
  }
  form {
    margin: 2rem;
  }
  fieldset {
    border: none;
    @media only screen and (max-width: 360px) {
      padding: 0;
    }
  }
  label {
    display: none; 
  }
  .inputContainer {
    max-width: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  input {
    width: 250px;
    margin: 5px 0;
    padding: 20px 0 20px;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .areaContainer {
    max-width: 350px;
      @media only screen and (max-width: 360px) {
      padding-bottom: 1rem;
    }
  }
  textarea {
    width: 215px;
    height: 73%;
    border-radius: 5px 100px;
    text-align: center;
    background-color: var(--mint);
    padding: 8rem 2rem 0;
    &:active {
      border: 2px solid var(--blue);
    }
  }
  .required::placeholder, .tomato {
    color: tomato;
  }
  .hide {
    display: none;
  }
  input[type="radio"] {
    min-width: 15px;
  }
  button {
    width: 100%;
  }
  .submitButton {
    width: 250px;
    margin: 2.5rem auto;
    background: var(--red);
    color: var(--mint);
    font-size: 2rem;
    border-radius: 5px 100px;
    &:hover {
      background: var(--mint);
      color: var(--red);
    }
  }
  p {
    position: absolute;
    bottom: 0;
    right: 2rem;
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (max-width: 360px) {
    left: 2vmin;
  }
  @media only screen and (max-width: 400px) {
    left: 10vmin;
  }
  @media only screen and (max-height: 800px) {
    top: 2vmin;
    left: 15vmin;
    form {
      margin: 0;
    }
    fieldset {
      padding: 2px 10px;
    }
    input {
      margin: 2px 0;
    }
    @media only screen and (max-width: 340px) {
      left: 10vmin;
    }
  }
`;

export default function Contact() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
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
      <Seo title="Contact Us" />
        <ContactStyles>
          <FormStyles>
            <form
              className="container"
              id="formContainer"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <legend>Questions? Comments? Let's Talk.</legend>
              <fieldset className='formContainer'>
                <fieldset className='inputContainer'>
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    placeholder="Name"
                    className='required'
                    />
                  <label htmlFor="email" className="emailLabel">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    className='required'
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Website
                  </label>
                  <input
                    type="website"
                    name="website"
                    id="website"
                    value={values.website}
                    onChange={updateValue}
                    placeholder="Website"
                    />
                  <label htmlFor="message" className="messageLabel">
                    Message
                  </label>
                </fieldset>
                <fieldset className='areaContainer'>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="7"
                    placeholder="What can I answer for you?"
                    />
                </fieldset>
              </fieldset>
                <button type="submit" className="submitButton" value="Submit">
                  Send Message
                </button>
            </form>
          </FormStyles>
        </ContactStyles>
        <TabletContactStyles>
          <TabletFormStyles>
            <form
              className="container"
              id="formContainer"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <legend>Questions? Comments? Let's Talk.</legend>
              <fieldset className='formContainer'>
                <fieldset className='inputContainer'>
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    placeholder="Name"
                    className='required'
                    />
                  <label htmlFor="email" className="emailLabel">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    className='required'
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Website
                  </label>
                  <input
                    type="website"
                    name="website"
                    id="website"
                    value={values.website}
                    onChange={updateValue}
                    placeholder="Website"
                    />
                  <label htmlFor="message" className="messageLabel">
                    Message
                  </label>
                </fieldset>
                <fieldset className='areaContainer'>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="7"
                    placeholder="What can I answer for you?"
                    />
                </fieldset>
              </fieldset>
                <button type="submit" className="submitButton" value="Submit">
                  Send Message
                </button>
            </form>
          </TabletFormStyles>
        </TabletContactStyles>
        <DangerousContactStyles>
          <DangerousFormStyles>
            <form
              className="dangerouscontainer"
              id="dangerousformContainer"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <legend>It's Dangerous to go alone. Send a message.</legend>
              <fieldset className='dangerousformContainer'>
                <fieldset className='dangerousRowOne'>
                  <label htmlFor="dangerousname" className="dangerousnameLabel">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    placeholder="Name"
                    className='required'
                    />
                  <label htmlFor="email" className="dangerousemailLabel">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    className='required'
                    />
                </fieldset>
                <fieldset className='dangerousRowTwo'>
                  <label htmlFor="phone" className="dangerousphoneLabel">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    />
                  <label htmlFor="phone" className="dangerousphoneLabel">
                    Website
                  </label>
                  <input
                    type="website"
                    name="website"
                    id="website"
                    value={values.website}
                    onChange={updateValue}
                    placeholder="Website"
                    />
                  <label htmlFor="message" className="dangerousmessageLabel">
                    Message
                  </label>
                </fieldset>
                <fieldset className='areaContainer'>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="3"
                    placeholder="What can I answer for you?"
                    />
                </fieldset>
               <fieldset>
                  <button type="submit" className="dangeroussubmitButton" value="Submit">
                  Send Message
                </button>
               </fieldset>
              </fieldset>
            </form>
          </DangerousFormStyles>
        </DangerousContactStyles>
        <MobileContactStyles>
          <MobileFormStyles>
            <form
              className="container"
              id="formContainer"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <legend>Questions? <br />Comments?<br /> Let's Talk.</legend>
              <fieldset className='formContainer'>
                <fieldset className='inputContainer'>
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={updateValue}
                    placeholder="Name"
                    className='required'
                    />
                  <label htmlFor="email" className="emailLabel">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    className='required'
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    />
                  <label htmlFor="phone" className="phoneLabel">
                    Website
                  </label>
                  <input
                    type="website"
                    name="website"
                    id="website"
                    value={values.website}
                    onChange={updateValue}
                    placeholder="Website"
                    />
                  <label htmlFor="message" className="messageLabel">
                    Message
                  </label>
                </fieldset>
                <fieldset className='areaContainer'>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="7"
                    placeholder="What can I answer for you?"
                    />
                </fieldset>
              </fieldset>
              <button type="submit" className="submitButton" value="Submit">
                Send Message
              </button>
            </form>
        </MobileFormStyles>
      </MobileContactStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     contacts:  allSanityContact {
//       nodes {
//         phone
//         socialmedia
//         title
//         streetaddress
//         content
//         cityaddress
//         id
//       }
//     }
//   }
// `;
