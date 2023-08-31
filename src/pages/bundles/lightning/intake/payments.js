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
`

// Progress Indicator
const ProgressContainer = styled.div`
  width: 5rem;
  height: 60dvh;
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 3%;
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
  height: 1.3rem;
  border-radius: 5rem;
  margin: 0.5rem 0;
  background-color: var(--intake-background);
`

const ProgressIndicator = styled.p`
  color: var(--intake-foreground);
  justify-self: end;
  align-self: end;
`

const BusinessType = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
  }
`

const DonateOption = styled(Link)`
  width: 60rem;
  height: 8rem;
  margin-bottom: 2rem;
  border: 0.5rem solid var(--intake-foreground);
  border-radius: 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--intake-foreground);
  svg {
    margin-left: 2rem;
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
`

export default function Payments() {
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
              We do not need a payment option set up
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
