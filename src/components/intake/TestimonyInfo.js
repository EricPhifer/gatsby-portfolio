import React, { useState } from 'react'
import styled from 'styled-components'

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

export default function TestimonyInfo() {
  // additional Testimonyfields
  const [testimonyFields, setTestimonyFields] = useState([
    {
      // Testimonies
      testimonyname: '',
      writtentestimony: '',
    },
  ])

  // sets up the previews for images uploaded
  const handleFormChange = (e, index) => {
    const data = [...testimonyFields]
    data[index][e.target.name] = e.target.value
    setTestimonyFields(data)
  }

  // Creating Dynamic Testimony Fields
  const addTestimonyFields = () => {
    const newfield = {
      testimonyname: '',
      writtentestimony: '',
    }

    setTestimonyFields([...testimonyFields, newfield])
  }
  const removeTestimonyFields = index => {
    const data = [...testimonyFields]
    data.splice(index, 1)
    setTestimonyFields(data)
  }

  return (
    <Testimonies>
      <p>Provide any testimonies from your customers, clients or partners</p>
      {testimonyFields.map((testimony, index) => (
        <fieldset key={index} className="testimonyinfo">
          <label className="hidden" htmlFor={`testimonyname${index}`}>
            Name of Happy Customer
          </label>
          <input
            name={`testimonyname${index}`}
            id={`testimonyname${index}`}
            type="text"
            value={testimony.testimonyname}
            onChange={e => handleFormChange(e, index)}
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
            onChange={e => handleFormChange(e, index)}
            rows="3"
            placeholder="Written testimony... (should reinforce the success your business has helped others gain with your service)"
          />

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
