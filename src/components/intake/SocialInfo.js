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
    calendly: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    instagram: '',
  })

  const handleFormChange = (index, e) => {
    const data = [...socialFields]
    data[index][e.target.name] = e.target.value
    setSocialFields(data)
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
          <label className="hidden" htmlFor="anothersocial">
            Other Link
          </label>
          <input
            name="anothersocial"
            id="anothersocial"
            type="text"
            value={input.anothersocial}
            onChange={e => handleFormChange(index, e)}
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
