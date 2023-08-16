import React from "react";
import { CartWidget } from "../CartWidjet/CartWidget"; 
import IconPelota from "../Icons/icons";
import "./navbar.css";


export const Navbar = () => {
	return (
		<nav className='container--navbar'>
			<div className='navbar--logo'><IconPelota/></div>

			{/* Secciones de la navbar */}
			<ul className='navbar--ul'>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href="# ">
						ingreso
					</a>
				</li>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href='#section2'>
						Boleta
					</a>
				</li>
				<li className='navbar--ul--li'>
					<a className='navbar--ul--li--a' href='#section3'>
						Los mejoes
					</a>
				</li>
			</ul>

			{/* ICON CART + Cantidad */}
			<CartWidget />
		</nav>
	);
};

