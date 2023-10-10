import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

// const FullBar = styled.div`
//   width: 2rem;
//   height: 100%;
//   background-color: var(--intake-foreground);
//   border-radius: 5rem;
//   position: absolute;
//   right: 0;
//   display: flex;
//   align-items: end;
//   justify-content: center;
// `

const Progress = styled.progress`
  &[value] {
    appearance: none;
    border-radius: 5rem;
    background-color: var(--intake-background);
    transition: all 0.5s ease-in-out;
  }
`

const ProgressIndicator = styled.p`
  color: var(--intake-foreground);
  justify-self: end;
  align-self: end;
`

export default function ProgressBar(props) {
  // Progress Bar Percentage
  const { activeSlide, totalSlides } = props
  const progressPercentage = ((activeSlide + 1) / totalSlides) * 100
  return (
    <ProgressContainer>
      <ProgressIndicator>{Math.round(progressPercentage)}%</ProgressIndicator>
      <Progress value={progressPercentage} max="100" />
    </ProgressContainer>
  )
}

ProgressBar.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
}
