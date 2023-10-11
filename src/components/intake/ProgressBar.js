import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Progress Indicator
const ProgressContainer = styled.div`
  width: 14rem;
  height: 8rem;
  display: flex;
  position: absolute;
  bottom: 7%;
  right: 3%;

  @media only screen and (max-height: 700px) {
    height: 85dvh;
  }
`

const Progress = styled.progress`
  border-radius: 50%;
  &[value] {
    // reset defaults
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    // style progress bar
    width: 8rem;
    height: 8rem;
    transform: rotate(-90deg);
    background-color: var(--intake-background);
    border: 0.2rem solid var(--intake-foreground);
    transition: all 0.5s ease-in-out;

    // For IE10
    color: var(--intake-foreground);
  }
  &[value]::-webkit-progress-value {
    background-color: var(--intake-foreground);
  }
  &[value]::-moz-progress-bar {
    background-color: var(--intake-foreground);
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
