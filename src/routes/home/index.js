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
// Comments: JS file for home as landing page to enter the ocean side
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
import TopCard from '../../components/topCard/index.js';
import BasicCard from '../../components/basicCard/index.js';
import Button from '../../components/button/index.js';
import SmallCard from '../../components/smallCard/index.js';
import MapNavigationCard from '../../components/mapnavigationcard/index.js';
import SizeControll from '../../components/sizecontroll/index.js';
import HistoryLoader from '../../components/historyloader/index.js';
import Table from '../../components/table/index.js';
import Banner from '../../components/banner/index.js';

import Header from '../../components/header/';
import Footer from '../../components/footer/';

const Home = () => (
	<div class="grid xs:grid-cols-2 md:grid-cols-12">
		<Header class="xs:col-span-1 md:col-span-2"/>
		
		<div class="xs:col-span-1 md:col-span-10 bg-fixed" style="background-image: url('../../assets/background/bg-production.png')">
			<header class=" container  opacity-95 " >
				<MapNavigationCard class="" />
			</header>

			<main class=" container opacity-95">
				<HistoryLoader />

			</main>

			<footer class=" container opacity-95">

			</footer>
			<Footer class=""/>
		</div>
		
	</div>
);

export default Home;
