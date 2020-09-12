import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../containers';

const Router = () => {
	return (
		<BrowserRouter>
			<Home />
			<Switch>
				<Route />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
