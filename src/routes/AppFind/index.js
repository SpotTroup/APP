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
// Comments: JS file for AppFind
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* TODO: 
* 1. Add Logo @ the top (single Hexagon)
* 2. Set card with actual position
* 3. Set search Card for Zip-code-serach field, Start-Button, Street-searchfield. start and end time props ( with clock to set) , and expert modus with popup
* 4. Set search function for parling spaces.
* 5. Set View of spaces.
* 6. Set Notification for  parkingspaces with information about rating , comment, price ( day and hour ) and book button
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
import style from "./style";

const AppFinder = () => {
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

export default AppFinder;