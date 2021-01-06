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
// Comments: JS file for the  responsive topCard represention SpotTroup Blog
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

const TopCard = () => (
	<div>

		<div className="container mt-5">
			<div className="md:flex">
				<div class=" flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m.2 rounded">
					<div className="lf:flex lg:items-center">

						<div className="lg:flex-shrink-0">
							<img src="../../assets/images/Header.PNG" alt="SpotTroup Blog Presentation" className="rounded-lg lg:w-64" />
						</div>

						<div className="mt-4 lg:mt-0 lg:ml-6">
							<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
								Crowd
							</div>
							<a className=" block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline" href=""> Safe the nature and your time</a>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
);

export default TopCard;
