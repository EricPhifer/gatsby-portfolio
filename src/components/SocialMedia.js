import { graphql, useStaticQuery } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'
import React from 'react'
import styled from 'styled-components'
import { TbSocial } from 'react-icons/tb'

const SMContained = styled.div`
  width: 5rem;
  min-height: 5rem;
  padding: 0.25rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 12rem;
  box-shadow: 0px 0px 1.8px rgba(0, 0, 0, 0.026),
    0px 0px 4.3px rgba(0, 0, 0, 0.037), 0px 0px 7.7px rgba(0, 0, 0, 0.046),
    0px 0px 12.6px rgba(0, 0, 0, 0.054), 0px 0px 20.6px rgba(0, 0, 0, 0.063),
    0px 0px 35.7px rgba(0, 0, 0, 0.074), 0px 0px 80px rgba(0, 0, 0, 0.1);
  background: #f4f0ec;
  z-index: 102;
`

const SocialIcon = styled.a`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 1rem 0;
`

const ToggleIcon = styled.div`
  width: 4.68rem;
  height: 4rem;
  border-radius: 50%;
  margin: 1rem 0;
  font-size: 4rem;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`

const SocialToggle = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 101;
  -webkit-user-select: none;
  user-select: none;
  .socialInput {
    display: flex;
    width: 5.4rem;
    height: 5.4rem;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 105;
    bottom: 0.2rem;
    right: 0;
  }
  span {
    display: none;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 101;
    transform-origin: 5px 0;
    background: var(--black);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform: rotate(45deg) translate(-6px, -12px);
  }
  span:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(360deg);
  }
  input:checked ~ div {
    transform: rotate(360deg);
    opacity: 0;
  }

  #social {
    width: 50vw;
    height: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    background: var(--white);
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0.5rem 0 1rem #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  #social li {
    transition-delay: 2s;
  }
  input:checked ~ .menuContainer {
    transform: none;
  }
`

export default function SocialMedia() {
  const { social } = useStaticQuery(graphql`
    query {
      social: allSanitySocialmedia {
        nodes {
          id
          alt
          sitelink
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

  const { nodes } = social
  const [checked, setChecked] = React.useState(false || '')
  return (
    <SMContained>
      <SocialToggle>
        <input
          type="checkbox"
          className="socialInput"
          checked={checked}
          onClick={() => {
            setChecked(old => !old)
          }}
        />
        <ToggleIcon>
          <TbSocial />
        </ToggleIcon>
        <span />
        <span />
        <div id="social" className="socialContainer">
          {nodes.map(node => (
            <SocialIcon
              href={node.sitelink}
              key={node.id}
              rel="noopener"
              target="_blank"
              z
            >
              <SanityImage
                {...node.image}
                alt={node.alt}
                style={{
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </SocialIcon>
          ))}
        </div>
      </SocialToggle>
    </SMContained>
  )
}
