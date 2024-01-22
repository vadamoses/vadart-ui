import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import menuData from "./menuData";
import * as icons from "react-icons/fa";

const Nav = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<>
			<nav className="navbar">
				<div className="container">
					<div className="logo_container">
						<Link to="/" className="logo">
						<i className="logo-item-icon"><icons.FaVk /></i>
							{/* <h2>arts</h2> */}
						</Link>
					</div>
					<div className="menu-icon" onClick={handleShowNavbar}>
						{showNavbar ? <icons.FaTimes /> : <icons.FaBars />}
					</div>
					<div className={`nav-elements  ${showNavbar && "active"}`}>
						<ul>
							{menuData.map((item, index) => {
								return (
									<li key={index}>
										<item.icon className="item-icon"></item.icon>
										<Link to={item.url} className={item.className} onClick={handleShowNavbar}>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
