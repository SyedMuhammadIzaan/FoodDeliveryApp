import { useState } from "react";
import { Modal } from "antd";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const ModalComp = ({ modalOpen, handleModal }) => {
	const [isLoginView, setIsLoginView] = useState(true);

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
				{isLoginView ? (
					<Login handleLoginView={setIsLoginView} />
				) : (
					<SignUp handleLoginView={setIsLoginView} />
				)}
			</Modal>
		</>
	);
};

export default ModalComp;
