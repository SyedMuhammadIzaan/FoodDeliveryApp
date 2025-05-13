import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "100vw",
};

const headerStyle = {
    textAlign: 'center',
    color: 'black',
    // height: 64,
    // width:"100vw",
    // paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'white',
  };
  const contentStyle = {
    height:"100%",
    // width:"100%",
    minHeight: "100vh",
    lineHeight: '120px',
    color: '#000',
    backgroundColor: "white",
  };
  
const footerStyle = {
    color: '#fff',
    backgroundColor: '#4096ff',
  };

const ClientLayout = () => {
	return (
		<div>
			<Layout style={layoutStyle}>
				<Header style={headerStyle}><Navbar /></Header>
				<Content style={contentStyle}><Outlet /></Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</div>
	);
};

export default ClientLayout;
