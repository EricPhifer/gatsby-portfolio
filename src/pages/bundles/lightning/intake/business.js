import React, { useState } from 'react'
import styled from 'styled-components'
// Icons
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import {
  GrDocumentExcel,
  GrDocumentPdf,
  GrDocumentWord,
  GrDocument,
} from 'react-icons/gr'
// Form Utities
import useForm from '../../../../utils/useForm'
import useContact from '../../../../utils/useContact'
// Logo Image
import lightninglogo from '../../../../assets/images/lightning-icon.png'
// Terms Component
import IntakeTerms from '../../../../components/intake/TermsConditions'

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
  width: 8rem;
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
`

const NodeParser = styled.fieldset`
  overflow-y: auto;
  overflow-x: hidden;
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
`

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

const ProblemSolution = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
`

const TestimonyInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
  button {
    box-shadow: none;
    padding: 0;
    margin-bottom: 2rem;
    &:hover {
      border: none;
    }
  }
  .addBtn {
    margin-top: 2rem;
    &:hover {
      color: var(--green);
    }
  }
`

const SocialInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  .socialinfo {
    width: 90%;
  }
  p {
    margin-bottom: 2rem;
  }
  button {
    box-shadow: none;
    padding: 0;
    margin-bottom: 2rem;
    &:hover {
      border: none;
    }
  }
  .addBtn {
    margin-top: 2rem;
    &:hover {
      color: var(--green);
    }
  }
`

const LogoInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const DocInfo = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const ImageUpload = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--intake-foreground);
    opacity: 0.5;
    font-size: 5rem;
    border: 0.2rem dashed lightgray;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  input[type='file'] {
    display: none;
  }
