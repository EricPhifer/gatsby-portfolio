import React, { useState } from 'react'
import styled from 'styled-components'
// Icons
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
// Form Utities
import useForm from '../../../../utils/useForm'
import useContact from '../../../../utils/useContact'
// Logo Image
import lightninglogo from '../../../../assets/images/lightning-icon.png'

// Form Global Styling
const EntireForm = styled.div`
  // set values for the form
  --intake-background: #535353;
  --intake-foreground: #ebebeb;

  // set full screen
  width: 100vw;
  height: 100dvh;
  overflow-y: hidden;
  background-color: var(--intake-background);

  // set positioning of children
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  // typography
  font-family: Arbotek;
  font-size: 2.35rem;
  color: var(--intake-foreground);
  scrollbar-color: var(--intake-foreground) !important;

  // form global styles
  label,
  legend,
  input,
  textarea {
    margin: 0;
    padding: 0;
    color: var(--intake-foreground);
    margin-bottom: 1.5rem;
  }
  fieldset {
    padding: 0;
  }
  input {
    font-size: 2.35rem;
    border: none;
    border-bottom: 0.4rem solid var(--intake-foreground);
  }
  textarea {
    padding: 0 1rem;
    border: none;
    border-top: 0.4rem solid var(--intake-foreground);
    border-right: 0.2rem solid var(--intake-foreground);
    border-bottom: 0.4rem solid var(--intake-foreground);
    border-left: 0.2rem solid var(--intake-foreground);
    font-size: 3rem;
  }

  // change styling of checkboxes
  label.checkbox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    padding-right: 3.5rem;
    font-size: 2rem;
    color: var(--intake-foreground);
    text-align: right;
    transition: all 0.2s ease-in-out;
    &:hover input ~ .checkmark {
      background-color: var(--intake-background);
    }
    & input:checked ~ .checkmark {
      background-color: var(--intake-foreground);
      border-radius: 0.5rem;
    }
    & input:checked ~ .checkmark:after {
      display: block;
    }
    & .checkmark:after {
      width: 0.5rem;
      height: 0.5rem;
      color: var(--intake-background);
      font-weight: bolder;
      bottom: 1.7rem;
      left: 0.5rem;
    }
  }
  input[type='checkbox'] {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    border: 1rem solid var(--intake-foreground);
    background-color: transparent;
    cursor: pointer;
    &:focus {
      outline: max(0.2rem, 0.1rem) solid var(--intake-foreground);
      outline-offset: max(0.2rem, 0.1rem);
    }
  }

  // change styling of radios
  label.radio {
    display: flex;
    align-items: center;
  }
  input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--intake-background);
    cursor: pointer;
    font: inherit;
    color: var(--intake-foreground);
    width: 2.5rem;
    height: 2.5rem;
    border: 0.2rem solid var(--intake-foreground);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    margin-left: 1rem;
    &::after {
      content: '√';
      color: var(--intake-background);
      background-color: var(--intake-foreground);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      text-align: center;
      display: none;
    }
    &:checked::after {
      display: block;
    }
    &:focus {
      outline: max(0.2rem, 0.1rem) solid var(--intake-foreground);
      outline-offset: max(0.2rem, 0.1rem);
    }
  }
`

const Border = styled.div`
  width: 96%;
  height: 96%;
  border: 0.1rem solid var(--intake-foreground);
  border-radius: 1rem;
`

// Centered Logo
const LogoContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
`

const LightningLogo = styled.div`
  width: 5rem;
  height: 12rem;
  content: url(${lightninglogo});
  margin-top: 2rem;
`

// Form Body Grid
const FlexContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.div`
  max-width: 60rem;
  height: 94%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  .full {
    width: 90%;
    input {
      width: auto;
    }
  }
  .hidden {
    display: none;
  }
`

// Progress Indicator
const ProgressContainer = styled.div`
  width: 5rem;
  height: 60dvh;
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 3%;
`

const FullBar = styled.div`
  width: 2rem;
  height: 100%;
  background-color: var(--intake-foreground);
  border-radius: 5rem;
  position: absolute;
  right: 0;
  display: flex;
  align-items: end;
  justify-content: center;
`

const ProgressBar = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 5rem;
  margin: 0.5rem 0;
  background-color: var(--intake-background);
`

const ProgressIndicator = styled.p`
  color: var(--intake-foreground);
  justify-self: end;
  align-self: end;
`

// Form Pagination
const PaginationLeft = styled.label`
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: end;
  cursor: pointer;
  svg {
    font-size: 5rem;
    color: var(--intake-foreground);
  }
`

const PaginationRight = styled.label`
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: end;
  cursor: pointer;
  svg {
    font-size: 5rem;
    color: var(--intake-foreground);
  }
`

const Form = styled.form`
  max-width: 100vw;
  width: 60rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  input {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    width: 27rem;
  }
`

// Slider
const Slider = styled.fieldset`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 0;
`

