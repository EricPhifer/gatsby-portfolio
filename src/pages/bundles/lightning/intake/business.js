import React, { useState } from 'react'
import styled from 'styled-components'

// Icons
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

// Form Utities
import useForm from '../../../../utils/useForm'
import useContact from '../../../../utils/useContact'

// Logo Image
import lightninglogo from '../../../../assets/images/lightning-icon.png'

// Slide Components
import IntakeTerms from '../../../../components/intake/TermsConditions'
import IntakeWelcome from '../../../../components/intake/IntakeWelcome'
import BasicInfo from '../../../../components/intake/BasicInfo'
import DomainInfo from '../../../../components/intake/DomainInfo'
import TaglineInfo from '../../../../components/intake/TaglineInfo'
import IdealCustomer from '../../../../components/intake/IdealCustomer'
import ServiceInfo from '../../../../components/intake/ServiceInfo'
import ProblemInfo from '../../../../components/intake/ProblemInfo'
import SolutionInfo from '../../../../components/intake/SolutionInfo'
import SimpleProcess from '../../../../components/intake/SimpleProcess'
import Stakes from '../../../../components/intake/Stakes'
import Resolution from '../../../../components/intake/Resolution'
import Empathy from '../../../../components/intake/Empathy'
import Awards from '../../../../components/intake/Awards'
import TestimonyInfo from '../../../../components/intake/TestimonyInfo'
import SocialInfo from '../../../../components/intake/SocialInfo'
import LogoInfo from '../../../../components/intake/LogoInfo'
import MiscInfo from '../../../../components/intake/MiscInfo'
import PaymentOption from '../../../../components/intake/PaymentOption'

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
  transition: all 0.2s ease-in-out;

  // apply hidden option
  .hidden {
    display: none;
  }

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
    width: 100%;
    padding: 0 1rem;
    border: none;
    border-top: 0.4rem solid var(--intake-foreground);
    border-right: 0.2rem solid var(--intake-foreground);
    border-bottom: 0.4rem solid var(--intake-foreground);
    border-left: 0.2rem solid var(--intake-foreground);
    font-size: 2.5rem;
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
  @media only screen and (max-width: 815px) {
    height: 20%;
  }
  @media only screen and (max-height: 700px) {
    width: 15%;
    position: absolute;
  }
  @media only screen and (min-height: 525px) and (max-height: 700px) and (max-width: 350px) {
    width: 25%;
  }
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
  @media only screen and (max-width: 815px) {
    height: 80%;
  }
  @media only screen and (max-height: 700px) {
    height: 100%;
  }
`

const FormContainer = styled.div`
  max-width: 60rem;
  width: 86%;
  height: 94%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: end;
  z-index: 10;
  .full {
    width: 90%;
    input {
      width: auto;
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 350px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-height: 525px) {
    width: 70%;
    margin-left: 2%;
    font-size: 1.5rem;
  }
  @media only screen and (min-height: 525px) and (max-height: 700px) and (max-width: 835px) {
    margin-top: 15rem;
  }
`

// Progress Indicator
const ProgressContainer = styled.div`
  width: 8rem;
  height: 60dvh;
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 3%;
  @media only screen and (max-height: 700px) {
    height: 85dvh;
  }
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
  height: ${({ percentage }) => percentage}%;
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
const Pagination = styled.fieldset`
  width: 26rem;
  margin-right: -13rem;
  position: absolute;
  bottom: 0;
  right: 50%;
  display: inline-flex;
  justify-content: space-around;
  z-index: 5;
  @media only screen and (max-width: 350px) {
    right: 64%;
  }
  @media only screen and (max-height: 790px) {
    width: 10rem;
    margin-right: 0;
    right: 0;
    left: 0;
  }
  @media only screen and (min-height: 525px) and (max-height: 700px) and (max-width: 350px) {
    left: -3rem;
  }
`

const PaginationLeft = styled.label`
  width: 5rem;
  height: 5rem;
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
  height: 5rem;
  display: flex;
  align-items: end;
  cursor: pointer;
  svg {
    font-size: 5rem;
    color: var(--intake-foreground);
  }
`

const Form = styled.form`
  max-width: 100%;
  width: 60rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  input {
    width: 100%;
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
`

const NodeParser = styled.fieldset`
  height: calc(100% - 6.5rem);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.25s;
  &.active {
    opacity: 1;
    pointer-events: auto;
    position: relative;
    padding-right: 1.6rem;
  }
  @media only screen and (max-width: 570px) {
    input,
    textarea {
      font-size: 2rem;
    }
    label.checkbox,
    p {
      font-size: 1.75rem;
    }
    button.submit {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 475px) {
    input,
    textarea {
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 350px) {
    margin-left: 0.2rem;
    label.checkbox,
    p {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-height: 700px) {
    height: 100%;
  }
  @media only screen and (max-height: 700px) and (max-width: 350px) {
    input,
    textarea {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-height: 525px) {
    input,
    textarea {
      font-size: 1.5rem;
    }
    textarea {
      max-height: 18rem;
    }
    label.checkbox,
    p {
      font-size: 1.75rem;
    }
  }
`

// Form Pages
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

const SubmissionPage = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
  .termsagreement {
    margin-top: 2rem;
  }
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
    opacity: 1;
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
  .submit[disabled] {
    opacity: 0.5;
    &:hover {
      text-shadow: none;
      color: var(--intake-foreground);
    }
  }
  @media only screen and (max-height: 790px) {
    .submit {
      right: 2rem;
      bottom: 1.7rem;
    }
  }
  @media only screen and (max-height: 525px) {
    p {
      margin-bottom: 0.75rem;
    }
    .termsagreement {
      margin-top: 0.75rem;
    }
  }
`

const ScrollableTerms = styled.div`
  width: 100%;
  height: 25rem;
  padding: 0 1rem;
  border: none;
  border-top: 0.4rem solid var(--intake-foreground);
  border-right: 0.2rem solid var(--intake-foreground);
  border-bottom: 0.4rem solid var(--intake-foreground);
  border-left: 0.2rem solid var(--intake-foreground);
  font-size: 2.5rem;
  overflow-y: auto;
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 475px) {
    width: 98%;
    font-size: 1.25rem;
  }
  @media only screen and (max-height: 750px) {
    max-height: 20rem;
  }
  @media only screen and (max-height: 525px) {
    max-height: 12rem;
  }
