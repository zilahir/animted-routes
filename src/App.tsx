import React from 'react';

import { AnimatedRoutes, RouteTransition } from './components/RouteTransition'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Welcome from './pages/Welcome';
import SubPage from './pages/SubPage';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AnimatedRoutes exitBeforeEnter initial={false}>
					<RouteTransition exact path="/" slideUp={30}>
						<Home />
					</RouteTransition>
					<RouteTransition exact path="/welcome" slideUp={30}>
						<Welcome />
					</RouteTransition>
					<RouteTransition exact path="/demo" slideUp={30}>
						<SubPage />
					</RouteTransition>
				</AnimatedRoutes>	
			</BrowserRouter>
		</div>
		);
	}
	
	export default App;
	