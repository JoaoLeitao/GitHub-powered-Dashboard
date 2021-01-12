import React from 'react';
import styled from 'styled-components';
import { NAV_HEIGHT } from '../components/Nav/Nav';

const H1 = styled.h1`
  color: red;
  font-size: 3rem;
  display: flex;
  width: 100%;
  min-height: calc(100vh - ${NAV_HEIGHT});
  align-items: center;
  justify-content: center;
`;

const NotFound = () => (
  <main>
    <H1>
      404, Page Not Found
    </H1>
  </main>
);

export default NotFound;
