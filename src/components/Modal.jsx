import React from "react";
import { Modal } from "antd";
import Login from "./auth/Login";

const ModalComp = ({modalOpen,handleModal}) => {
	const handleOk = () => {
		handleModal(false);
	};
	const handleCancel = () => {
		handleModal(false);
	};
	return (
		<>
			<Modal
				// title="Basic Modal"
				closable={{ "aria-label": "Custom Close Button" }}
				open={modalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Login />
			</Modal>
		</>
	);
};

export default ModalComp;
