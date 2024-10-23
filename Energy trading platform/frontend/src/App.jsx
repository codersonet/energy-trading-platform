import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import DotGridBackground from './components/DotGridBackground';
import './App.css'; // Assuming this is where you have global styles

function App() {
  return (
    <MainWrapper>
      <DotGridBackground />
      <Navbar />
      {/* More components will be added here in future */}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export default App;
