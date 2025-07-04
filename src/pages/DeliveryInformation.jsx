import { Input, InputNumber } from "antd";
import { useSelector } from "react-redux";
import ButtonComp from "../components/ButtonComp";
import TotalBill from "../components/TotalBill";
import "../style/pages/DeliveryInformation.scss";

const DeliveryInformation = () => {
	const {pricing}=useSelector((state)=>state.order);
	console.log("Pricing",pricing)
	return (
		<div className="delivery-info-wrapper">
			<div className="delivery-info-row">
				<h3>Delivery Information</h3>
				<div className="delivery-info-col">
					<div className="delivery-info-field">
						<div className="name-fields">
							<div className="firstname-field">
								<Input size="large" placeholder="First Name" />
							</div>
							<div className="lastname-field">
								<Input size="large" placeholder="Last Name" />
							</div>
						</div>
						<div className="email-field">
							<Input size="large" placeholder="Email Address" />
						</div>
						<div className="street-field">
							<Input size="large" placeholder="Street" />
						</div>
						<div className="state-fields">
							<div className="city-field">
								<Input size="large" placeholder="City" />
							</div>
							<div className="state-field">
								<Input size="large" placeholder="State" />
							</div>
						</div>
						<div className="country-fields">
							<div className="zipcode-field">
								<InputNumber placeholder="Pin Code" size="large" />
							</div>
							<div className="country-field">
								<Input size="large" placeholder="Country" />
							</div>
						</div>
					</div>
					<div className="total-bill">
						<TotalBill />
						<div className="proceed-to-payment-btn">
							<ButtonComp redirectTo={"/payment"} text="Proceed to Payment" color="danger" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryInformation;
