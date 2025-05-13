import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientLayout from "../layout/clientLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";

const ClientRoute = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<ClientLayout />}>
					<Route index element={<Home />} />
					<Route path="menu" element={<Menu />} />
					<Route path="contact-us" element={<ContactUs />} />
				</Route>
			</Routes>
		</div>
	);
};

export default ClientRoute;
