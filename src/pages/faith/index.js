import MuxPlayer from '@mux/mux-player-react'
import * as React from 'react'
import styled from 'styled-components'

const HeroStyles = styled.div`
  width: 100vw;
  height: 100dvh;
  background-image: radial-gradient(hotpink, purple);
`
const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  mux-player {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`

export default function IndexPage() {
  return (
    <HeroStyles id="top">
      <VideoContainer>
        <MuxPlayer
          streamType="on-demand"
          playbackId="AVcpNmey2oXjaU6zfLBCk9H003amzMSbPvTXc26OW44E"
          metadataVideoTitle="Faiths Video"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
        />
      </VideoContainer>
    </HeroStyles>
  )
}
