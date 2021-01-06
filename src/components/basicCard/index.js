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
// Comments: JS file for the  static BasicCard as template
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


		<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div class="md:flex">
				<div class="md:flex-shrink-0">
					<img class="h-48 w-full object-cover md:w-48" src="../../assets/images/Header.PNG" alt="Man looking at item at a store" />
				</div>
				<div class="p-8">
					<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
					<a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
					<p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
				</div>
			</div>
		</div>


	</div>
);

export default TopCard;
