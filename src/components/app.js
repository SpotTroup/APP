//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: app.js 
// Comments: JS file for App and Homepage as the Router for sides
// Caller: /route/index.js 
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 

*/

//=========================================================================================
// Structure 
//=========================================================================================

/**
* Index
* @class S
* @constructor 
* @extends 
* @functions
* @useEffect to prevend window undefind errors
* @return
*/

//=========================================================================================

import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import "tailwindcss/tailwind.css"

// Elements from all sides
import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Fishing from '../routes/fishing';
import Cleaner from '../routes/cleaner';
import Shop from '../routes/shop';
import Production from '../routes/production';
import Parking from '../routes/parking';

// Settings
import Profile from '../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
		 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
		 *	@param {string} event.url	The newly routed URL
		 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
			<Provider value={props}>
				<div>
						<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Fishing path="/fishing" />
						<Cleaner path="/cleaner" />
						<Shop path="/shop" />
						<Production path="/production" />
						<Parking path="/parking" />
						<Profile path="/profile" />
					</Router>
				</div>
			</Provider>
		);
	}
}

