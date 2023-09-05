import React, { useState } from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const SocialStyles = styled.fieldset`
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

export default function SocialInfo() {
  const [socialFields, setSocialFields] = useState([
    {
      // Social Media Addition
      anothersocial: '',
    },
  ])
  // handle form values
  const { values, updateValue } = useForm({
    anothersocial0: '',
    anothersocial1: '',
    anothersocial2: '',
    anothersocial3: '',
    anothersocial4: '',
    anothersocial5: '',
    anothersocial6: '',
    anothersocial7: '',
    anothersocial8: '',
    anothersocial9: '',
    anothersocial10: '',
  })

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
  // A function to update the values of dynamic fields
  const updateDynamicFieldValue = (fieldIndex, fieldName, value) => {
    setSocialFields(prevFields => {
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
  return (
    <SocialStyles>
      <p>
        Provide any social media or calendar links you'd like accessible on the
        website.
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
    </SocialStyles>
  )
}
