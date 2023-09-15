import React from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
  max-width: 108rem;
  margin: 0 auto;
  padding-top: 9rem;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

export default function Bundles() {
  return (
    <HomeStyles>
      <div>Simple. Splendid.</div>
    </HomeStyles>
  )
}
