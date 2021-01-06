
//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js Size Controller with Color
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


const SizeControll = () => (
    <div class="grid grid-cols-7 xs:grid-cols-1  sm:grid-cols-7 xs:text-sm bg-gray-400 rounded-full m-3">
        <div class="col-span-1text-gray-600 ml-3 ">'xs green': '640px',</div>

        <div class="col-span-1 text-gray-600">'yellow:800px'</div>

        <div class="col-span-1text-gray-600 ml-1">'green:1200px'</div>

        <div class="col-span-1text-gray-600 ml-1">'blue:1400px'</div>

        <div class="col-span-1text-gray-600 ml-1">'purple:1600px'</div>

        <div class="col-span-1text-gray-600 ml-1">'pink:2000px'</div>

        <div class="inline-block  bg-red-400 xs:bg-green sm:bg-yellow-400 md:bg-green-500 lg:bg-blue-500 xl:bg-purple-500 2xl:bg-pink-500 rounded-r-full ">
            <div className="flex justify-center"><span class="font-bold">Color</span>
            </div>
        </div>

    </div>
);

export default SizeControll;

