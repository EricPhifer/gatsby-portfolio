import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  min-height: 40rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 1rem;
  justify-items: center;
  align-content: center;
`

const Image = styled.div`
  width: 20rem;
  grid-column: 1 / span 1;
  img {
    width: 20rem;
    border: 1.5rem solid var(--black);
    border-radius: 5rem;
    &:hover {
      border: 1.5rem solid var(--green);
      box-shadow: 0.1rem 0.2rem var(--black);
    }
  }
  @media only screen and (max-width: 777px) {
    grid-column: 1 / span 3;
  }
`

const Words = styled.div`
  position: relative;
  grid-column: 2 / span 2;
  @media only screen and (max-width: 777px) {
    grid-column: 1 / span 3;
  }
`

const Elevate = styled.span`
  &:hover {
    color: var(--green);
    text-shadow: 0.1rem 0.2rem var(--black);
  }
`

const ContainedElevation = styled.p`
  max-width: 50rem;
  margin: 0;
  color: var(--black);
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: bold;
  cursor: default;
  @media only screen and (max-width: 777px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 410px) {
    max-width: 22rem;
  }
`

export default function Intro() {
  const { homepage } = useStaticQuery(graphql`
    query {
      homepage: allSanityHomepage {
        nodes {
          id
          title
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
          projectlist {
            projectname
            projectlink
            desktopimage {
              asset {
                id
              }
              ...ImageWithPreview
            }
            desktopalt
            tabletimage {
              asset {
                id
              }
              ...ImageWithPreview
            }
            tabletalt
            mobileimage {
              asset {
                id
              }
              ...ImageWithPreview
            }
            mobilealt
          }
        }
      }
    }
  `)
  const { nodes } = homepage
  return (
    <>
      {nodes.map(home => (
        <Container key={home.id}>
          <Image>
            <SanityImage
              {...home.image}
              alt={home.title}
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </Image>
          <Words>
            <ContainedElevation>
              <Elevate>H</Elevate>
              <Elevate>I</Elevate>
              <Elevate>,</Elevate> <Elevate>I</Elevate>
              <Elevate>'</Elevate>
              <Elevate>M</Elevate> <Elevate>E</Elevate>
              <Elevate>R</Elevate>
              <Elevate>I</Elevate>
              <Elevate>C</Elevate>
              <Elevate>.</Elevate>
            </ContainedElevation>
            <ContainedElevation>
              <Elevate>D</Elevate>
              <Elevate>E</Elevate>
              <Elevate>S</Elevate>
              <Elevate>I</Elevate>
              <Elevate>G</Elevate>
              <Elevate>N</Elevate>
              <Elevate>E</Elevate>
              <Elevate>R</Elevate>
              <Elevate>.</Elevate> <Elevate>D</Elevate>
              <Elevate>E</Elevate>
              <Elevate>V</Elevate>
              <Elevate>E</Elevate>
              <Elevate>L</Elevate>
              <Elevate>O</Elevate>
              <Elevate>P</Elevate>
              <Elevate>E</Elevate>
              <Elevate>R</Elevate>
              <Elevate>.</Elevate>
            </ContainedElevation>
          </Words>
        </Container>
      ))}
    </>
  )
}
