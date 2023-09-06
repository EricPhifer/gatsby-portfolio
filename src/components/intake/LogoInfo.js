import React, { useRef, useState } from 'react'
import styled from 'styled-components'

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
  .resetbtn {
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
    top: -5.8rem;
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
  const [_selectedFile, setSelectedFile] = useState(null)
  // handle logo previews
  const [logoPreviews, setLogoPreviews] = useState([])
  // creates new
  const [logoFields, _setLogoFields] = useState([{ logoimgs: '' }])

  // keep preview, update to upload only one image and create a reset button

  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files)
    const previews = URL.createObjectURL(files[0])

    setLogoPreviews(prevPreviews => {
      const updatedPreviews = [...prevPreviews]
      updatedPreviews[index] = previews
      return updatedPreviews
    })
  }

  const handleFileChange = e => {
    setSelectedFile(e.target.files[0])
  }

  const fileInputRef = useRef(null)

  // Reset Function
  const handleResetFile = () => {
    setSelectedFile(null)

    // Clear the corresponding preview
    setLogoPreviews(Array(logoFields.length).fill(null))

    // Reset the file input using the ref
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
      fileInputRef.current.type = 'text'
      fileInputRef.current.type = 'file'
    }
  }

  const handleImageAndFile = (e, index) => {
    handleFileChange(e)
    handleImageChange(e, index)
  }

  return (
    <Logos>
      <p>
        Provide your logo here. You'll have a chance to upload more files,
        images and videos after your application is accepted. Only one image can
        be transmitted here.
      </p>
      <ImageUpload>
        {logoFields.map((input, index) => (
          <InlineImgs key={index}>
            <label htmlFor={input.logoimgs} className="logoimgs">
              +
              <input
                name={input.logoimgs}
                id={input.logoimgs}
                type="file"
                ref={fileInputRef}
                value={input.logoimgs}
                accept="image/*"
                onChange={e => handleImageAndFile(e, index)}
              />
            </label>
            <DisplayImg>
              {logoPreviews[index] && (
                <div className="prevContainer">
                  <img
                    src={logoPreviews[index]}
                    alt={`Preview ${index}`}
                    style={{
                      maxWidth: '10rem',
                      maxHeight: '10rem',
                    }}
                  />
                </div>
              )}
            </DisplayImg>
          </InlineImgs>
        ))}
      </ImageUpload>

      <button className="resetbtn" type="button" onClick={handleResetFile}>
        Upload the wrong file?
      </button>
    </Logos>
  )
}
