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
// Comments: JS file for the  Banner
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

*/

//=========================================================================================
import { comment } from 'postcss';
import { h } from 'preact';
import style from './style.css';

const Banner = () => (
	<div class="inline-block ">
		<div
			class="bg-gray-400 border border-gray-900 text-red-700 px-5 py-3 rounded-xl relative mx-2 my-2 opacity-80 shadow-xl"
			role="alert"
		>
			<strong class="font-bold">132 Tonne Plastik aus dem Meer, Einsparungen CO2: 423kg, Zeitersparnis: 3231 Stunden</strong>
			
		</div>


	</div >
);

export default Banner;
