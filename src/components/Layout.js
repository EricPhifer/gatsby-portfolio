import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import NavTop from './NavTop';

const SiteStyles = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: inline-flex;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <NavTop />
        {children}
      </SiteStyles>
    </>
  );
}
