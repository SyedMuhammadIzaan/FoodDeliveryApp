import { useState } from "react";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { RxAvatar } from "react-icons/rx";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<>
			<Layout style={{ width: "100", height: "100vh" }}>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="demo-logo-vertical" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={["1"]}
						items={[
							{
								key: "1",
								icon: <UserOutlined />,
								label: "Dashboard",
							},
							{
								key: "2",
								icon: <VideoCameraOutlined />,
								label: "Order",
							},
							{
								key: "3",
								icon: <UploadOutlined />,
								label: "Item",
							},
						]}
					/>
				</Sider>
				<Layout>
					<Header
						style={{
							padding: 0,
							background: colorBgContainer,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<RxAvatar style={{marginRight:"12px"}} id="avatar-icon" size={30} />
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default AdminLayout;
