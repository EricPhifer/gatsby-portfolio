import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
  max-width: 108rem;
  min-height: 100dvh;
  margin: 0 auto;
  padding-top: 9rem;
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 100%;
  gap: 2rem;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

const LightningStyles = styled(Link)`
  max-width: 27rem;
  margin: 0 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0.1rem 0.1rem 1rem var(--gray),
    0.1rem 0.1rem 1rem var(--gray) inset;
  background-image: linear-gradient(
    to bottom right,
    var(--hero-yellow),
    var(--hero-orange),
    var(--hero-red)
  );
  border-radius: 0.5rem;
  padding: 3rem 5rem;
  color: var(--white);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  p {
    line-height: 1.5;
    letter-spacing: 0.2rem;
    font-family: Arbotek;
    font-variant: small-caps;
    font-size: 2rem;
    font-weight: bold;
  }
  &:hover {
    box-shadow: 0.1rem 0.1rem 1rem var(--white),
      -0.2rem -0.2rem 1rem var(--white) inset;
    transform: scale(1.05);
    p {
      text-shadow: 0.1rem 0 0 darkgray, 0 0.1rem 0 darkgray,
        -0.1rem 0 0 darkgray, 0 -0.1rem 0 darkgray;
    }
  }
`

export default function Bundles() {
  return (
    <HomeStyles>
      <LightningStyles to="/bundles/lightning">
        <p>Lightning</p>
        <p>Bundle</p>
      </LightningStyles>
    </HomeStyles>
  )
}
