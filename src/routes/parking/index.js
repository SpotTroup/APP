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
// Comments: JS file for home
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
import style from './style.css';

const Home = () => (
	<div class="bg-fixed " style="background-image: url('../../assets/background/bg-production.png')">
		<header>
			<button className=" bg-red-100 hover:font-bold border-red-700  hover:border-red-700 hover:border-r-2 hover:border-b-4 hover:bg-red-900 hover:text-white hover:from-transparent  border-transparent text-black px-4 py-3 rounded">Alert</button>
		</header>
		<main className="bg-purple-300 my-20">
			<button className="bg-indigo-300 hover:bg-indigo-700 hover:text-white font-bold ml-4 py-10 px-20 rounded mt-5 mb-5">Test</button>
			<button className="btn btn-blue">Nummer 2</button>
		</main>
		<footer>
			<div class="flex bg-gray-700 text-white max-w-xl container rounded">
				<div className="btn btn-blue m-2 ml-1">1</div>
				<div className="btn btn-blue m-2">2</div>
				<div class="btn btn-blue m-2">3</div>

			</div>
			<div className="container md:flex ">
				<div className="sm:inline-block sm:bg-yellow-400">

					<button >Button</button>
				</div>
				<div className="max-w-sm mx-auto flexp-6 bg-white rounded-lg shadow-2xl">
					<div className="flex-shrink-0 ml-0">
						<img src="../../assets/icons/android-chrome-512x512.png" alt="" className="h-12 w-12 lg:items-center"></img>
					</div>
					<div className="ml-6 pt-1">
						<h1 className="text-xl text-gray-900">Logo</h1>
						<p className="text-base text-gray-600"></p>
					</div>
				</div>
				
			</div>
		</footer>
	</div>
);

export default Home;
