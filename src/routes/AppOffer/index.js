//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js 
// Comments: JS file for AppOffer
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 
* 1. Add Logo @ the top top                  
* 2. Set card-main with setting props for parkingspace 
* 3. Set card-overview  actual activities
* 4. Set get request of user info
* 5. Set 
* 6. Set
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

import { h, Component } from "preact";
import { Link } from 'preact-router/match';

import '../../css/bootstrap';
import '../../js/bootstrap';
import style from './style.css';



const AppOffer = () => {
    /*
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (
			window !== undefined &&
			window.location.href.includes("#invite_token")
		) {
			const { href } = window.location;
			window.location.href = `${href.substring(
				0,
				href.indexOf("#")
			)}admin${href.substring(href.indexOf("#"))}`;
		}
	}, []);

    return (

        <div>

        

        </div>

    ); 
}

export default AppOffer ;