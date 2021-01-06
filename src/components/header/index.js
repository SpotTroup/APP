//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js for the Header in the App
// Comments: JS file for AppFind
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


import { h } from 'preact';
import { Link } from 'preact-router/match';
import Banner from '../banner/index.js';


const Header = () => (

	<header class="xs:col-span-1 md:col-span-2 bg-gray-400 rounded-b-lg ">
		
		<nav class="flex justify-center">
			<div class="w-full overflow-hidden xs:my-1 xs:px-1 xs:w-1/2 sm:my-px sm:px-px sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 xl:px-2 lg:w-1/4">
				<img style="max-width: 70%;height:auto;" class="" src="../../assets/icons/android-icon-96x96.png" alt="Logo" />
			</div>
			
			<div class="">
				<div class="w-auto flex justify-cente flex-grow sm:flex sm:items-center sm:w-auto text-gray-400 font-extrabold">
					<div class="flex justif">
						<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
						</svg>
						<a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
							Ocean</a>
					</div>

					<div class="flex justify">
						<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
						</svg>
						<a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
							fishing</a>
					</div>

					<div class="flex justify">
						<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
						</svg>
						<a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
							shop</a>
					</div>

					<div class="flex justify">
						<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
						</svg>
						<a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
							production</a>
					</div>

					<div class="flex justify-center">
						<svg class="svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<a href="#" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
							parking</a>
					</div>
				</div>

				<div class="card inline-block bg-gray-700 shadow-lg ">
					<div class="m-2">
						<input type="email" placeholder="email@spottroup.de" class="rounded" />
						<span class=" text-gray-400 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
							
						</span>
					</div>
					<div class="m-2">
						<input type="password" placeholder="**********" class="rounded" />
						<span class=" text-gray-400  bg-transparent rounded ">
							
						</span>
					</div>
					<div class="btn m-2 felx align-middle hover:text-red-50  bg-gray-600 border-black shadow-lg">Login</div>
				</div>

			</div>
		</nav>
	</header >
);

export default Header;
