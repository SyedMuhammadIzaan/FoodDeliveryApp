import { Routes, Route } from "react-router-dom";
// import ClientLayout from "./layout/clientLayout";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import ContactUs from "./pages/ContactUs";
// import AddToCart from "./components/AddToCart.jsx";
// import DeliveryInformation from "./pages/DeliveryInformation.jsx";
// import NotFound from "./pages/NotFound";
// import AdminLayout from "./admin/layout/AdminLayout";
import ClientRoute from "./routes/ClientRoute.jsx";

function App() {
	return (
		<Routes>
			<>{ClientRoute()}</>
			{/* {} */}
			{/* {AdminRoute()} */}
			{/* Client-side nested routes */}
			{/* <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="add-to-cart" element={<AddToCart />} />
        <Route path="delivery-info" element={<DeliveryInformation />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin route (you can nest more under /admin if needed) */}
			{/* <Route path="/admin" element={<AdminLayout />} /> */}
		</Routes>
	);
}

export default App;
