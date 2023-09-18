import React from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
  max-width: 108rem;
  margin: 0 auto;
  padding-top: 9rem;
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 100%;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

const LightningStyles = styled.a`
  box-shadow: 0.1rem 0.1rem 1rem var(--gray);
  border: 0.05rem solid var(--lightgray);
  padding: 3rem 5rem;
  &:hover {
    box-shadow: 0.1rem 0.1rem 1rem var(--lightgray);
    border: none;
  }
`

export default function Bundles() {
  return (
    <HomeStyles>
      <LightningStyles>
        Lightning <br />
        Bundle
      </LightningStyles>
    </HomeStyles>
  )
}
