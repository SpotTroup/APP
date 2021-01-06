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

// Elements from the page
import Header from './header';
import Footer from './footer'


// Code-splitting is automated for routes
import AppBooking from '../routes/AppBooking';
import AppInstall from '../routes/AppInstall';
import AppMain from '../routes/AppMain';
import AppMap from '../routes/AppMap';
import AppOffer from '../routes/AppOffer';
import AppSetings from '../routes/AppSettings';
import NotFound from '../routes/notfound';
import PageBooking from '../routes/PageBooking';
import PageContact from '../routes/PageContact';
import PageHexagon from '../routes/PageHexagon';
import PageHome from '../routes/PageHome';
import PageLetters from '../routes/PageLetters';
import PageRegister from '../routes/PageRegister';
import PageSettings from '../routes/PageSettings';
import PageShop from '../routes/PageShop';
import PageUser from '../routes/PageUser';
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
				<div >
					<Header />
					<Router onChange={this.handleRoute}>

						<PageHome path="/" />
						<PageBooking path="/PageBooking" />
						<PageContact path="/PageContact" />
						<PageHexagon path="/PageHexagon" />
						<PageLetters path="/PageLetters" />
						<PageRegister path="/PageRegister" />
						<PageSettings path="/PageSettings" />
						<PageShop path="/PageShop" />
						<PageUser path="/PageUser" />		

						<AppBooking path="/AppBooking" />
						<AppInstall path="/AppInstall" />
						<AppMain path="/AppMain" />
						<AppMap path="/AppMap" />
						<AppOffer path="/AppOffer" />
						<AppSetings path="/AppSettings" />

						<NotFound path="/notfound" />
					
					</Router>
					<Footer />
				</div>
			</Provider>
		);
	}
}
