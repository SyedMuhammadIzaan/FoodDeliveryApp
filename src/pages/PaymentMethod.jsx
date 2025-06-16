import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, InputNumber, Select } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { GoArrowLeft } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import ButtonComp from "../components/ButtonComp";
import "../style/pages/paymentMethod.scss";

const PaymentMethod = () => {
	const navigate = useNavigate();
	const { orders, pricing } = useSelector((state) => state.order);
	// const [orderPayment, setOrderPayment] = useState([{ ...orders, pricing }]);
	// console.log("orderPayment", orderPayment);

	// const handleChange = (value) => {
	// 	console.log(`selected ${value}`);
	// };
	// console.log("Orders", orders);
	// console.log("pricing", pricing);
	return (
		<div className="paymentMethod-wrapper">
			<div className="col-container">
				<div className="row-container">
					<div className="header">
						<div className="left-arrow-wrapper">
							<button
								onClick={() => {
									navigate("/delivery-info");
								}}
							>
								<GoArrowLeft size={22} />
							</button>
						</div>
						<div className="course-icon">
							<FiDatabase size={22} />
						</div>
						<div className="heading">
							<h4>Course</h4>
						</div>
					</div>
					<div className="price-container">
						<h4>Pay Courses</h4>
						<p>$ {pricing.total}</p>
					</div>
					<div className="booked-items">
						{orders.map((order, index) => {
							return (
								<div key={index} className="item">
									<div className="item-name">
										<p>{order.name}</p>
										<p className="second-child">Qty {order.quantity}</p>
									</div>
									<div className="item-price">
										<span>$ {order.amount * order.quantity}</span>
										<span className="second-child">$ {order.amount} each</span>
									</div>
								</div>
							);
						})}
						<hr />
						<div className="item">
							<div className="item-name">
								<p>Delivery Charge</p>
								<p className="second-child">Qty 1</p>
							</div>
							<div className="item-price">
								<span>
									{orders.length > 0
										? orders.length * pricing.deliveryFee
										: "$ 0"}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row-container">
					<div className="title">
						<h4>Pay with Card</h4>
					</div>
					<div className="payment-form-container">
						<div className="input-fields">
							<p>Email</p>
							<Input />
						</div>

						<div className="input-fields">
							<div className="card-info-header">
								<p>Card Information</p>
							</div>
							<Input
								placeholder="Card number"
								suffix={<CreditCardOutlined />} />
							<div className="card-details">
								<InputNumber placeholder="MM / YY" className="expiry-input" />
								<InputNumber placeholder="CVC" className="cvc-input" />
							</div>
						</div>

						<div className="input-fields">
							<p>Cardholder name</p>
							<Input placeholder="Full name on card" />
						</div>

						<div className="input-fields">
							<p>Country or region</p>
							<Select
								showSearch
								style={{ width: "100%" }}
								placeholder="Select country"
								optionFilterProp="children"
								filterOption={(input, option) =>
									(option?.label ?? "")
										.toLowerCase()
										.includes(input.toLowerCase())
								}
								options={[
									{ value: "us", label: "United States" },
									{ value: "ca", label: "Canada" },
									{ value: "uk", label: "United Kingdom" },
									{ value: "au", label: "Australia" },
									{ value: "de", label: "Germany" },
									{ value: "fr", label: "France" },
									{ value: "jp", label: "Japan" },
									{ value: "in", label: "India" },
									{ value: "br", label: "Brazil" },
									{ value: "mx", label: "Mexico" },
									{ value: "es", label: "Spain" },
									{ value: "it", label: "Italy" },
								]}
							/>
							<ButtonComp text="Pay" type="primary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentMethod;
