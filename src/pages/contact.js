import React from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm.js';
import useContact from '../utils/useContact';
import dangerousimg from '../assets/images/dangerousimg.png';
import Seo from '../components/Seo';
import NavTop from '../components/NavTop.js';
import ContactForm from '../components/ContactForm.js';

const ContactStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: azure;
`;

// const DangerousContactStyles = styled.div`
//   /* Show compressed menu on small screens */
//   @media only screen and (min-height: 625px) {
//     display: none;
//   }
//   @media only screen and (orientation: portrait) {
//     display: none;
//   }
//   position: fixed;
//   z-index: 100;
//   width: 100vw;
//   height: 100vh;
//   background-image: url(${dangerousimg});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-attachment: fixed;
//   @media only screen and (max-width: 750px) {
//     background-size: cover;
//   }
// `;

// const DangerousFormStyles = styled.div`
//   /* Don't Show on small screens */
//   @media only screen and (min-height: 650px) {
//     display: none;
//   }
//   @media only screen and (orientation: portrait) {
//     display: none;
//   }
//   z-index: 2;
//   .dangerousformContainer {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(auto, 1fr));
//     max-width: 65%;
//     position: absolute;
//     bottom: 5%;
//     left: 15%;
//     @media only screen and (min-height: 400px) {
//       bottom: 10%;
//     }
//     @media only screen and (min-height: 500px) {
//       bottom: 15%;
//     }
//     @media only screen and (min-height: 600px) {
//       bottom: 20%;
//     }
//   }
//   legend {
//     display: none;
//   }
//   fieldset {
//     border: none;
//   }
//   label {
//     display: none; 
//   }
//   input {
//     width: 100%;
//     text-align: center;
//     &:active {
//       border: 2px solid var(--blue);
//     }
//   }
//   textarea {
//     width: 100%;
//     text-align: center;
//     &:active {
//       border: 2px solid var(--blue);
//     }
//   }
//   .required::placeholder, .tomato {
//     color: tomato;
//   }
//   .hide {
//     display: none;
//   }
//   .dangeroussubmitButton {
//     width: 103%;
//     height: 58px;
//     display: block;
//     padding: 0;
//     background: var(--white);
//     color: var(--black);
//     font-size: 1.5rem;
//     &:hover {
//       background: var(--black);
//       color: var(--white);
//     }
//   }
// `;


export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" />
      <NavTop />
      <ContactStyles>
        <ContactForm />
      </ContactStyles>
      
      {/* <DangerousContactStyles>
        <DangerousFormStyles>
          <form
            className="dangerouscontainer"
            id="dangerousformContainer"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="dangerous-contact"
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
      </DangerousContactStyles> */}

    </>
  );
}
