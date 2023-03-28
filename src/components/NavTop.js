import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';

const Navigation = styled.nav`
  width: 98vw;
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--bg);
  display: inline-flex;
  padding: 1rem;
  box-shadow: .3rem .3rem 1rem var(--black);
  color: var(--white);
  z-index: 99;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0;
  }
  .center {
    align-self: center;
    justify-self: center;
    text-align: center;
  }
  .half {
    width: 50vw;
  }
  .right {
    display: right;
    justify-content: end;
  }
  ul {
    width: 100%;
    height: calc(100% - 2rem);
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 0;
    li {
      color: var(--white);
      font-size: 1.5rem;
      font-weight: bold;
    }
    li[aria-current='page'] {
      border-bottom: 1.5px solid var(--white);
    }
    a {
      font-size: 1.75rem;
      padding: 1.3rem;
      color: var(--white);
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        font-size: 2rem;  
      }
    }
  }

  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileNavigation = styled.nav`
  width: 98vw;
  height: 8rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--bg);
  box-shadow: .3rem .3rem 1rem var(--black);
  z-index: 107;
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #logo {
    width: 7.7rem;
    height: 7.7rem;
  }
  .half {
    width: 50vw;
  }
  // Menu Open & Close
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 101;
    -webkit-user-select: none;
    user-select: none;
  }
  .menuInput {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 102;
    bottom: 5px;
    right: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 101;
    transform-origin: 5px 0;
    background: var(--white);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-6px, -12px);
    background: var(--black);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
    background: var(--black);
  }
  #menu {
    width: 50vw;
    height: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    background: var(--white);
    display: flex;
    flex-flow: column nowrap;
    box-shadow: .5rem 0 1rem #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    overflow-x: hidden;
  }
  #menu li {
    transition-delay: 2s;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  // End Menu Section

  ul {
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0;
    flex-flow: row wrap;
    list-style-type: none;
    padding: 0;
    justify-content: space-evenly;
    li {
      font-size: 2rem;
      font-weight: bold; 
      color: var(--white);
    }
    a {
      padding: 2rem;
      font-size: 2rem;
      color: var(--black);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.5s ease;
      text-decoration: none;
      &:hover {
        border-bottom: var(--white);
      }
      &[aria-current='page'] {
        border-bottom: var(--white);
      }
    }
    @media only screen and (max-width: 325px) {
      a {
        font-size: 1.8rem;
      }
    }
  }
  .navList {
    height: 50%;
  }

  // Drop Menu Addition
  .opendrop {
    width: 240px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 102;
  }
  .closedrop {
    width: 40px;
    height: 80px;
    position: absolute;
    top: 45.5%;
    right: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 104;
  }
  .inputFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top 1.5rem;
  }
  #dropmenu {
    width: 80%;
    margin: 0 auto;
    background-color: var(--gold);
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(120%, 0%);
    transition: all 0.5s ease;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;
    z-index: 103;
  }
  #dropmenu li {
    transition-delay: 2s;
    margin-top: 1rem;
  }
  #dropToggle input:checked ~ .dropContainer {
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .dropContainer .caretRight {
    position: absolute;
    right: 0;
    top: 50%;
  }
  // End Drop Menu

  /* Landscape Mode */
  @media only screen and (max-height: 500px) {
    ul {
      margin: 0 auto;
      justify-content: start;
    }
    .icons {
      width: 100px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
    }
    #dropmenu {
      transform: translate(135%, 0%);
    }
    .inputFlex {
      margin-top: 1.5rem;
      align-items: end;
    }
  }
  /* Hide menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
`;


export default function NavTop() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityNavigation {
          nodes {
            id
            mainalt
            footeralt
            externallinks {
              pagelink
              _key
              pagename
            }
            nativelinks {
              pagename
              pagelink
              _key
            }
            mainlogo {
              asset {
                id
              }
              ...ImageWithPreview
            }
            footericon {
              asset {
                id
              }
              ...ImageWithPreview
            }
          }
        }
      }
  `)

const nodes = navigation.nodes;
const [checked, setChecked] = React.useState(false || '');
  return (
    <>
      {nodes.map((node) => (
        <Navigation key={node.id}>
          <Link to='/' className="half" id="logo">
            <SanityImage 
              {...node.mainlogo} 
              alt={node.mainalt}
              style={{
                width: '7.7rem',
                height: '7.7rem',
                objectFit: 'contain',
                auto: 'format',
              }}
            />
          </Link>
          <div className="half right">
            <ul className='inline'>
              {node.nativelinks.map((nlink) => (
                <li>
                  <Link to={nlink.pagelink} key={nlink._key}>
                    {nlink.pagename}
                  </Link>
                </li>
              ))}
              {node.externallinks.map((elink) => (
                <li key={elink._key}>
                  <a href={elink.pagelink} rel="noopener">
                    {elink.pagename}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Navigation>
      ))}
      {nodes.map((node) => (
        <MobileNavigation key={node.id}>
          <Link to='/' className="inline half" id="logo">
            <SanityImage 
              {...node.mainlogo} 
              alt={node.mainalt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                auto: 'format',
              }}
            />
          </Link>
          <div id="menuToggle" key={node.id}>
            <input 
              type="checkbox" 
              className='menuInput'
              checked={checked}
              onClick={() => {setChecked(old => !old)}} 
            />
            <span />
            <span />
            <span />
            <div id="menu" className="menuContainer">
              <div className="navList flex center">
                <ul className='flex'>
                  {node.nativelinks.map((nlink) => (
                    <li>
                      <Link to={nlink.pagelink} key={nlink._key}>
                        {nlink.pagename}
                      </Link>
                    </li>
                  ))}
                  {node.externallinks.map((elink) => (
                    <li key={elink._key}>
                      <a href={elink.pagelink} rel="noopener">
                        {elink.pagename}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </MobileNavigation>
      ))}
    </>
  );
}