`

export default function BusinessIntake() {
  // set the agreement terms checkbox
  const [termsAgreed, setTermsAgreed] = useState(false)

  // handle form values
  const { values, updateValue } = useForm({
    // Agreement to Terms
    termsagreement: '',
  })

  // Unique Pages for Form
  const slides = [
    {
      content: <IntakeWelcome />,
    },
    {
      content: <BasicInfo />,
    },
    {
      content: <DomainInfo />,
    },
    {
      content: <TaglineInfo />,
    },
    {
      content: <ServiceInfo />,
    },
    {
      content: <IdealCustomer />,
    },
    {
      content: <ProblemInfo />,
    },
    {
      content: <SolutionInfo />,
    },
    {
      content: <SimpleProcess />,
    },
    {
      content: <Stakes />,
    },
    {
      content: <Resolution />,
    },
    {
      content: <Empathy />,
    },
    {
      content: <Awards />,
    },
    {
      content: <TestimonyInfo />,
    },
    {
      content: <SocialInfo />,
    },
    {
      content: <LogoInfo />,
    },
    {
      content: <MiscInfo />,
    },
    {
      content: <PaymentOption />,
    },
    {
      content: (
        <SubmissionPage>
          <p>
            Congratulations, you've done great work! All that's left is the
            terms and agreement and we will contact you after it's been
            reviewed!
          </p>
          <ScrollableTerms>
            <IntakeTerms />
          </ScrollableTerms>
          <label className="full checkbox termsagreement">
            <input
              name="termsagreement"
              id="termsagreement"
              type="checkbox"
              value="Yes, I agree"
              onChange={e => {
                updateValue(e)
                setTermsAgreed(e.target.checked)
              }}
            />
            I Agree to the Terms
            <Checkmark className="checkmark" />
          </label>
          <button type="submit" className="submit" disabled={!termsAgreed}>
            Submit <PiCaretRightBold />
          </button>
        </SubmissionPage>
      ),
    },
  ]

  // Slider Handling
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

  // Progress Bar Percentage
  const progressPercentage = ((activeSlide + 1) / totalSlides) * 100

  // Form Errors
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
            <Pagination className="pagination">
              <PaginationLeft
                htmlFor={`slide${
                  activeSlide === 0 ? totalSlides : activeSlide
                }-content`}
                className={`prev ${activeSlide === 0 ? 'hidden' : ''}`}
                onClick={showPrevSlide}
              >
                <PiCaretLeftBold />
              </PaginationLeft>
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
            </Pagination>
          </FormContainer>
          <ProgressContainer>
            <ProgressIndicator>
              {Math.round(progressPercentage)}%
            </ProgressIndicator>
            <FullBar>
              <ProgressBar percentage={progressPercentage - 2} />
            </FullBar>
          </ProgressContainer>
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
