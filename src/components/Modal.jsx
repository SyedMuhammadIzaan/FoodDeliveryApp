import React from "react";
import { Modal } from "antd";

const ModalComp = ({modalOpen}) => {
	const handleOk = () => {
		modalOpen(false);
	};
	const handleCancel = () => {
		modalOpen(false);
	};
	return (
		<>
			<Modal
				title="Basic Modal"
				closable={{ "aria-label": "Custom Close Button" }}
				open={modalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default ModalComp;
