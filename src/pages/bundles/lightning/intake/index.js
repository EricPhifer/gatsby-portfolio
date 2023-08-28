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
    margin-bottom: 1rem;
  }
  input {
    font-size: 3rem;
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
  .submit {
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
  width: 50rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
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
  p {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`

const BasicInfo = styled.fieldset``
const DomainInfo = styled.fieldset``
const TaglineInfo = styled.fieldset``
const ServiceInfo = styled.fieldset``
const SubmissionPage = styled.fieldset`
  width: 100%;
  height: 100%;
  display: flex;
  .submit {
    width: 23rem;
    height: 5rem;
    margin: 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`

export default function IntakeForm() {
  // handle form values
  const { values, updateValue } = useForm({
    name: '',
    message: '',
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
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={values.name}
            onChange={updateValue}
            placeholder="Name"
            required
          />
          <label htmlFor="name">Message</label>
          <textarea
            name="message"
            id="message"
            type="text"
            value={values.message}
            onChange={updateValue}
            placeholder="Message"
            required
          />
        </BasicInfo>
      ),
    },
    { content: <DomainInfo /> },
    { content: <TaglineInfo /> },
    { content: <ServiceInfo /> },
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
              name="intake-form"
              method="post"
              encType="multipart/form-data"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="intake-form" />
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
