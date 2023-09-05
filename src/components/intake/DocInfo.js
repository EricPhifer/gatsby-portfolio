import React, { useState } from 'react'
import styled from 'styled-components'
import {
  GrDocumentExcel,
  GrDocumentPdf,
  GrDocumentWord,
  GrDocument,
} from 'react-icons/gr'
import useForm from '../../utils/useForm'

const Docs = styled.fieldset`
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

export default function DocInfo() {
  // handle doc previews
  const [docFiles, setDocFiles] = useState([])
  const [docFields, setDocFields] = useState([])
  const [docPreviews, setDocPreviews] = useState([])

  // handle form values
  const { values, updateValue } = useForm({
    // Miscellaneous Documents
    miscdocs0: '',
    miscdocs1: '',
    miscdocs2: '',
    miscdocs3: '',
    miscdocs4: '',
    miscdocs5: '',
    miscdocs6: '',
    miscdocs7: '',
    miscdocs8: '',
    miscdocs9: '',
    miscdocs10: '',
  })

  const addFields = () => {
    const newfield = { logoimgs: '' }

    setDocFields([...docFields, newfield])
  }
  const removeFields = index => {
    const data = [...docFields]
    data.splice(index, 1)
    setDocFields(data)
  }

  // sets up the previews for docs uploaded
  const handleDocChange = (e, index) => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))

    // Update docFiles with the new file objects
    setDocFiles(prevFiles => [...prevFiles, ...files])
    // Update docPreviews with the new previews
    setDocPreviews(prevPreviews => {
      const updatedPreviews = [...prevPreviews]
      updatedPreviews[index] = previews // Set the previews for the specified field group
      return updatedPreviews
    })
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

  const handleDocAndInput = (e, index) => {
    updateValue(e)
    handleDocChange(e, index)
  }

  return (
    <Docs>
      <p>
        Add any relevant documents for additional information or downloadables
        for you customers here. This will accept PDF, Word or Excel Documents.
        You'll have a chance for other documents after the application review.
      </p>
      <ImageUpload>
        {docFields.map((_input, index) => (
          <InlineImgs key={index}>
            <button
              type="button"
              className="removeSection"
              onClick={() => removeFields(index)}
            >
              -
            </button>
            <label htmlFor={`logoimgs${index}`} className="miscdocs">
              +
              <input
                id={`logoimgs${index}`}
                name={`logoimgs${index}`}
                type="file"
                accept=".pdf, .doc, .docx, .xlsx, .xls"
                value={values[`logoimgs${index}`]}
                onChange={e => handleDocAndInput(e, index)}
              />
            </label>
            <DisplayImg>
              {docPreviews[index] &&
                docPreviews[index].map((preview, i) => (
                  <div
                    key={i}
                    className="prevContainer"
                    style={{
                      maxWidth: '10rem',
                      maxHeight: '10rem',
                    }}
                  >
                    {getIconForFile(preview, docFiles[i])}
                  </div>
                ))}
            </DisplayImg>
          </InlineImgs>
        ))}
      </ImageUpload>
      <button className="addBtn" type="button" onClick={addFields}>
        Add Another +
      </button>
    </Docs>
  )
}
