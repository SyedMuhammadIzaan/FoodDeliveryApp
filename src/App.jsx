import { Routes } from "react-router-dom";
import ClientRoute from "./routes/ClientRoute.jsx";

function App() {
	return (
		<Routes>
			<>{ClientRoute()}</>
			{/* Admin route (you can nest more under /admin if needed) */}
			{/* <Route path="/admin" element={<AdminLayout />} /> */}
		</Routes>
	);
}

export default App;
