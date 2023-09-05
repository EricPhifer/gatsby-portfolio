import React from 'react'
import styled from 'styled-components'

const WelcomePage = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`

export default function IntakeWelcome() {
  return (
    <WelcomePage>
      <p>Hooray! You are about to stand out in the crowd. </p>
      <p>
        No answers are required; however, the more information we have the
        better we can build a website that’s right for you.
      </p>
      <p>
        Please provide as much information as possible. Insufficient information
        may result in a declined application.{' '}
      </p>
    </WelcomePage>
  )
}
