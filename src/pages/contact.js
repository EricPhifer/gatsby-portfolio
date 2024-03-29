import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm.js'
import SocialMedia from '../components/SocialMedia.js'
import NavTop from '../components/NavTop'

const ContactStyles = styled.div`
  width: 100vw;
  min-height: 100dvh;
  background-color: azure;
  margin-top: 8rem;
`

export default function Contact() {
  return (
    <>
      <NavTop />
      <Seo title="Contact Us" />
      <ContactStyles>
        <ContactForm />
      </ContactStyles>
      <SocialMedia />
    </>
  )
}
