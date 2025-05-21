import { Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/clientLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import AddToCart from "./components/AddToCart.jsx";
import NotFound from "./pages/NotFound";
import AdminLayout from "./admin/layout/AdminLayout";

function App() {
  return (
    <Routes>
      {/* Client-side nested routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="add-to-cart" element={<AddToCart />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin route (you can nest more under /admin if needed) */}
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  );
}

export default App;
