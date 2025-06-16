// import React from "react";
import { Route } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";
import AddToCart from "../components/AddToCart";
import DeliveryInformation from "../pages/DeliveryInformation";
import PaymentMethod from "../pages/paymentMethod";
import NotFound from "../pages/NotFound";
const ClientRoute = () => {
	return (
		<>
			<Route path="/" element={<ClientLayout />}>
				<Route index element={<Home />} />
				<Route path="menu" element={<Menu />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="add-to-cart" element={<AddToCart />} />
				<Route path="delivery-info" element={<DeliveryInformation />} />
				<Route path="payment" element={<PaymentMethod />} />
				<Route path="*" element={<NotFound />} />

				{/* Auth */}
			</Route>
		</>
	);
};

export default ClientRoute;
