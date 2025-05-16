import { NavLink } from "react-router-dom";
import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
const FooterComp = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-header-wrapper">
				<div className="app-details">
					<div className="appLogo">
						<h5>Food Delivery</h5>
					</div>
					<div className="app-desc">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							suscipit aut minima. Molestias, saepe. Aperiam.
						</p>
					</div>
					<div className="social-links">
						<div className="facebook-icon">
							<TbBrandFacebook size={23} />
						</div>
						<div className="instagram-icon">
							<FaInstagram size={23} />
						</div>
						<div className="twitter-icon">
							<LuTwitter size={23} />
						</div>
					</div>
				</div>
			</div>
			<div className="footer-nav-wrapper">
				<div className="company-heading">
					<h5>Company</h5>
				</div>
				<div className="nav-links">
					<NavLink>Home</NavLink>
					<NavLink>About Us</NavLink>
					<NavLink>Delivery</NavLink>
					<NavLink>Privacy Policy</NavLink>
				</div>
			</div>
			<div className="footer-getintouch-wrapper">
				<div className="getintouch-heading">
					<h5>Get in touch</h5>
				</div>
				<div className="contact-info">
					<p>+289108332</p>
					<p>foodDelivery@gmail.com</p>
				</div>
			</div>
			<div className="footer-copyright-wrapper"></div>
		</div>
	);
};

export default FooterComp;
