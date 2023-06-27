import React from 'react'
import styled from 'styled-components'
import useForm from '../utils/useForm.js'
import useContact from '../utils/useContact'
import dangerousimg from '../assets/images/dangerousimg.png'
import Seo from '../components/Seo'
import NavTop from '../components/NavTop.js'
import ContactForm from '../components/ContactForm.js'
import SocialMedia from '../components/SocialMedia.js'

const ContactStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: azure;
  margin-top: 8rem;
`

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" />
      <NavTop />
      <ContactStyles>
        <ContactForm />
      </ContactStyles>
      <SocialMedia />
    </>
  )
}
