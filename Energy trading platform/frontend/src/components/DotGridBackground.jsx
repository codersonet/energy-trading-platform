import React from 'react';
import styled, { keyframes } from 'styled-components';

const DotGridBackground = () => {
  return <Grid></Grid>;
};

const moveDiagonally = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(gray 1px, transparent 1px);
  background-size: 20px 20px;
  animation: ${moveDiagonally} 10s linear infinite;
  opacity: 0.3;
`;

export default DotGridBackground;
