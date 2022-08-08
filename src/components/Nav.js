import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';

const NavStyles = styled.div`
  height: 100vh;
  width: 100px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 12rem;
  }
  .footer {
    width: 50px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 25px;
    height: 10px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Footer Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 75px;
    height: 75px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
    padding: 0;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1.1rem 2.5rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const TabletNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  height: 100vh;
  width: 100px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    margin-left: 2rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 12rem;
  }
  .footer {
    width: 50px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    display: flex;
    justify-content: space-evenly;
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 25px;
    height: 10px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Menu Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 75px;
    height: 75px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1.1rem 2.5rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
      li {
        padding: 0;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
  @media only screen and (max-width: 900px) {
    width: 50px;
    .navigation li {
      transform: rotate(-90deg);
      padding: 4rem 0;
    }
    nav {
      margin-top: 5rem;
    }
    .logo {
      width: 50px;
    }
    .footer {
      width: 25px;
    }
    .triangle {
      width: 15px;
      height: 5px;
    }
    input {
      width: 50px;
      height: 50px;
    }
  }
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  height: 100vh;
  width: 50px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .navigation li {
    height: 60px;
    transform: rotate(-90deg);
    padding: 4rem 0 0;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 50px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 5rem;
  }
  .footer {
    width: 25px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    display: flex;
    justify-content: space-evenly;
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 15px;
    height: 5px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Menu Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1rem 2.5rem;
      font-size: 1.1rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
      li {
        padding: 0;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
`;


export default function Nav() {
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
const [checked, setChecked] = React.useState(true || '');
  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" key={node.id}>
          <NavStyles>
            <div className="navContainer">
              <Link to='/' className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </Link>
                <nav>
                  <ul className='navigation'>
                    {node.nativelinks.map((nlink) => (
                      <Link to={nlink.pagelink} key={nlink._key} rel="noreferrer">
                        <li> {nlink.pagename}</li>
                      </Link>
                    ))}
                    {node.externallinks.map((elink) => (
                      <a href={elink.pagelink} key={elink._key} rel="noreferrer">
                        <li> {elink.pagename} </li>
                      </a>
                    ))}
                  </ul>
                </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </NavStyles>
          <TabletNavStyles>
            <div className="navContainer">
              <Link to='/' className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </Link>
                <nav>
                  <ul className='navigation'>
                    {node.nativelinks.map((nlink) => (
                      <Link to={nlink.pagelink} key={nlink._key} rel="noreferrer">
                        <li> {nlink.pagename}</li>
                      </Link>
                    ))}
                    {node.externallinks.map((elink) => (
                      <a href={elink.pagelink} key={elink._key} rel="noreferrer">
                        <li> {elink.pagename}</li>
                      </a>
                    ))}
                  </ul>
                </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
          <div className="navContainer">
              <Link to='/' className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </Link>
                <nav>
                  <ul className='navigation'>
                    {node.nativelinks.map((nlink) => (
                      <Link to={nlink.pagelink} key={nlink._key} rel="noreferrer">
                        <li> {nlink.pagename}</li>
                      </Link>
                    ))}
                    {node.externallinks.map((elink) => (
                      <a href={elink.pagelink} key={elink._key} rel="noreferrer">
                        <li> {elink.pagename}</li>
                      </a>
                    ))}
                  </ul>
                </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                    className='bottom'
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </MobileNavStyles>
        </div>
      ))} 
    </>
  );
}
