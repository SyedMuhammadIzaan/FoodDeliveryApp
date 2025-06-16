import { Routes } from "react-router-dom";
import ClientRoute from "./routes/ClientRoute.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";

function App() {
	return (
		<Routes>
			<>{ClientRoute()}</>
			<>{AdminRoute()}</>
			
			{/* Admin route (you can nest more under /admin if needed) */}
			{/* <Route path="/admin" element={<AdminLayout />} /> */}
		</Routes>
	);
}

export default App;
