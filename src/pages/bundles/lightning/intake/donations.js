import React from 'react'
import styled from 'styled-components'
// Icons
import { PiCaretRightBold } from 'react-icons/pi'

// Logo Image
import { Link } from 'gatsby'
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
  font-family: Arbotek;
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

// Progress Indicator
const ProgressContainer = styled.div`
  width: 8rem;
  height: 60dvh;
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 3%;
  @media only screen and (max-height: 700px) {
    height: 85dvh;
  }
`

const FullBar = styled.div`
  width: 2rem;
  height: 100%;
  background-color: var(--intake-foreground);
  border-radius: 5rem;
  position: absolute;
  right: 0;
  display: flex;
  align-items: end;
  justify-content: center;
`

const ProgressBar = styled.div`
  width: 1.2rem;
  height: 1.5rem;
  border-radius: 5rem;
  margin: 0.5rem 0;
  background-color: var(--intake-background);
`

const ProgressIndicator = styled.p`
  color: var(--intake-foreground);
  justify-self: end;
  align-self: end;
`

const BusinessType = styled.fieldset`
  max-width: 60rem;
  width: 86%;
  height: 94%;
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

const DonateOption = styled(Link)`
  max-width: 60rem;
  width: 80%;
  height: 8rem;
  margin-bottom: 2rem;
  padding-left: 3rem;
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

export default function Donations() {
  return (
    <EntireForm>
      <Border>
        <LogoContainer>
          <LightningLogo />
        </LogoContainer>
        <FlexContainer>
          <BusinessType>
            <DonateOption to="/bundles/lightning/intake/nonprofit-with-donations">
              We need a donation option set up
              <PiCaretRightBold />
            </DonateOption>
            <DonateOption to="/bundles/lightning/intake/nonprofit">
              We do not need a donation option set up
              <PiCaretRightBold />
            </DonateOption>
          </BusinessType>
          <ProgressContainer>
            <ProgressIndicator>2%</ProgressIndicator>
            <FullBar>
              <ProgressBar />
            </FullBar>
          </ProgressContainer>
        </FlexContainer>
      </Border>
    </EntireForm>
  )
}
