import React from 'react';
import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import NavLeft from '../components/NavLeft';
import Seo from '../components/Seo';
import contactbg from '../assets/images/contactbg.png';

const HomeStyles = styled.div`
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .landing {
    width: 100vw;
  }
  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 7rem;
    font-weight: bold;
    cursor: default;
  }
  .hint {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  .words {
    position: absolute;
    left: 125px;
    bottom: 100px;
    .elevate:hover {
      color: var(--green);
      text-shadow: 1px 2px var(--white);
    }
    .hint {
      color: var(--white);
      font-size: 1.5rem;
    }
  }
  .image {
    width: 80vmin;
    position: absolute;
    bottom: -17rem;
    right: 0;
    opacity: 0.5;
    img {
      width: 80vmin;
    }
  }
  .scrollIndicator {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex:
    flex-flow: column nowrap;
    transform: rotate(90deg);
    .scrollWords {
      font-size: 1.25rem;
      padding: 0.25rem;
    }
    .triangle {
      width: 75px;
      height: 25px;
      background-image: linear-gradient(
          to bottom right,
          transparent 50%,
          var(--white) 0
        ),
        linear-gradient(to top right, var(--white) 50%, transparent 0);
      background-size: 50% 70%;
      background-repeat: no-repeat;
      background-position: left, right;
      animation: bounce 1s infinite alternate;
    }
  }
  
    @keyframes bounce {
      from {
        transform: translateY(-5px);
      }
      to {
        transform: translateY(0);
      }
    }

  .responsiveFlex {
    @media only screen and (max-height: 722px) {
      display: inline-flex;
      height: 65vh;
      align-items: baseline;
      .invert {
        flex-flow: row-reverse nowrap;
      }
      .mobileView {
        margin: 2rem;
      }
    }
  }
  .projectContainer {
    height: 100vh;
    width: 100%;
    transform: translateX(100vw);
    position: relative;
    .buttonesque {
      width: 100%;
      height: 60px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--green);
      a {
        width: 95vw;
        height: 100%;
        margin-top: 4rem;
        position: sticky;
        left: -57%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        text-align: center;
      }
      &:hover {
        background-color: var(--mint);
        a {
          color: var(--green);
        }
      }
    }
  }
  .inlineContainer {
    height: 85%;
  }
  .project {
    width: 60rem;
    margin-top: 2rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .desktopView {
     max-width: 35rem;
    }
    .tabletView {
      width: 20rem;
      margin: 7rem 0 0 7rem;
    }
    .mobileView {
      width: 10rem;
      margin-top: 2rem;
    }
    .businessName {
      margin-top: 2rem;
      font-size: 3rem;
      color: var(--white);
      &:hover {
        color: var(--red);
        text-shadow: 1px 0 0 var(--white);
      }
    }
  }

  @media only screen and (max-height: 815px) {
    .inlineContainer {
      height: 92%;
    }
    .projectContainer {
      width: 100%;
    }
    .project {
      margin: 2vmin 10vmin;
      .mobileView {
        width: 12vmin;
      }
      .tabletView {
        width: 23vmin;
      }
    }
  }
  @media only screen and (max-height: 650px) {
    .image {
      bottom: -9rem;
    }
    .words p {
      font-size: 5rem;
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 500px) and (orientation: landscape) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${contactbg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        font-size: 5rem;
        span {
          color: var(--bg);
        }
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletHomeStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .landing {
    width: 100vw;
  }
  .landingContainer {
    display: inline-flex;
  }
  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 7vmin;
    font-weight: bold;
    cursor: default;
    @media only screen and (max-width: 975px) {
      font-size: 6vmin;
    }
  }
  .hint {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  .words {
    position: absolute;
    left: 125px;
    bottom: 30px;
    .hint {
      color: var(--white);
      font-size: 1.5rem;
    }
    .elevate:hover {
      color: var(--green);
      text-shadow: 1px 2px var(--white);
    }
    @media only screen and (max-width: 900px) {
      left: 70px;
    }
  }
  .image {
    width: 75vmin;
    position: absolute;
    bottom: -14rem;
    right: 0;
    opacity: 0.5;
    img {
      width: 75vmin;
    }
    @media only screen and (max-width: 700px) {
      width: 103vmin;
      img {
        width: 103vmin;
      }
    }
  }
  .scrollIndicator {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex:
    flex-flow: column nowrap;
    transform: rotate(90deg);
    .scrollWords {
      font-size: 1.25rem;
      padding: 0.25rem;
      @media only screen and (max-width: 900px) {
        padding-bottom: 0;
        transform: rotate(180deg);
      }
    }
    .triangle {
      width: 75px;
      height: 25px;
      background-image: linear-gradient(
          to bottom right,
          transparent 50%,
          var(--white) 0
        ),
        linear-gradient(to top right, var(--white) 50%, transparent 0);
      background-size: 50% 70%;
      background-repeat: no-repeat;
      background-position: left, right;
      animation: bounce 1s infinite alternate;
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(0);
    }
  }

  .projectContainer {
    height: 100vh;
    width: 100%;
    transform: translateX(100vw);
    position: relative;
    .buttonesque {
      width: 100%;
      height: 60px;
      display: flex;
      position: fixed;
      bottom: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--green);
      a {
        width: 95vw;
        height: 100%;
        margin-top: 4rem;
        position: sticky;
        left: -60%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        text-align: center;
        @media only screen and (max-width: 900px) {
          left: -65%;
        }
        @media only screen and (max-width: 600px) {
          left: -70%;
        }
      }
      &:hover {
        background-color: var(--mint);
        a {
          color: var(--green);
        }
      }
    }
  }
  .responsiveFlex {
    @media only screen and (max-height: 722px) {
      display: inline-flex;
      height: 65vh;
      align-items: baseline;
      .invert {
        flex-flow: row-reverse nowrap;
      }
      .mobileView {
        margin: 2rem;
      }
    }
  }
  .inlineContainer {
    height: 85%;
    margin-right: 5rem;
  }
  .project {
    min-width: 400px;
    margin: 2vmin 15vmin;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .inline {
      max-width: 400px;
    }
    .desktopView {
      width: 34rem;
    }
    .tabletView {
      width: 19rem;
      margin: 7rem 0 0 7rem;
    }
    .mobileView {
      width: 10rem;
      margin-top: 2rem;
    }
    .businessName {
      margin-top: 2rem;
      font-size: 3rem;
      color: var(--white);
      &:hover {
        color: var(--blue);
        text-shadow: 1px 0 0 var(--white);
      }
    }
  }
  @media only screen and (max-height: 815px) {
    .inlineContainer {
      height: 92%;
    }
    .projectContainer {
      width: 100%;
    }
    .project {
      margin: 2vmin 10vmin;
      .mobileView {
        width: 12vmin;
      }
      .tabletView {
        width: 23vmin;
      }
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 500px) and (orientation: landscape) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${contactbg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        span {
          color: var(--bg);
        }
      }
    }
  }
`;

const MobileHomeStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .landing {
    width: 100vw;
  }
  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 6vmin;
    font-weight: bold;
    cursor: default;
  }
  .hint {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  .words {
    position: absolute;
    left: 7rem;
    bottom: 8rem;
    .hint {
      color: var(--white);
      font-size: 1.5rem;
    }
    .elevate:hover {
      color: var(--green);
      text-shadow: 1px 2px var(--white);
    }
  }
  .image {
    width: 103vmin;
    position: absolute;
    bottom: -2rem;
    right: 0;
    opacity: 0.5;
    img {
      width: 103vmin;
    }
  }
  .scrollIndicator {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex:
    flex-flow: column nowrap;
    transform: rotate(90deg);
    .scrollWords {
      font-size: 1rem;
      padding: 0.5rem 0.25rem 0;
      transform: rotate(180deg);
    }
    .triangle {
      width: 60px;
      height: 15px;
      background-image: linear-gradient(
          to bottom right,
          transparent 50%,
          var(--white) 0
        ),
        linear-gradient(to top right, var(--white) 50%, transparent 0);
      background-size: 50% 70%;
      background-repeat: no-repeat;
      background-position: left, right;
      animation: bounce 1s infinite alternate;
    }
  }

  @keyframes bounce {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(0);
    }
  }

  .responsiveFlex {
    @media only screen and (max-height: 722px) {
      display: inline-flex;
      height: 65vh;
      align-items: baseline;
      .invert {
        flex-flow: row-reverse nowrap;
      }
      .mobileView {
        margin: 2rem;
      }
    }
  }
  
  .projectContainer {
    height: 100vh;
    width: 100%;
    transform: translateX(100vw);
    position: relative;
    .buttonesque {
      width: 100%;
      height: 60px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--green);
      a {
        width: 95vw;
        height: 100%;
        margin-top: 4rem;
        position: sticky;
        left: -100%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        text-align: center;
      }
      &:hover {
        background-color: var(--mint);
        a {
          color: var(--green);
        }
      }
    }
  }
  .inlineContainer {
    margin-right: 5rem;
  }
  .project {
    height: calc(100% - 100px);
    margin: 2rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .inline {
      width: 300px;
    }
    @media only screen and (max-height: 700px) {
      margin: 2rem;
    }
    .desktopView {
      height: 50%;
      @media only screen and (max-height: 785px) {
        width: 80vmin;
      }
    }
    .tabletView {
      width: 30rem;
      margin: 7rem 0 0 3rem;
      @media only screen and (max-height: 785px) {
        width: 40vmin;
      }
    }
    .mobileView {
      width: 15rem;
      margin-top: 2rem;
      @media only screen and (max-height: 785px) {
        width: 22vmin;
      }
    }
    .businessName {
      margin-top: 2rem;
      font-size: 2rem;
      color: var(--white);
      &:hover {
        color: var(--red);
        text-shadow: 1px 0 0 var(--white);
      }
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 650px) and (orientation: landscape) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${contactbg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        span {
          color: var(--bg);
        }
      }
    }
  }
