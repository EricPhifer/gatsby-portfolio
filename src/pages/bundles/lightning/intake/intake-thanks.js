import React from 'react'
import styled from 'styled-components'
import lightninglogo from '../../../../assets/images/lightning-icon.png'

// Form Global Styling
const EntireForm = styled.div`
  // set values for the form
  --intake-background: #535353;
  --intake-foreground: #ebebeb;

  // set full screen
  width: 100vw;
  height: 100dvh;
  overflow-y: hidden;
  background-color: var(--intake-background);

  // set positioning of children
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  // typography
  font-family: Arbotek, Frutiger, 'Frutiger Linotype', Univers, Calibri,
    'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed',
    'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-size: 2.35rem;
  color: var(--intake-foreground);
  scrollbar-color: var(--intake-foreground) !important;
  transition: all 0.2s ease-in-out;

  // apply hidden option
  .hidden {
    display: none;
  }
`

const Border = styled.div`
  width: 96%;
  height: 96%;
  border: 0.1rem solid var(--intake-foreground);
  border-radius: 1rem;
`

// Centered Logo
const LogoContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 815px) {
    height: 20%;
  }
  @media only screen and (max-height: 700px) {
    width: 15%;
    position: absolute;
  }
  @media only screen and (min-height: 525px) and (max-height: 700px) and (max-width: 350px) {
    width: 25%;
  }
`

const LightningLogo = styled.div`
  width: 5rem;
  height: 12rem;
  content: url(${lightninglogo});
  margin-top: 2rem;
`

// Form Body Grid
const FlexContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 815px) {
    height: 80%;
  }
  @media only screen and (max-height: 700px) {
    height: 100%;
  }
`

const BusinessType = styled.fieldset`
  max-width: 60rem;
  width: 86%;
  height: 94%;
  margin-left: 7rem;
  padding: 0;
  padding-right: 1.6rem;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  z-index: 10;
  p,
  a {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 570px) {
    a {
      font-size: 2rem;
    }
    p {
      font-size: 1.75rem;
    }
  }
  @media only screen and (max-width: 475px) {
    a {
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 350px) {
    margin-left: 0.2rem;
    p {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-height: 700px) {
    height: 100%;
  }
  @media only screen and (max-height: 700px) and (max-width: 350px) {
    a {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-height: 525px) {
    a {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.75rem;
    }
  }
`

export default function IntakeThanks() {
  return (
    <EntireForm>
      <Border>
        <LogoContainer>
          <LightningLogo />
        </LogoContainer>
        <FlexContainer>
          <BusinessType>
            <p>
              Great Work! You've just identified the most important parts of
              clarifying your message and gaining customers that are fired up
              about what you do.
            </p>
            <p>
              We will review your application and ensure this bundle is a good
              fit for you.
            </p>
            <p>
              You'll receive a PDF copy of your answers for your own use within
              7 days.
            </p>
          </BusinessType>
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
