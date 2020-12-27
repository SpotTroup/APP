import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/AppMap';
import Profile from '../routes/PageBooking';
import Mainpage from '../routes/PageHome';

const App = () => (
	<div id="app">
	
		<Router>
			<Mainpage path="/" />
			<Home path = "/home"/>
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
		
	</div>
)

export default App;
