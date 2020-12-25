
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
// Comments: JS file for PageHome
// Author: Tjark Ziehm
// Version: 0.1
// Date: 25.Dez. 2020
// CoWorkers:
//=========================================================================================
/*
* Mainpage as homepage and route to the App installation path
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

import { h } from "preact";
import { useEffect } from "preact/hooks";
import { Link } from 'preact-router/match';
import { Hexagon, TiledHexagons } from "tiled-hexagons";
import style from "./style";
import Loader from '../../components/loader';









const Home = () => {
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

			<section id="hexagon">
				<div class="container">
					<div class="row">
						<div class="col-1"><Hexagon sideLength={40} text="Find" textStyle={{ fill: "green" }} /></div>
						<div class="col-1"><Hexagon sideLength={40} text="Spot" textStyle={{ fill: "blue" }} /></div>
					</div>
					<div class="row">
						<div class="col-1"><Hexagon sideLength={40} text="Config" textStyle={{ fill: "blue" }} /></div>
						<div class="col-1"><Hexagon sideLength={40} text="Statistic" textStyle={{ fill: "green" }} /></div>
					</div>
				</div>
			</section>

			<section id="hexagon">
				<div class="container">
					<div class="row">
						<div class="col-3"></div>
						<div class="col-1"><Hexagon sideLength={40} text="Find" textStyle={{ fill: "green" }} /></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"><Hexagon sideLength={40} text="Find" textStyle={{ fill: "green" }} /></div>
					</div>
					<div class="row">
						<div class="col-5"></div>
						<div class="col-1"><Hexagon sideLength={40} text="Find" textStyle={{ fill: "green" }} /></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"><Hexagon sideLength={40} text="Find" textStyle={{ fill: "green" }} /></div>
					</div>
				</div>
			</section>

			<section id="hexagon">
				<div class="container">
					<div class="row">
						<div class="col-3"></div>
						<div class="col-1"><div class={style.hexagon}></div></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"><div class={style.hexagon}></div></div>
					</div>
					<div class="row">
						<div class="col-5"></div>
						<div class="col-1"><div class={style.hexagon}></div></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"></div>
						<div class="col-1"><div class={style.hexagon}></div></div>
					</div>
				</div>
			</section>

		</div>




	);
};

export default Home;
