// frontend/src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/components.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	// Handle window resize / media query
	useEffect(() => {
		const media = window.matchMedia("(width < 700px)");

		const updateNavbar = (e) => {
			setIsMobile(e.matches);
		};
		setIsMobile(media.matches);
		media.addEventListener("change", updateNavbar);
		return () => media.removeEventListener("change", updateNavbar);
	}, []);

	function openSidebar() {
		setIsOpen(true);
	}

	function closeSidebar() {
		setIsOpen(false);
	}

	return (
		<div id='navbar' className={isOpen ? "show" : ""}>
			<a href='#main-content' className='skip-link'>
				Skip to main content
			</a>

			<button
				id='open-sidebar-button'
				aria-label='open sidebar'
				aria-expanded={isOpen}
				aria-controls='navbar'
				onClick={openSidebar}>
				Open
			</button>
			<nav className={isOpen ? "show" : ""} aria-hidden={isMobile && !isOpen}>
				<ul>
					<li>
						<button
							id='close-sidebar-button'
							aria-label='close sidebar'
							onClick={closeSidebar}>
							Close
						</button>
					</li>
					<li className='home-li'>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/profile'>Profile</Link>
					</li>
					<li>
						<Link to='/test'>Test</Link>
					</li>
				</ul>
			</nav>

			<div
				id='overlay'
				onClick={closeSidebar}
				aria-hidden={!isOpen}
			/>
		</div>
	);
}
