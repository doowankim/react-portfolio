import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './router';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
`;

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Router />
		</div>
	);
};

export default App;
