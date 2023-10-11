import React from 'react'
import styled from 'styled-components'
// Icons
import { PiCaretRightBold } from 'react-icons/pi'

// Logo Image
import { Link } from 'gatsby'
import lightninglogo from '../../../../assets/images/lightning-icon.png'
import ProgressBar from '../../../../components/intake/ProgressBar'

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
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border: 0.1rem solid var(--intake-foreground);
  border-radius: 1rem;
`

// Centered Logo
const LogoContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
`

const LightningLogo = styled.div`
  width: 5rem;
  height: 12rem;
  content: url(${lightninglogo});
  margin-top: 2rem;
  @media only screen and (max-height: 625px) {
    position: absolute;
    left: 5%;
  }
`

// Form Body Grid
const FlexContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-height: 625px) {
    height: 100%;
    position: absolute;
    top: 5%;
  }
`

const BusinessType = styled.fieldset`
  max-width: 60rem;
  width: 86%;
  height: 94%;
  padding: 6rem 0 0;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
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
      font-size: 1.5rem;
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

const DonateOption = styled(Link)`
  max-width: 60rem;
  width: 80%;
  height: 8rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  border: 0.5rem solid var(--intake-foreground);
  border-radius: 5rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: var(--intake-foreground);
  svg {
    font-size: 3rem;
  }
  &:hover {
    background-color: var(--intake-foreground);
    color: var(--intake-background);
  }
  &:focus {
    outline: max(0.2rem, 0.1rem) solid var(--intake-foreground);
    outline-offset: max(0.2rem, 0.1rem);
  }
  &:active {
    background-color: var(--intake-foreground);
    color: var(--intake-background);
  }
  @media only screen and (max-width: 525px) {
    width: 100%;
  }
`

export default function Payments() {
  const activeSlide = -0.98
  const totalSlides = 1
  return (
    <EntireForm>
      <Border>
        <LogoContainer>
          <LightningLogo />
        </LogoContainer>
        <FlexContainer>
          <BusinessType>
            <DonateOption to="/bundles/lightning/intake/business-with-payments">
              We need a payment option set up
              <PiCaretRightBold />
            </DonateOption>
            <DonateOption to="/bundles/lightning/intake/business">
              We do not need a payment option
              <PiCaretRightBold />
            </DonateOption>
          </BusinessType>
          <ProgressBar activeSlide={activeSlide} totalSlides={totalSlides} />
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
