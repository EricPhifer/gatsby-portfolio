import React, { useState } from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

const Logos = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
  label {
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--intake-foreground);
    opacity: 0.5;
    font-size: 5rem;
    border: 0.2rem dashed lightgray;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
  input[type='file'] {
    height: 100%;
    margin: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .addBtn {
    box-shadow: none;
    &:hover {
      border: none;
      color: var(--mint);
    }
  }
`

const ImageUpload = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
`

const InlineImgs = styled.fieldset`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: tomato;
    color: var(--intake-foreground);
    border: 0.1rem solid var(--intake-foreground);
  }
  .removeSection {
    height: 2rem;
    margin-right: 2rem;
  }
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
  position: relative;
  .prevContainer {
    width: 10rem;
    height: 10rem;
    background-color: var(--intake-background);
    border: 0.2rem solid var(--intake-foreground);
    border-radius: 0.5rem;
    position: absolute;
    top: -4.8rem;
    left: -10rem;
    img {
      padding: 0.4rem;
    }
  }
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

export default function LogoInfo() {
  // handle logo previews
  const [logoPreviews, setLogoPreviews] = useState([])
  const [logoFields, setLogoFields] = useState([{ logoimgs: '' }])

  // handle form values
  const { values, updateValue } = useForm({
    // Logo & other images
    logoimgs0: '',
    logoimgs1: '',
    logoimgs2: '',
    logoimgs3: '',
    logoimgs4: '',
    logoimgs5: '',
    logoimgs6: '',
    logoimgs7: '',
    logoimgs8: '',
    logoimgs9: '',
    logoimgs10: '',
  })

  const addFields = () => {
    const newfield = { logoimgs: '' }

    setLogoFields([...logoFields, newfield])
  }
  const removeFields = index => {
    const data = [...logoFields]
    data.splice(index, 1)
    setLogoFields(data)
  }

  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    setLogoPreviews(prevPreviews => {
      const updatedPreviews = [...prevPreviews]
      updatedPreviews[index] = previews // Set the previews for the specified field group
      return updatedPreviews
    })
  }

  const handleImageAndInput = (e, index) => {
    updateValue(e)
    handleImageChange(e, index)
  }

  return (
    <Logos>
      <p>
        Provide your logo and up to 10 other images you would like on the
        website. If you need more, leave a note on the next page.
      </p>
      <ImageUpload>
        {logoFields.map((_input, index) => (
          <InlineImgs key={index}>
            <button
              type="button"
              className="removeSection"
              onClick={() => removeFields(index)}
            >
              -
            </button>
            <label htmlFor={`logoimgs${index}`} className="logoimgs">
              +
              <input
                name={`logoimgs${index}`}
                id={`logoimgs${index}`}
                type="file"
                value={values[`logoimgs${index}`]}
                accept="image/*"
                onChange={e => handleImageAndInput(e, index)}
              />
            </label>
            <DisplayImg>
              {logoPreviews[index] &&
                logoPreviews[index].map((preview, i) => (
                  <div className="prevContainer" key={i}>
                    <img
                      src={preview}
                      alt={`Preview ${i}`}
                      style={{
                        maxWidth: '10rem',
                        maxHeight: '10rem',
                      }}
                    />
                  </div>
                ))}
            </DisplayImg>
          </InlineImgs>
        ))}
      </ImageUpload>

      <button className="addBtn" type="button" onClick={addFields}>
        Add Another +
      </button>
    </Logos>
  )
}
