// import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {signUp} from "../../features/user/UserSlice.js";


const SignUp = ({ handleLoginView }) => {
	
	const dispatch=useDispatch();
	const onFinish = (values) => {
		// console.log("Received values of form: ", values);
		dispatch(signUp({username:values.FullName,email:values.Email,password:values.Password}))
	};
	const {signup}=useSelector((state)=>state.user)
	
	localStorage.setItem("UserInfo",JSON.stringify(signup))

	const goToLogin = () => {
		handleLoginView(true);
	};

	return (
		<div>
			<h3>Sign Up</h3>
			<Form onFinish={onFinish}>
				<Form.Item
					name="FullName"
					rules={[{ required: true, message: "Please Input your Fullname" }]}
				>
					<Input placeholder="Enter Your Full Name" />
				</Form.Item>
				<Form.Item
					name="Email"
					rules={[{ required: true, message: "Please Input your Email" }]}
				>
					<Input placeholder="abc@gmail.com" />
				</Form.Item>
				<Form.Item
					name="Phone No"
					rules={[{ required: true, message: "Please Input your Phone No" }]}
				>
					<Input placeholder="0311-1111112" />
				</Form.Item>
				<Form.Item
					name="Password"
					rules={[{ required: true, message: "Please Input your Password" }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item
					name="Confirm Password"
					rules={[{ required: true, message: "Please Input your Password" }]}
				>
					<Input type="password" />
				</Form.Item>
				<Form.Item
					name="Address"
					rules={[{ required: true, message: "Please Input Your Address" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Sign Up
					</Button>
					<p style={{ textAlign: "center", marginTop: "1em" }}>
						Already have an account?{" "}
						<a onClick={goToLogin} style={{ cursor: "pointer" }}>
							Log In
						</a>
					</p>
				</Form.Item>
			</Form>
		</div>
	);
};

export default SignUp;
