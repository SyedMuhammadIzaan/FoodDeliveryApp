import React from "react";
import { Form, Input } from "antd";

const SignUp = () => {
    const onFinish = values => {
    console.log('Received values of form: ', values);
  };
	
	return (
		<div>
			<Form onFinish={onFinish}>
				<Form.Item name="FullName" rules={[{required:true,message: "Please Input your Fullname"}]} >
					<Input />
				</Form.Item>
				<Form.Item name="Email" rules={[{required:true,message: "Please Input your Email"}]}>
					<Input placeholder="abc@gmail.com" />
				</Form.Item>
				<Form.Item name="Phone No" rules={[{required:true,message: "Please Input your Phone No"}]}>
					<Input placeholder="0311-1111112" />
				</Form.Item>
				<Form.Item name="Password" rules={[{required:true,message: "Please Input your Password"}]}>
					<Input type="password" />
				</Form.Item>
				<Form.Item name="Confirm Password" rules={[{required:true,message: "Please Input your Password"}]}>
					<Input type="password" />
				</Form.Item>
				<Form.Item name="Address" rules={[{required:true,message:"Please Input Your Address"}]}>
					<Input />
				</Form.Item>

            </Form>
		</div>
	);
};

export default SignUp;
