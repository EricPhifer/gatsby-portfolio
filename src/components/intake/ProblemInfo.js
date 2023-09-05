import React from 'react'
import styled from 'styled-components'
import useForm from '../../utils/useForm'

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

export default function ProblemInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Problem
    problemone: '',
    problemtwo: '',
    problemthree: '',
  })
  return (
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
  )
}
