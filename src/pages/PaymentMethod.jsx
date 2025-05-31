// import React from 'react'
import { useNavigate } from "react-router-dom";
import { Input, InputNumber, Select } from "antd";
import { GoArrowLeft } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { CreditCardOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import "../style/pages/paymentMethod.scss";
import ButtonComp from "../components/ButtonComp";

const PaymentMethod = () => {
	const navigate = useNavigate();
	const orders = useSelector((state) => state.order.orders);

	// const handleChange = (value) => {
	// 	console.log(`selected ${value}`);
	// };
	console.log("Orders", orders);
	return (
		<div className="paymentMethod-wrapper">
			<div className="col-container">
				<div className="row-container">
					<div className="header">
						<div className="left-arrow-wrapper">
							<button
								onClick={() => {
									navigate("delivery-info");
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
						<p>$ 220.00</p>
					</div>
					<div className="booked-items">
						<div className="item">
							<div className="item-name">
								<p>Greek Salad</p>
								<p className="second-child">Qty</p>
							</div>
							<div className="item-price">
								<span>$ 24.00</span>
								<span className="second-child">$ 12.00</span>
							</div>
						</div>
						<div className="item"></div>
						<div className="item"></div>
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
                  suffix={<CreditCardOutlined />}
								/>
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
									// Add more countries as needed
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
