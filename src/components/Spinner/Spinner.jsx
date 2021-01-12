import React, { memo } from 'react';
import styled from 'styled-components';
import { BLUE } from '../../config/style';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const baseStyle = {
  background: 'none',
  shapeRendering: 'auto',
  pointerEvents: 'none',
  width: '100px',
  height: '100px',
  color: BLUE,
};

export default memo(() => (
  <SpinnerContainer>
    <svg
      className="spinner"
      height="1.25em"
      preserveAspectRatio="xMidYMid"
      style={baseStyle}
      viewBox="0 0 100 100"
      width="1.25em"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="32"
        stroke="currentColor"
        strokeDasharray="50.26548245743669 50.26548245743669"
        strokeLinecap="round"
        strokeWidth="8"
        transform="rotate(221.987 50 50)">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  </SpinnerContainer>
));
