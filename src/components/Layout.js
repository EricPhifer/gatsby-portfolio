import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100dvh;
  display: inline-flex;
`

// eslint-disable-next-line
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>{children}</SiteStyles>
    </>
  )
}