`

const InlineImgs = styled.fieldset`
  display: inline-flex;
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const DisplayImg = styled.fieldset`
  display: inline-flex;
  flex-flow: row wrap;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    font-size: 5rem;
  }
  & path {
    stroke: var(--intake-foreground);
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

const PaymentType = styled.fieldset`
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
`

export default function BusinessIntake() {
  // handle image previews
  const [imagePreviews, setImagePreviews] = useState([[]])
  // handle logo previews
  const [logoPreviews, setLogoPreviews] = useState([])
  // handle doc previews
  const [docFiles, setDocFiles] = useState([])
  const [docPreviews, setDocPreviews] = useState([])
  // set the agreement terms checkbox
  const [termsAgreed, setTermsAgreed] = useState(false)
  // additional Testimonyfields
  const [testimonyFields, setTestimonyFields] = useState([
    {
      // Testimonies
      testimonyname: '',
      writtentestimony: '',
      testimonyimgs: '',
    },
  ])
  const [socialFields, setSocialFields] = useState([
    {
      // Social Media Addition
      anothersocial: '',
    },
  ])
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
    // Ideal Visitor
    idealcustomer: '',
    // Problem
    problemone: '',
    problemtwo: '',
    problemthree: '',
    // Solution
    solutionone: '',
    solutiontwo: '',
    solutionthree: '',
    // Steps (Plan)
    simpleprocess: '',
    // Stakes
    stakes: '',
    // Success
    resolution: '',
    // Empathy
    empathy: '',
    // Awards
    awards: '',
    // Logo & other images
    logoimgs: '',
    // Miscellaneous Info
    miscinfo: '',
    // Miscellaneous Documents
    miscdocs: '',
    // Miscellaneous Documents
    onetimepmt: '',
    subscriptionpmt: '',
    // Agreement to Terms
    termsagreement: '',
  })

  // sets up the previews for images uploaded
  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    setImagePreviews(prevPreviews => {
      const updatedPreviews = [...prevPreviews]
      updatedPreviews[index] = previews // Set the previews for the specified field group
      return updatedPreviews
    })
  }
  // sets up the previews for logos uploaded
  const handleLogoChange = e => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    // update logos
    setLogoPreviews(prevPreviews => [...prevPreviews, ...previews])
  }
  // sets up the previews for docs uploaded
  const handleDocChange = e => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    // Update docFiles with the new file objects
    setDocFiles(prevFiles => [...prevFiles, ...files])
    // Update docPreviews with the new previews
    setDocPreviews(prevPreviews => [...prevPreviews, ...previews])
  }
  const getIconForFile = (preview, file) => {
    const filename = file.name
    const extension = filename.split('.').pop().toLowerCase()
    switch (extension) {
      case 'pdf':
        return <GrDocumentPdf />
      case 'doc':
      case 'docx':
        return <GrDocumentWord />
      case 'xlsx':
      case 'xls':
        return <GrDocumentExcel />
      default:
        return <GrDocument />
    }
  }

  // Creating Dynamic Social Fields

  const addFields = () => {
    const newfield = { anothersocial: '' }

    setSocialFields([...socialFields, newfield])
  }
  const removeFields = index => {
    const data = [...socialFields]
    data.splice(index, 1)
    setSocialFields(data)
  }
  // Creating Dynamic Testimony Fields

  const addTestimonyFields = () => {
    const newfield = {
      testimonyname: '',
      writtentestimony: '',
      testimonyimgs: '',
    }

    setTestimonyFields([...testimonyFields, newfield])
  }
  const removeTestimonyFields = index => {
    const data = [...testimonyFields]
    data.splice(index, 1)
    setTestimonyFields(data)
  }
  // A function to update the values of dynamic fields
  const updateDynamicFieldValue = (fieldIndex, fieldName, value) => {
    setTestimonyFields(prevFields => {
      // Create a copy of the previous array
      const updatedFields = [...prevFields]

      // Check if fieldIndex is within valid range
      if (fieldIndex >= 0 && fieldIndex < updatedFields.length) {
        // Update the specified field in the copied array
        updatedFields[fieldIndex][fieldName] = value
      }

      return updatedFields
    })
  }

  // combine image and form handling
  const handleImageInputChange = (e, index) => {
    handleImageChange(e, index)

    // Update the corresponding dynamic field's name
    updateDynamicFieldValue(index, 'testimonyimgs', e.target.value)
  }

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
            placeholder="Give a short description of the product or service that you offer. If you have many products (e.g. retail) then describe the type of products and unique experience you offer."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="idealcustomer">
            What is your ideal visitor looking for from your product or service?
          </label>
          <textarea
            name="idealcustomer"
            id="idealcustomer"
            type="text"
            value={values.idealcustomer}
            onChange={updateValue}
            rows="7"
            placeholder="What does your customer want from your products or services? (e.g. relief to have comfortable shoes that last)"
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ProblemSolution>
          <p>List 1-3 problems you solve for your customers:</p>
          <label className="hidden" htmlFor="problemone">
            Problem 1
          </label>
          <textarea
            name="problemone"
            id="problemone"
            type="text"
            value={values.problemone}
            onChange={updateValue}
            rows="2"
            placeholder="Problem 1"
          />
          <label className="hidden" htmlFor="problemtwo">
            Problem 2
          </label>
          <textarea
            name="problemtwo"
            id="problemtwo"
            type="text"
            value={values.problemtwo}
            onChange={updateValue}
            rows="2"
            placeholder="Problem 2"
          />
          <label className="hidden" htmlFor="problemthree">
            Problem 3
          </label>
          <textarea
            name="problemthree"
            id="problemthree"
            type="text"
            value={values.problemthree}
            onChange={updateValue}
            rows="2"
            placeholder="Problem 3"
          />
        </ProblemSolution>
      ),
    },
    {
      content: (
        <ProblemSolution>
          <p>How do you solve these problems?</p>
          <label className="hidden" htmlFor="solutionone">
            Solution 1
          </label>
          <textarea
            name="solutionone"
            id="solutionone"
            type="text"
            value={values.solutionone}
            onChange={updateValue}
            rows="2"
            placeholder="Solution 1"
          />
          <label className="hidden" htmlFor="solutiontwo">
            Solution 2
          </label>
          <textarea
            name="solutiontwo"
            id="solutiontwo"
            type="text"
            value={values.solutiontwo}
            onChange={updateValue}
            rows="2"
            placeholder="Solution 2"
          />
          <label className="hidden" htmlFor="solutionthree">
            Solution 3
          </label>
          <textarea
            name="solutionthree"
            id="solutionthree"
            type="text"
            value={values.solutionthree}
            onChange={updateValue}
            rows="2"
            placeholder="Solution 3"
          />
        </ProblemSolution>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="simpleprocess">
            What is your simple process for solving these problems?
          </label>
          <textarea
            name="simpleprocess"
            id="simpleprocess"
            type="text"
            value={values.simpleprocess}
            onChange={updateValue}
            rows="7"
            placeholder="List 3 or 4 steps for how your visitors can obtaina successful outcome using your product or service."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="stakes">
            What are the negative consequences of not getting your product or
            service? (e.g. if you sell shoes...)
          </label>
          <textarea
            name="stakes"
            id="stakes"
            type="text"
            value={values.stakes}
            onChange={updateValue}
            rows="7"
            placeholder="This will help build urgency and has two parts: the external consequence (e.g. pains in feet) and the internal consequence (anxiety over the long-term effects of wearing bad shoes). In other words, what is at stake?"
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="resolution">
            How does your product or service bring relief to the negative
            consequences?
          </label>
          <textarea
            name="resolution"
            id="resolution"
            type="text"
            value={values.resolution}
            onChange={updateValue}
            rows="7"
            placeholder="What are the positive changes your customer will experience by obtaining your product/service?"
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="empathy">
            Describe how you can relate to the problem your customers have.
          </label>
          <textarea
            name="empathy"
            id="empathy"
            type="text"
            value={values.empathy}
            onChange={updateValue}
            rows="7"
            placeholder="Empathy is one of the strongest draws for your customers to trust your business."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="awards">
            List an relevant accomplishments that show your authority in your
            market.
          </label>
          <textarea
            name="awards"
            id="awards"
            type="text"
            value={values.awards}
            onChange={updateValue}
            rows="7"
            placeholder="Awards, years serving the community, etc."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <TestimonyInfo>
          <p>
            Provide any testimonies from your customers, clients or partners
          </p>
          {testimonyFields.map((testimony, index) => (
            <fieldset key={index} className="testimonyinfo">
              {console.log(index)}
              <label className="hidden" htmlFor={`testimonyname${index}`}>
                Name of Satisfied Customer
              </label>
              <input
                name={`testimonyname${index}`}
                id={`testimonyname${index}`}
                type="text"
                value={testimony.testimonyname}
                onChange={e =>
                  updateDynamicFieldValue(
                    index,
                    'testimonyname',
                    e.target.value
                  )
                }
                placeholder="Who is giving the testimony?"
              />
              <label className="hidden" htmlFor={`writtentestimony${index}`}>
                Written Testimony
              </label>
              <textarea
                name={`writtentestimony${index}`}
                id={`writtentestimony${index}`}
                type="text"
                value={testimony.writtentestimony}
                onChange={e =>
                  updateDynamicFieldValue(
                    index,
                    'writtentestimony',
                    e.target.value
                  )
                }
                rows="3"
                placeholder="Written testimony... (should reinforce the success your business has helped others gain with your service)"
              />
              <ImageUpload>
                Upload a Profile Image of the Customer:
                <InlineImgs>
                  <label
                    htmlFor={`testimonyimgs${index}`}
                    className="testimonyimgs"
                  >
                    +
                  </label>
                  <input
                    id={`testimonyimgs${index}`}
                    name={`testimonyimgs[${index}]`}
                    type="file"
                    accept="image/*"
                    onChange={e => handleImageInputChange(e, index)}
                    multiple
                  />
                  <DisplayImg>
                    {imagePreviews[index] &&
                      imagePreviews[index].map((preview, i) => (
                        <img
                          key={i}
                          src={preview}
                          alt={`Preview ${i}`}
                          style={{
                            maxWidth: '10rem',
                            maxHeight: '10rem',
                            margin: '1rem',
                          }}
                        />
                      ))}
                  </DisplayImg>
                </InlineImgs>
              </ImageUpload>
              <button
                type="button"
                className="removeBtn"
                onClick={() => removeTestimonyFields(index)}
              >
                Remove Testimony
              </button>
            </fieldset>
          ))}
          <button className="addBtn" type="button" onClick={addTestimonyFields}>
            Add a Testimony +
          </button>
        </TestimonyInfo>
      ),
    },
    {
      content: (
        <SocialInfo>
          <p>
            Provide any social media or calendar links you'd like accessible on
            the website.
          </p>
          <label className="hidden" htmlFor="calendly">
            Calendly Link
          </label>
          <input
            name="calendly"
            id="calendly"
            type="text"
            value={values.calendly}
            onChange={updateValue}
            placeholder="Calendly"
          />
          <label className="hidden" htmlFor="facebook">
            Facebook Link
          </label>
          <input
            name="facebook"
            id="facebook"
            type="text"
            value={values.facebook}
            onChange={updateValue}
            placeholder="Facebook"
          />
          <label className="hidden" htmlFor="linkedin">
            LinkedIn Link
          </label>
          <input
            name="linkedin"
            id="linkedin"
            type="text"
            value={values.linkedin}
            onChange={updateValue}
            placeholder="LinkedIn"
          />
          <label className="hidden" htmlFor="twitter">
            Twitter (X) Link
          </label>
          <input
            name="twitter"
            id="twitter"
            type="text"
            value={values.twitter}
            onChange={updateValue}
            placeholder="Twitter (X)"
          />
          <label className="hidden" htmlFor="instagram">
            Instagram Link
          </label>
          <input
            name="instagram"
            id="instagram"
            type="text"
            value={values.instagram}
            onChange={updateValue}
            placeholder="Instagram"
          />
          {socialFields.map((input, index) => (
            <fieldset key={index} className="socialinfo">
              <label className="hidden" htmlFor={`anothersocial${index}`}>
                Other Link
              </label>
              <input
                name={`anothersocial${index}`}
                id={`anothersocial${index}`}
                type="text"
                value={values[`anothersocial${index}`]}
                onChange={e =>
                  updateDynamicFieldValue(
                    index,
                    `anothersocial${index}`,
                    e.target.value
                  )
                }
                placeholder="Other Name & Link"
              />
              <button
                type="button"
                className="removeBtn"
                onClick={() => removeFields(index)}
              >
                Remove
              </button>
            </fieldset>
          ))}
          <button className="addBtn" type="button" onClick={addFields}>
            Add Another +
          </button>
        </SocialInfo>
      ),
    },
    {
      content: (
        <LogoInfo>
          <p>
            Provide your logo and any relevant images you would like on the
            website.
          </p>
          <ImageUpload>
            <InlineImgs>
              <label htmlFor="logoimgs" className="logoimgs">
                +
              </label>
              <input
                id="logoimgs"
                name="logoimgs"
                type="file"
                accept="image/*"
                value={values.logoimgs}
                onChange={handleLogoChange}
                multiple
              />
              <DisplayImg>
                {logoPreviews.map((preview, i) => (
                  <img
                    key={i}
                    src={preview}
                    alt={`Preview ${i}`}
                    style={{
                      maxWidth: '10rem',
                      maxHeight: '10rem',
                      margin: '1rem',
                    }}
                  />
                ))}
              </DisplayImg>
            </InlineImgs>
          </ImageUpload>
        </LogoInfo>
      ),
    },
    {
      content: (
        <ServiceInfo>
          <label htmlFor="miscinfo">
            Is there any other information you want me to know? You'll have a
            chance to add documents on the next page if needed.
          </label>
          <textarea
            name="miscinfo"
            id="miscinfo"
            type="text"
            value={values.miscinfo}
            onChange={updateValue}
            rows="7"
            placeholder="Add any additional information here you'd like me to know."
          />
        </ServiceInfo>
      ),
    },
    {
      content: (
        <DocInfo>
          <p>
            Add any relevant documents for additional information or
            downloadables for you customers here. This will accept PDF, Word or
            Excel Documents. You'll have a chance for other documents after the
            application review.
          </p>
          <ImageUpload>
            <InlineImgs>
              <label htmlFor="miscdocs" className="miscdocs">
                +
              </label>
              <input
                id="miscdocs"
                name="miscdocs"
                type="file"
                accept=".pdf, .doc, .docx, .xlsx, .xls"
                value={values.miscdocs}
                onChange={handleDocChange}
                multiple
              />
              <DisplayImg>
                {docPreviews.map((preview, i) => (
                  <div
                    key={i}
                    style={{
                      maxWidth: '10rem',
                      maxHeight: '10rem',
                      margin: '1rem',
                    }}
                  >
                    {getIconForFile(preview, docFiles[i])}
                  </div>
                ))}
              </DisplayImg>
            </InlineImgs>
          </ImageUpload>
        </DocInfo>
      ),
    },
    {
      content: (
        <PaymentType>
          <p>How would you prefer to pay?</p>
          <RadioContainer>
            <input
              name="paymenttype"
              id="onetimepmt"
              type="radio"
              value={values.onetimepmt}
              onChange={updateValue}
            />
            <label className="radio" htmlFor="onetimepmt">
              One-Time Payment of $3,497
            </label>
          </RadioContainer>
          <RadioContainer>
            <input
              name="paymenttype"
              id="subscriptionpmt"
              type="radio"
              value={values.subscriptionpmt}
              onChange={updateValue}
            />
            <label className="radio" htmlFor="subscriptionpmt">
              $697/month for 6 mo.
            </label>
          </RadioContainer>
          <Note>
            This covers the first year of all technical maintenance. Maintenance
            renews for $750/year and will chage 12 months after the launch of
            your website.
          </Note>
        </PaymentType>
      ),
    },
    {
      content: (
        <SubmissionPage>
          <p>
            Congratulations, you've done great work! All that's left is the
            terms and agreement and you're all set!
          </p>
          <ScrollableTerms>
            <IntakeTerms />
          </ScrollableTerms>
          <label
            className="full checkbox termsagreement"
            htmlFor="termsagreement"
          >
            I Agree to the Terms
            <input
              name="termsagreement"
              id="termsagreement"
              type="checkbox"
              value={values.termsagreement}
              onChange={e => {
                updateValue(e)
                setTermsAgreed(e.target.checked)
              }}
            />
            <Checkmark className="checkmark" />
          </label>
          <button type="submit" className="submit" disabled={!termsAgreed}>
            Submit <PiCaretRightBold />
          </button>
        </SubmissionPage>
      ),
    },
  ]

  // Slider handling
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

  // handle percentage progress
  const progressPercentage = ((activeSlide + 1) / totalSlides) * 100

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
