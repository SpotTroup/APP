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
import style from './style.css';
import { Hexagon, TiledHexagons } from 'tiled-hexagons';
import '../../css/bootstrap';
import '../../js/bootstrap';


const Header = () => (

	<header>		
			<nav
				class="navbar sticky-top navbar-light grey navbar-expand-md "
				style="background-color: #6c757d"
				aria-current="page"
			>
				<div class="container-fluid ">
					<a class="navbar-brand">
						<img
							src="../../assets/icons/android-icon-144x144.png"
							width="40%"
							class="align-center"
							alt="SpotTroup-Logo"
						/>
					</a>

					<button
						class="navbar-toggler justify-content-end"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarFullDropDown"
						aria-controls="navbarFullDropDown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse justify-content-end" id="navbarFullDropDown">
						<div class="navbar-nav">
							<a class="nav-link active" aria-current="page" href="test.html"
							>SpotTroup</a
							>

							<a class="nav-link active" href="register.html">Register</a>
							<a class="nav-link active" href="shop.html">Shop</a>


							<form class="d-flex">
								<div class="input-group">
									<span class="input-group-text" id="basic-addon1">@</span>
									<input
										class="form-control me-2"
										type="email"
										placeholder="email@spottroup.de"
										aria-label="User-Name"
									/>
									<span class="input-group-text" id="basic-addon1">*</span>
									<input
										class="form-control me-2"
										type="password"
										placeholder="password"
										aria-label="User-Password"
									/>
								</div>
								<button class="btn btn-outline-primary" type="email submit">
									Login
		  						</button>
							</form>
						</div>

						<ul id="navbarSetting" id="navbarSetting">
							<a></a>
						</ul>

						<button
							class="navbar justify-content-end"
							type="button"
							data-bs-target="#navbarSetting"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

					</div>
				</div>
			</nav>

		

	</header>
);

export default Header;
