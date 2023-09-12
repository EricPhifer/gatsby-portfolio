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

export default function ProductsSold() {
  // handle form values
  const { values, updateValue } = useForm({
    // Problem
    productone: '',
    producttwo: '',
    productthree: '',
    productfour: '',
    productfive: '',
  })

  return (
    <ProblemSolution>
      <p>
        Provide 1- 5 products or services, include a title, description and a
        cost for each.
      </p>
      <label className="hidden" htmlFor="productone">
        Product / Service 1
      </label>
      <textarea
        name="productone"
        id="productone"
        type="text"
        value={values.productone}
        onChange={updateValue}
        rows="3"
        placeholder="Product / Service 1"
      />
      <label className="hidden" htmlFor="producttwo">
        Product / Service 2
      </label>
      <textarea
        name="producttwo"
        id="producttwo"
        type="text"
        value={values.producttwo}
        onChange={updateValue}
        rows="3"
        placeholder="Product / Service 2"
      />
      <label className="hidden" htmlFor="productthree">
        Product / Service 3
      </label>
      <textarea
        name="productthree"
        id="productthree"
        type="text"
        value={values.productthree}
        onChange={updateValue}
        rows="3"
        placeholder="Product / Service 3"
      />
      <label className="hidden" htmlFor="productfour">
        Product / Service 4
      </label>
      <textarea
        name="productfour"
        id="productfour"
        type="text"
        value={values.productfour}
        onChange={updateValue}
        rows="3"
        placeholder="Product / Service 4"
      />
      <label className="hidden" htmlFor="productfive">
        Product / Service 5
      </label>
      <textarea
        name="productfive"
        id="productfive"
        type="text"
        value={values.productfive}
        onChange={updateValue}
        rows="3"
        placeholder="Product / Service 5"
      />
    </ProblemSolution>
  )
}
