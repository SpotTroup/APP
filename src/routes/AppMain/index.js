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
// Comments: JS file for AppMain
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
/*
* TODO: 
* 1. Add Logo @ the top top
* 2. Set card-main with actual position
* 3. Set card-main with overlay buttons of hexagons as link 
* 4. Set card fast search
* 5. Set card actual activities
* 6. Set top informations from homepage
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



const AppMain = () => {
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

export default AppMain ;