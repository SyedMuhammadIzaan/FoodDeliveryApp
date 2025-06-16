import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterComp from "../components/Footer";
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
	borderRadius: 8,
	overflow: "hidden",
	width: "100%",
};

const headerStyle = {
	textAlign: "center",
	color: "black",
	// height: 64,
	// width:"100vw",
	// paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "white",
};
const contentStyle = {
	height: "100%",
	// width:"100%",
	minHeight: "100vh",
	lineHeight: "120px",
	color: "#000",
	backgroundColor: "white",
};

const footerStyle = {
	color: "#fff",
	width: "100vw",
	backgroundColor: "#323232",
	// padding:"20px"
};

const ClientLayout = () => {
	return (
		<div>
			<Layout style={layoutStyle}>
				<Header style={headerStyle}>
					<Navbar />
				</Header>
				<Content style={contentStyle}>
					<Outlet />
				</Content>
				<Footer style={footerStyle}>
					<FooterComp />
				</Footer>
			</Layout>
		</div>
	);
};

export default ClientLayout;
