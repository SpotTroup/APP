/*     ___   _____      ___    _________  _________   ______      ___     _    _   ____
 *    / __| | ___  \   /   \   |__    __| |__    __| |  __   \   / _ \   | |  | | |  _  \
 *   / /    | |__| |  / _   \     |  |       |  |    | |__|  |  / / \ \  | |  | | | |_|  |
 *   \ \    |  ___ / |  | |  |    |  |       |  |    |    __/  | |   | | | |  | | |  ___/
 *    \ \   | |      |  | |  |    |  |       |  |    | |\ \    | |   | | | |  | | | |
 *     \ \  | |      |  |_|  |    |  |       |  |    | | \ \   | |   | | | |  | | | |
 *   __/ /  | |       \     /     |  |       |  |    | |  \ \   \ \_/  /  \ \_/ / | |
 *  |___/   |_|        \___/      |__|       |__|    |_|   \_\   \___/     \___/  |_|
 *  ---------------------------------------------------------------------------------------
 *      Parkingspace sharing for everyone -- CO² reduction -- eastsee cleaning 
 * ----------------------------------------------------------------------------------------
 */

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

render(App, document.body);

export default App;
