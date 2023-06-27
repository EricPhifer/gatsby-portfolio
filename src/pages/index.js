import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'

const HomeStyles = styled.div`
  max-width: 108rem;
  margin: 0 auto;
  padding-top: 9rem;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

const LandingContainer = styled.div``

const HR = styled.hr`
  border: 0;
  height: 2rem;
  margin: 0 auto;
  background-image: linear-gradient(
    to right,
    var(--mint),
    var(--green),
    var(--mint)
  );
`

const Title = styled.h1`
  font-size: 2.5rem;
  padding: 0 1rem;
  text-align: center;
  font-variant: small-caps;
  font-weight: 600;
`

export default function HomePage() {
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
    <HomeStyles>
      {nodes.map(home => (
        <LandingContainer key={home.id}>
          <Intro />
          <HR />
          <Title>My Portfolio</Title>
          <HR />
          <Portfolio />
        </LandingContainer>
      ))}
    </HomeStyles>
  )
}
