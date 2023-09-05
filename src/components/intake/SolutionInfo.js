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

export default function SolutionInfo() {
  // handle form values
  const { values, updateValue } = useForm({
    // Solution
    solutionone: '',
    solutiontwo: '',
    solutionthree: '',
  })
  return (
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
  )
}
