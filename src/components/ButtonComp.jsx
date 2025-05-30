import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ButtonComp = ({ text, redirectTo }) => {
	const navigate = useNavigate();
  console.log("Redirect ",redirectTo)
	return (
		<>
			<Button
				onClick={() => {
					navigate(redirectTo);
				}}
			>
				{text}
			</Button>
		</>
	);
};

export default ButtonComp;