`;

export default function HomePage({ data }) {
  const homepage = data.homepage.nodes;
  return (
    <>
      <Seo title="Home Page" />
      <NavLeft />
      <HomeStyles>
        <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>. Now turn to portrait mode to view the website.
          </p>
        </div>
        {homepage.map((home) => (
          <div className='nodeParser landingContainer' key={home.id}>
            <div className='landing'>
              <div className='image'>
                <SanityImage 
                  {...home.image}
                  alt={home.title}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <div className='words'>
                <p>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>C</span>
                  {' '}
                  <span className='elevate'>P</span>
                  <span className='elevate'>H</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>F</span>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                </p>
                <p>
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>S</span> 
                  <span className='elevate'>I</span> 
                  <span className='elevate'>G</span> 
                  <span className='elevate'>N</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'. '}
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>V</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>L</span> 
                  <span className='elevate'>O</span> 
                  <span className='elevate'>P</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'.'}
                </p>
                <div className='hint'>hint: scroll right</div>
              </div>
            <div className='scrollIndicator'>
              <div className='triangle' />
              <p className='scrollWords'>Projects</p>
            </div>
          </div>
          <section className='projectContainer'>
            <div className='inline inlineContainer'>
              {home.projectlist.map((project) => (
                <a href={project.projectlink} rel="noreferrer" className='project' key={project.id}>
                  <div className='responsiveFlex'>
                    <div className='desktopView'>
                      <SanityImage 
                        {...project.desktopimage}
                        alt={project.desktopalt}
                        style={{
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                        />
                    </div>
                    <div className='center invert inline'>
                      <div className='mobileView'>
                        <SanityImage 
                          {...project.mobileimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                          />
                      </div>
                      <div className='tabletView'>
                        <SanityImage 
                          {...project.tabletimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                          />
                      </div>
                    </div>
                  </div>
                  <div className='businessName'> {project.projectname} </div>
                </a>
              ))}
              </div>
              <div className='buttonesque'>
                <a 
                  href="https://services.ericphifer.com" 
                  rel="noreferrer" 
                >
                  Services &amp; Pricing
                </a>
              </div>
          </section>
        </div>
      ))}
      </HomeStyles>
      <TabletHomeStyles>
      <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>. Now turn to portrait mode to view the website.
          </p>
        </div>
      {homepage.map((home) => (
          <div className='nodeParser' key={home.id}>
            <div className='landing'>
              <div className='image'>
                <SanityImage 
                  {...home.image}
                  alt={home.title}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <div className='words'>
                <p>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>C</span>
                  {' '}
                  <span className='elevate'>P</span>
                  <span className='elevate'>H</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>F</span>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                </p>
                <p>
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>S</span> 
                  <span className='elevate'>I</span> 
                  <span className='elevate'>G</span> 
                  <span className='elevate'>N</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'. '}
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>V</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>L</span> 
                  <span className='elevate'>O</span> 
                  <span className='elevate'>P</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'.'}
                </p>
                <div className='hint'>hint: scroll right</div>
              </div>
            <div className='scrollIndicator'>
              <div className='triangle' />
              <p className='scrollWords'>Projects</p>
            </div>
          </div>
          <section className='projectContainer'>
            <div className='inline inlineContainer'>
              {home.projectlist.map((project) => (
                <a href={project.projectlink} rel="noreferrer" className='project' key={project.id}>
                  <div className='responsiveFlex'>
                    <div className='desktopView'>
                      <SanityImage 
                        {...project.desktopimage}
                        alt={project.desktopalt}
                        style={{
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                        />
                    </div>
                    <div className='center invert inline'>
                      <div className='mobileView'>
                        <SanityImage 
                          {...project.mobileimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                          />
                      </div>
                      <div className='tabletView'>
                        <SanityImage 
                          {...project.tabletimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                          />
                      </div>
                    </div>
                  </div>
                  <div className='businessName'>{project.projectname}</div>
                </a>
              ))}
              </div>
              <div className='buttonesque'>
                <a 
                  href="https://services.ericphifer.com" 
                  rel="noreferrer" 
                >
                  Services &amp; Pricing
                </a>
              </div>
          </section>
        </div>
      ))}
      </TabletHomeStyles>
      <MobileHomeStyles>
        <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>. Now turn to portrait mode to view the website.
          </p>
        </div>
      {homepage.map((home) => (
          <div className='nodeParser' key={home.id}>
            <div className='landing'>
              <div className='image'>
                <SanityImage 
                  {...home.image}
                  alt={home.title}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <div className='words'>
                <p>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>C</span>
                  {' '}
                  <span className='elevate'>P</span>
                  <span className='elevate'>H</span>
                  <span className='elevate'>I</span>
                  <span className='elevate'>F</span>
                  <span className='elevate'>E</span>
                  <span className='elevate'>R</span>
                </p>
                <p>
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>S</span> 
                  <span className='elevate'>I</span> 
                  <span className='elevate'>G</span> 
                  <span className='elevate'>N</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'. '}
                  <span className='elevate'>D</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>V</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>L</span> 
                  <span className='elevate'>O</span> 
                  <span className='elevate'>P</span> 
                  <span className='elevate'>E</span> 
                  <span className='elevate'>R</span> 
                  {'.'}
                </p>
                <div className='hint'>hint: scroll right</div>
              </div>
            <div className='scrollIndicator'>
              <div className='triangle' />
              <p className='scrollWords'>Projects</p>
            </div>
          </div>
          <section className='projectContainer'>
            <div className='inline inlineContainer'>
              {home.projectlist.map((project) => (
                <a href={project.projectlink} rel="noreferrer" className='project' key={project.id}>
                  <div className='responsiveFlex'>
                    <div className='desktopView'>
                      <SanityImage 
                        {...project.desktopimage}
                        alt={project.desktopalt}
                        style={{
                          objectFit: 'cover',
                          auto: 'format',
                        }}
                      />
                    </div>
                    <div className='center invert inline'>
                      <div className='mobileView'>
                        <SanityImage 
                          {...project.mobileimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                        />
                      </div>
                      <div className='tabletView'>
                        <SanityImage 
                          {...project.tabletimage}
                          alt={project.desktopalt}
                          style={{
                            objectFit: 'cover',
                            auto: 'format',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='businessName'>{project.projectname}</div>
                </a>
              ))}
              </div>
              <div className='buttonesque'>
                <a 
                  href="https://services.ericphifer.com" 
                  rel="noreferrer" 
                >
                  Services &amp; Pricing
                </a>
              </div>
          </section>
        </div>
      ))}
      </MobileHomeStyles>
    </>
  );
}

export const query = graphql`
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
`;
