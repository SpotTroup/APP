//=========================================================================================
//                        ____              _  _____
//                       / ___| _ __   ___ | ||_   _| __ ___  _   _ _ __
//                       \___ \| '_ \ / _ \| __|| || '__/ _ \| | | | '_ \
//                        ___) | |_) | (_) | |_ | || | | (_) | |_| | |_) |
//                       |____/| .__/ \___/ \__||_||_|  \___/ \__,_| .__/
//                             |_|                                 |_|
// create with figlet 
//
// Name: index.js for the footer of the app
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
0
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
import SizeControll from '../../components/sizecontroll/index.js';

import './style.css';


const Footer = () => (
  <footer class="col-span-1 bg-gray-800 opacity-60 text-gray-800 rounded-top">
    <div class="flex flex-wrap mb-4 w-full opacity-100 ">
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
        <h3 class="text-3xl py-4">About Us</h3>
        <p>SpotTroup in Kiel gegründet. Am Meer lebend. Für die Stadt entwickelt.
          </p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
        <h3 class="text-3xl py-4">Production</h3>
        <ul>
          <li><a href="#">Box</a></li>
          <li><a href="#">Badge</a></li>
          <li><a href="#">Base</a></li>
          <li><a href="#">Filament</a></li>
          <li><a href="#">Catamaran</a></li>
        </ul>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
        <h3 class="text-3xl py-4">Future</h3>
        <ul>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Vission</a></li>
          <li><a href="#">Milestones</a></li>
          <li><a href="#">Codex</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
        <h3 class="text-3xl py-4">Company</h3>
        <ul>
          <li><a href="#">Team</a></li>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Olice</a></li>
          <li><svg class=" svgbtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg><a href="#">Contact</a></li>
        </ul>
      </div>


      <div class="bg-blue-900 p-2 pl-6">
        <p class="bottom">© Copyright 2020 - spottroup.com</p>
        
      </div>
      <SizeControll />
    </div>
  </footer>
);

export default Footer;
