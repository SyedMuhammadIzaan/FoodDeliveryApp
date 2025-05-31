import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ButtonComp = ({ text, redirectTo, type }) => {
	const navigate = useNavigate();

	return (
		<>
			<Button
				onClick={() => {
					navigate(redirectTo);
				}}
				type={type}
			>
				{text}
			</Button>
		</>
	);
};

export default ButtonComp;
