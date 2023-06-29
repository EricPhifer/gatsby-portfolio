import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Section = styled.section`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

const Slider = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
`

const Slides = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::marker {
    position: absolute;
    top: 0;
  }
`

const Slide = styled.a`
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  flex-shrink: 0;
  border-radius: 1rem;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  font-size: 10rem;
  color: var(--white);
  img {
    max-height: 50rem;
  }
  &:target {
    transform: scale(0.8);
  }
`

const LinkContainer = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    360deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(31, 31, 31, 0.77) 15%,
    rgba(31, 31, 31, 0.6) 30%,
    rgba(31, 31, 31, 0.45) 45%,
    rgba(31, 31, 31, 0.3) 60%,
    rgba(31, 31, 31, 0.15) 77%,
    rgba(250, 250, 250, 0) 100%
  );
`

const Github = styled.a`
  width: 30%;
  display: flex;
  justify-content: end;
  svg {
    margin: 0 2rem 2rem 0;
    background: var(--white);
    border-radius: 50%;
    font-size: 5rem;
    color: var(--green);
    &:hover {
      color: var(--red);
    }
    @media only screen and (max-width: 450px) {
      font-size: 2.5rem;
    }
  }
`

const Business = styled.a`
  width: 70%;
  margin-left: 2rem;
  font-size: 3rem;
  color: var(--mint);
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  transition: 0.15s all ease-in-out;
  &:hover {
    color: var(--red);
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`

const Pagination = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

const Nav = styled(Link)`
  height: 1.5rem;
  flex: 0 0 1.5rem;
  padding: 2.15rem 2rem 2rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: lightgray;
  color: var(--black);
  text-decoration: none;
  &:active {
    top: 0.1rem;
  }
  &:focus {
    background: var(--green);
    color: var(--white);
  }
  &:hover {
    background: var(--green);
    color: var(--white);
  }
`

export default function Portfolio() {
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
            githublink
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
        <Section>
          <Slider>
            <Slides>
              {home.projectlist.map((project, index) => (
                <Slide id={`slide${index}`} key={project.id}>
                  <SanityImage
                    {...project.desktopimage}
                    alt={project.desktopalt}
                    style={{
                      objectFit: 'cover',
                      auto: 'format',
                    }}
                  />
                  <LinkContainer>
                    <Business
                      href={project.projectlink}
                      rel="noreferrer noopener"
                      className="busName"
                    >
                      {project.projectname}
                    </Business>
                    <Github href={project.githublink} rel="noreferrer noopener">
                      <FaGithub />
                    </Github>
                  </LinkContainer>
                </Slide>
              ))}
            </Slides>
          </Slider>
          <Pagination>
            {home.projectlist.map((node, index) => (
              <Nav to={`#slide${index}`} key={node.id}>
                {node.projectname
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </Nav>
            ))}
          </Pagination>
        </Section>
      ))}
    </>
  )
}