const InnerSlider = styled.fieldset`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  padding: 0;
  .slide {
    flex: 0 0 100%;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      opacity: 1;
      pointer-events: auto;
      position: relative;
    }
  }
`

const NodeParser = styled.fieldset``

// Form Pages
const WelcomePage = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`

const BasicInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    padding-bottom: 1rem;
  }
  label input[type='checkbox'] {
    margin-left: 1rem;
  }
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
  border: 0.2rem solid var(--intake-foreground);
  border-radius: 0.5rem;
  &:after {
    content: '√';
    position: absolute;
    display: none;
  }
`

const DomainInfo = styled.fieldset`
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
`

const Note = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
`

const SideBySide = styled.fieldset`
  width: 95%;
  display: inline-flex;
  justify-content: end;
  .pad-left {
    padding-left: 1rem;
  }
`

const TaglineInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  label {
    align-self: start;
  }
  p {
    margin-bottom: 2rem;
  }
  input {
    margin-top: 2rem;
  }
`

const ServiceInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  label {
    align-self: start;
  }
  textarea {
    width: 94%;
    margin-top: 2rem;
    font-size: 2.35rem;
  }
`

const BusinessType = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
  label.radio {
    width: 100%;
    height: 8rem;
    border: 0.5rem solid var(--intake-foreground);
    border-radius: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  input[type='radio'] {
    opacity: 0;
    width: 90%;
    height: 86%;
    position: absolute;
    z-index: 150;
  }
  input[type='radio']:checked + label.radio {
    background-color: var(--intake-foreground);
    color: var(--intake-background);
  }
`

const RadioContainer = styled.fieldset`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`

const SubmissionPage = styled.fieldset`
  width: 100%;
  height: 100%;
  display: flex;
  .submit {
    width: 23rem;
    height: 5rem;
    margin: 0;
    position: absolute;
    right: -2rem;
    bottom: 0;
    background-color: transparent;
    color: var(--intake-foreground);
    box-shadow: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    transition: all 0.1s ease-in-out;
    svg {
      font-size: 5rem;
    }
    &:hover {
      border: none;
      color: var(--white);
      text-shadow: 0.1rem 0.1rem 7rem var(--white);
    }
  }
`

