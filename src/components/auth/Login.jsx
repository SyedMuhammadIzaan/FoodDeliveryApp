import {useState} from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import "../../style/clientLayoutComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/UserSlice.js";

const Login = ({ handleLoginView }) => {
	const dispatch=useDispatch();
	const [loginCredentials,setLoginCredentials]=useState({email:"",password:""});
	const [signUpCredentials,setSignUpCredentials]=useState({});
	const onFinish = (values) => {
		// console.log("Received values of form: ", values);
		setLoginCredentials({
			email:values.username,
			password:values.password,
		})
		dispatch(login({email:loginCredentials.email,password:loginCredentials.password}));
		setSignUpCredentials(JSON.parse(localStorage.getItem("UserInfo")))
	};
	// console.log("SignUpCRedentials",signUpCredentials)
	const {logIn}=useSelector((state)=>state.user)
	localStorage.setItem("Login Credential",JSON.stringify(logIn))
	// console.log("Login",logIn)

	return (
		<div className="login-container">
			<Form
				name="login"
				initialValues={{ remember: true }}
				style={{ maxWidth: 360 }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[{ required: true, message: "Please input your Username!" }]}
				>
					<Input prefix={<UserOutlined />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password!" }]}
				>
					<Input
						prefix={<LockOutlined />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Flex justify="space-between" align="center">
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<a href="">Forgot password</a>
					</Flex>
				</Form.Item>

				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Log in
					</Button>
					or{" "}
					<a
						onClick={(e) => {
							e.preventDefault();
							handleLoginView(false);
						}}
						href="#"
					>
						Sign Up
					</a>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
