import { PortableText, defaultComponents } from '@portabletext/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import React from 'react'
import { PiArrowArcRightBold } from 'react-icons/pi'
import styled from 'styled-components'

const HomeStyles = styled.div`
  max-width: 108rem;
  min-height: 100dvh;
  margin: 0 auto;
  padding-top: 9rem;
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 100%;
  gap: 2rem;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
`

const LightningStyles = styled.a`
  --link-height: 6rem;
  max-width: 90rem;
  margin-top: 5rem;
  display: inline-flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media only screen and (max-width: 500px) {
    padding: 2rem 2rem 18rem;
  }
`
const ProductCard = styled.div`
  --card-width: 27rem;
  width: var(--card-width);
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0.5px 0.5px 1.2px rgba(0, 0, 0, 0.011),
    1px 1px 2.7px rgba(0, 0, 0, 0.016), 1.7px 1.7px 4.6px rgba(0, 0, 0, 0.019),
    2.6px 2.6px 6.9px rgba(0, 0, 0, 0.022),
    3.8px 3.8px 10px rgba(0, 0, 0, 0.025),
    5.3px 5.3px 14.2px rgba(0, 0, 0, 0.028),
    7.5px 7.5px 20.1px rgba(0, 0, 0, 0.031),
    11px 11px 29.2px rgba(0, 0, 0, 0.034),
    16.9px 16.9px 45px rgba(0, 0, 0, 0.039), 30px 30px 80px rgba(0, 0, 0, 0.05);
  p {
    padding: 0.75rem;
    font-size: 1.6rem;
    line-height: 1.2;
  }
`

const Image = styled.div`
  position: relative;
  border-radius: 0.5rem 0.5rem 0 0;
  img {
    width: var(--card-width);
    height: 20rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 1.8;
`

const Examples = styled(Link)`
  width: 100%;
  height: var(--link-height);
  margin-bottom: var(--link-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hero-yellow);
  color: var(--white);
  font-variant: small-caps;
  text-weight: bold;
  font-size: 2.25rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: transparent;
    color: var(--hero-yellow);
  }
`

const Intake = styled(Link)`
  width: 100%;
  height: var(--link-height);
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);
  font-variant: small-caps;
  text-weight: bold;
  font-size: 2.25rem;
  border-radius: 0 0 0.5rem 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: transparent;
    color: var(--blue);
  }
`

export default function LightningExamples() {
  const { example } = useStaticQuery(graphql`
    query {
      example: allSanityLightningex {
        nodes {
          id
          alt
          link
          examplelink
          landinglink
          title
          _rawDescription
          image {
            asset {
              id
            }
            ...ImageWithPreview
          }
        }
      }
    }
  `)
  const { nodes } = example
  return (
    <HomeStyles>
      <LightningStyles>
        {nodes.map(bundle => (
          <ProductCard key={bundle.id}>
            <Image>
              <SanityImage
                {...bundle.image}
                alt={bundle.alt}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </Image>
            <Title>{bundle.title}</Title>
            <PortableText
              value={bundle._rawDescription}
              components={defaultComponents}
            />

            <Examples
              href={bundle.examplelink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit Site
            </Examples>
            <Intake to={bundle.link}>
              Apply Now <PiArrowArcRightBold />
            </Intake>
          </ProductCard>
        ))}
      </LightningStyles>
    </HomeStyles>
  )
}
