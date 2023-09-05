import React, { useState } from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Testimonies = styled.fieldset`
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

export default function TestimonyInfo() {
  // handle image previews
  const [imagePreviews, setImagePreviews] = useState([[]])
  // additional Testimonyfields
  const [testimonyFields, setTestimonyFields] = useState([
    {
      // Testimonies
      testimonyname: '',
      writtentestimony: '',
      testimonyimgs: '',
    },
  ])

  // handle form values
  const { _values, updateValue } = useForm({
    testimonyimgs0: '',
    testimonyimgs1: '',
    testimonyimgs2: '',
    testimonyimgs3: '',
    testimonyimgs4: '',
    testimonyimgs5: '',
    testimonyimgs6: '',
    testimonyimgs7: '',
    testimonyimgs8: '',
    testimonyimgs9: '',
    testimonyimgs10: '',
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

    updateValue(e)
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

  return (
    <Testimonies>
      <p>Provide any testimonies from your customers, clients or partners</p>
      {testimonyFields.map((testimony, index) => (
        <fieldset key={index} className="testimonyinfo">
          <label className="hidden" htmlFor={`testimonyname${index}`}>
            Name of Satisfied Customer
          </label>
          <input
            name={`testimonyname${index}`}
            id={`testimonyname${index}`}
            type="text"
            value={testimony.testimonyname}
            onChange={e =>
              updateDynamicFieldValue(index, 'testimonyname', e.target.value)
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
              updateDynamicFieldValue(index, 'writtentestimony', e.target.value)
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
    </Testimonies>
  )
}
