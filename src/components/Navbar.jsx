import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { RxAvatar } from "react-icons/rx";
import ModalComp from "./Modal";
import "../style/Navbar.scss";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
	console.log("User Info", userInfo);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setMenuOpen(true);
	};
	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	const handleNavigate = () => {
		navigate("add-to-cart");
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="navbar">
			<div className="navbar-item">
				<div className="appLogo">Food Delivery</div>

				{/* Desktop nav links */}
				<div className="nav-links desktop-only">
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/menu"}>Menu</NavLink>
					<NavLink to={"/contact-us"}>Contact Us</NavLink>
				</div>

				<div className="navbar-buttons">
					<IoSearchOutline className="nav-icon" size={20} />
					<FaShoppingBasket
						onClick={handleNavigate}
						className="nav-icon"
						size={20}
					/>
					{userInfo ? (
						<>
							<RxAvatar className="nav-icon" size={20} />
							<span className="username">{userInfo.username}</span>
						</>
					) : (
						<button onClick={showModal} className="signInBtn">
							Sign In
						</button>
					)}
					<RxHamburgerMenu
						className="hamburger-icon"
						size={30}
						onClick={toggleMenu}
					/>
				</div>
			</div>
			<ModalComp modalOpen={isModalOpen} handleModal={setIsModalOpen} />

			{/* Mobile menu */}
			<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
				<RxCross2 className="closeMenu" onClick={handleCloseMenu} />
				<NavLink href="">Home</NavLink>
				<NavLink href="">Menu</NavLink>
				<NavLink href="">Contact Us</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
