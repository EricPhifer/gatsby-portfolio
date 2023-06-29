import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 80rem;
  width: 100vw;
  min-height: 40rem;
  padding: 0 2rem;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

const Image = styled.div`
  img {
    width: 80rem;
    border: 1rem solid var(--black);
    border-radius: 5rem;
    &:hover {
      border: 1rem solid var(--green);
      box-shadow: 0.1rem 0.2rem var(--black);
    }
  }
`

const Words = styled.div`
  position: relative;
  text-align: left;
  margin: 2rem 0;
`

const Elevate = styled.span`
  &:hover {
    color: var(--green);
    text-shadow: 0.1rem 0.2rem var(--black);
  }
`

const ContainedElevation = styled.h1`
  margin: 0;
  color: var(--black);
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: bold;
  cursor: default;
  @media only screen and (max-width: 777px) {
    font-size: 3rem;
  }
`

const Paragraph = styled.p`
  padding: 1rem 0;
  font-size: 1.75rem;
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
            <Paragraph>
              I'm a designer, developer and dad. I started Phifer Web Solutions
              working with micro-businesses and non-profits because I wanted to
              provide for my family while doing something I love. And I love
              solving problems for people; digging into all the technical things
              so you don't have to.
            </Paragraph>
          </Words>
        </Container>
      ))}
    </>
  )
}
