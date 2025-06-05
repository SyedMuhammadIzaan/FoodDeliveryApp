import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ButtonComp = ({ text, redirectTo, type, color }) => {
	const navigate = useNavigate();
	console.log("Color",color)
	return (
		<>
			<Button
				onClick={() => {
					navigate(redirectTo);
				}}
				type={type}
				color={color}
				variant="solid"
			>
				{text}
			</Button>
		</>
	);
};

export default ButtonComp;
