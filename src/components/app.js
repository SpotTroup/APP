import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Mainpage from '../routes/Mainpage';

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
