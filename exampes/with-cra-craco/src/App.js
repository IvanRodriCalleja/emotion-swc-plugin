import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

import logo from './logo.svg';

const  AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.head`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const logoAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
      animation: ${logoAnimation} infinite 20s linear;
  }
`;

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <AppContainer>
      <Header className="App-header">
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </AppContainer>
  );
}

export default App;
