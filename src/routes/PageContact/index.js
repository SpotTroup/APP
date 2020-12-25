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
// Comments: JS file for PageContact
// Author: Tjark Ziehm
// Version: 0.01
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================

/*
* Configuration for the App and User Props
* TODO: 
* 1. Add Logo @ the top top                  
* 2. Set 
* 3. Set 
* 4. Set 
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

import { h } from 'preact';

import '../../css/bootstrap';
import '../../js/bootstrap';
import style from './style.css';

/*
*
*
*
*/

const PageContact = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Thanks! I'll be in touch soon.</h1>
		</div>
	);
};

export default PageContact;
