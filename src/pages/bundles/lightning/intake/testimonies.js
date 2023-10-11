import React, { useState } from 'react'
import styled from 'styled-components'
import useForm from '../../../../utils/useForm'
import useContact from '../../../../utils/useContact'

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
  font-family: Arbotek, Frutiger, 'Frutiger Linotype', Univers, Calibri,
    'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed',
    'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
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
      content: '✔️';
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

const ImageUpload = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-variant: small-caps;
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
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export default function Testimonies() {
  // handle image previews
  const [imagePreviews, setImagePreviews] = useState([])
  const [testimonyFields, setTestimonyFields] = useState([
    {
      // Testimonies
      testimonyname: '',
      testimonybusiness: '',
      testimonyproblem: '',
      testimonydifference: '',
      testimonyfeeling: '',
      testimonysolution: '',
      testimonysolved: '',
      testimonyimgs: '',
    },
  ])

  const { values, updateValue } = useForm({})

  // sets up the previews for images uploaded
  const handleImageChange = e => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    setImagePreviews(prevPreviews => [...prevPreviews, ...previews])
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

  // form handle adding a field
  const handleFormChange = (index, event) => {
    const data = [...testimonyFields]
    data[index][event.target.name] = event.target.value
    setTestimonyFields(data)
  }
  // combine image and form handling
  const handleImageInputChange = (e, index) => {
    handleImageChange(e)
    updateValue(e)
    handleFormChange(e, index)
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
        <LogoContainer>{/* <Branding /> */}</LogoContainer>
        <FlexContainer>
          <FormContainer>
            <Form
              name="testimony-form"
              method="post"
              encType="multipart/form-data"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="testimony-form" />
              <TestimonyInfo>
                <p>
                  Provide any testimonies from your customers, clients or
                  partners
                </p>
                {testimonyFields.map((testimony, index) => (
                  <fieldset key={index} className="testimonyinfo">
                    <label className="hidden" htmlFor={`testimonyname${index}`}>
                      Your Name (as you want it displayed)
                    </label>
                    <input
                      name={`testimonyname${index}`}
                      id={`testimonyname${index}`}
                      type="text"
                      value={testimony.testimonyname}
                      onChange={e =>
                        updateValue(`testimonyname${index}`, e.target.value)
                      }
                      placeholder="Your Name (as you want it displayed)"
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonybusiness${index}`}
                    >
                      Business / Organization Testimony is for...
                    </label>
                    <input
                      name={`testimonybusiness${index}`}
                      id={`testimonybusiness${index}`}
                      type="text"
                      value={testimony.testimonybusiness}
                      onChange={e =>
                        updateValue(`testimonybusiness${index}`, e.target.value)
                      }
                      placeholder="Business / Organization Testimony is for..."
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonyproblem${index}`}
                    >
                      Problem they had...
                    </label>
                    <input
                      name={`testimonyproblem${index}`}
                      id={`testimonyproblem${index}`}
                      type="text"
                      value={testimony.testimonyproblem}
                      onChange={e =>
                        updateValue(`testimonyproblem${index}`, e.target.value)
                      }
                      placeholder="What was the problem you were having before you discovered them?"
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonyfeeling${index}`}
                    >
                      What did the frustration feel like as they tried to solve
                      the problem?
                    </label>
                    <input
                      name={`testimonyfeeling${index}`}
                      id={`testimonyfeeling${index}`}
                      type="text"
                      value={testimony.testimonyfeeling}
                      onChange={e =>
                        updateValue(`testimonyfeeling${index}`, e.target.value)
                      }
                      placeholder="What did the frustration feel like as you tried to solve the problem?"
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonydifference${index}`}
                    >
                      What was different for you about them?
                    </label>
                    <input
                      name={`testimonydifference${index}`}
                      id={`testimonydifference${index}`}
                      type="text"
                      value={testimony.testimonydifference}
                      onChange={e =>
                        updateValue(
                          `testimonydifference${index}`,
                          e.target.value
                        )
                      }
                      placeholder="What was different for you about them?"
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonysolution${index}`}
                    >
                      What was different for you about them?
                    </label>
                    <textarea
                      name={`testimonysolution${index}`}
                      id={`testimonysolution${index}`}
                      type="text"
                      value={testimony.testimonysolution}
                      onChange={e =>
                        updateValue(`testimonysolution${index}`, e.target.value)
                      }
                      rows="3"
                      placeholder="Tell us about the moment when you realized they were actually woeking to solve your problem."
                    />
                    <label
                      className="hidden"
                      htmlFor={`testimonysolved${index}`}
                    >
                      What was different for you about them?
                    </label>
                    <textarea
                      name={`testimonysolved${index}`}
                      id={`testimonysolved${index}`}
                      type="text"
                      value={testimony.testimonysolved}
                      onChange={e =>
                        updateValue(`testimonysolved${index}`, e.target.value)
                      }
                      rows="3"
                      placeholder="Tell us what life looks like now that your problem is solved or being solved."
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
                          name={`testimonyimgs${index}`}
                          type="file"
                          accept="image/*"
                          value={values.testimonyimgs}
                          onChange={handleImageInputChange}
                        />
                        <DisplayImg>
                          {imagePreviews.map((preview, i) => (
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
                <button
                  className="addBtn"
                  type="button"
                  onClick={addTestimonyFields}
                >
                  Add a Testimony +
                </button>
              </TestimonyInfo>
            </Form>
          </FormContainer>
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