export default function NonprofitIntakeWithDonations() {
  // handle form values
  const { values, updateValue } = useForm({
    // Basic Info
    name: '',
    businessname: '',
    email: '',
    websiteemail: '',
    phone: '',
    address: '',
    map: '',
    // Domain Info
    domainname: '',
    emailprovider: '',
    emailproviderno: '',
    emailprovideryes: '',
    // Tagline Info
    tagline: '',
    // Sevice Info
    serviceinfo: '',
    // Business Type
    microbusiness: '',
    nonprofit: '',
    paymentsyes: '',
    donationsyes: '',
    // Next
  })
  // Unique Pages for Form
  const slides = [
    {
      content: (
        <WelcomePage>
          <p>Hooray! You are about to stand out in the crowd. </p>
          <p>
            No answers are required; however, the more information we have the
            better we can build a website that’s right for you.
          </p>
          <p>
            Please provide as much information as possible. Insufficient
            information may result in a declined application.{' '}
          </p>
        </WelcomePage>
      ),
    },
    {
      content: (
        <BasicInfo>
          <p>Let's get some basics out of the way first:</p>
          <label className="hidden" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={values.name}
            onChange={updateValue}
            placeholder="Name"
          />
          <label className="hidden" htmlFor="businessname">
            Business Name
          </label>
          <input
            name="businessname"
            id="businessname"
            type="text"
            value={values.businessname}
            onChange={updateValue}
            placeholder="Business Name"
          />
          <label className="hidden" htmlFor="email">
            Contact Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            value={values.email}
            onChange={updateValue}
            placeholder="Email for me to contact you (if different)"
          />
          <label className="hidden" htmlFor="websiteemail">
            Website Email
          </label>
          <input
            name="websiteemail"
            id="websiteemail"
            type="text"
            value={values.websiteemail}
            onChange={updateValue}
            placeholder="Email for customers to contact you"
          />
          <label className="hidden" htmlFor="phone">
            Phone Number
          </label>
          <input
            name="phone"
            id="phone"
            type="text"
            value={values.phone}
            onChange={updateValue}
            placeholder="Phone Number (for website use, optional)"
          />
          <label className="hidden" htmlFor="address">
            Address
          </label>
          <input
            name="address"
            id="address"
            type="text"
            value={values.address}
            onChange={updateValue}
            placeholder="Address (for website use, optional)"
          />
          <label className="full checkbox" htmlFor="map">
            Add a map to this address
            <input
              name="map"
              id="map"
              type="checkbox"
              value={values.map}
              onChange={updateValue}
            />
            <Checkmark className="checkmark" />
          </label>
        </BasicInfo>
      ),
    },
    {
      content: (
        <DomainInfo>
          <label htmlFor="domainname">
            Tell us about your domain (e.g. domainname.com):
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
            <label className="radio" htmlFor="emailprovideryes">
              Yes
              <input
                name="radio-toggle"
                id="emailprovideryes"
                type="radio"
                value={values.emailprovideryes}
                onChange={updateValue}
              />
            </label>
            <label className="radio pad-left" htmlFor="emailproviderno">
              No
              <input
                name="radio-toggle"
                id="emailproviderno"
                type="radio"
                value={values.emailproviderno}
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
        </DomainInfo>
      ),
    },
    {
      content: (
        <TaglineInfo>
          <p className="question">
            Now we'll get some helpful information about who you are, who your
            customers are and how you help them.
          </p>
          <label htmlFor="tagline">
            What is your business motto or tagline?
          </label>
          <input
            name="tagline"
            id="tagline"
            type="text"
            value={values.tagline}
            onChange={updateValue}
            placeholder="Motto / Tagline"
          />
        </TaglineInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="serviceinfo">
            Describe your product or service.{' '}
          </label>
          <textarea
            name="serviceinfo"
            id="serviceinfo"
            type="text"
            value={values.serviceinfo}
            onChange={updateValue}
            rows="7"
            placeholder="Give a short description of the product or service that you offer. If you have many produycts (e.g. retail) then describe the type of products and unique experience you offer."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <BusinessType>
          <p>Are you a small business or non-profit?</p>
          <RadioContainer>
            <input
              name="businesstype"
              id="microbusiness"
              type="radio"
              value={values.microbusiness}
              onChange={updateValue}
            />
            <label className="radio" htmlFor="microbusiness">
              We're a small or micro business
            </label>
          </RadioContainer>
          <label className="full checkbox" htmlFor="paymentsyes">
            We need a payment option for 5 or less products or services
            <input
              name="paymentsyes"
              id="paymentsyes"
              type="checkbox"
              value={values.paymentsyes}
              onChange={updateValue}
            />
            <Checkmark className="checkmark" />
          </label>
          <RadioContainer>
            <input
              name="businesstype"
              id="nonprofit"
              type="radio"
              value={values.nonprofit}
              onChange={updateValue}
            />
            <label className="radio" htmlFor="nonprofit">
              We're a 501(c)(3) non-profit
            </label>
          </RadioContainer>
          <label className="full checkbox" htmlFor="donationsyes">
            We need a donation option set up
            <input
              name="donationsyes"
              id="donationsyes"
              type="checkbox"
              value={values.donationsyes}
              onChange={updateValue}
            />
            <Checkmark className="checkmark" />
          </label>
        </BusinessType>
      ),
    },
    {
      content: (
        <SubmissionPage>
          <button type="submit" className="submit">
            Submit <PiCaretRightBold />
          </button>
        </SubmissionPage>
      ),
    },
  ]

  // Carousel handling
  const totalSlides = slides.length
  const [activeSlide, setActiveSlide] = useState(0)

  const showPrevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    }
  }
  const showNextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      setActiveSlide(activeSlide + 1)
    }
  }

  // handle form errors
  const { errMessage } = useContact({
    values,
  })
  if (errMessage) {
    return <p>{errMessage}</p>
  }

  return (
    <EntireForm>
      <Border>
        <LogoContainer>
          <LightningLogo />
        </LogoContainer>
        <FlexContainer>
          <FormContainer>
            <PaginationLeft
              htmlFor={`slide${
                activeSlide === 0 ? totalSlides : activeSlide
              }-content`}
              className={`prev ${activeSlide === 0 ? 'hidden' : ''}`}
              onClick={showPrevSlide}
            >
              <PiCaretLeftBold />
            </PaginationLeft>
            <Form
              name="intake-nonprofit-with-donations"
              method="post"
              encType="multipart/form-data"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input
                type="hidden"
                name="form-name"
                value="intake-nonprofit-with-donations"
              />
              <Slider>
                <InnerSlider>
                  {slides.map((slide, i) => (
                    <NodeParser
                      key={i}
                      className={`slide ${activeSlide === i ? 'active' : ''}`}
                      id={`slide${i + 1}-content`}
                    >
                      {slide.content}
                    </NodeParser>
                  ))}
                </InnerSlider>
              </Slider>
            </Form>
            <PaginationRight
              htmlFor={`slide${
                activeSlide === totalSlides - 1 ? 1 : activeSlide + 2
              }-content`}
              className={`next ${
                activeSlide === totalSlides - 1 ? 'hidden' : ''
              }`}
              onClick={showNextSlide}
            >
              <PiCaretRightBold />
            </PaginationRight>
          </FormContainer>
          <ProgressContainer>
            <ProgressIndicator>0%</ProgressIndicator>
            <FullBar>
              <ProgressBar />
            </FullBar>
          </ProgressContainer>
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
