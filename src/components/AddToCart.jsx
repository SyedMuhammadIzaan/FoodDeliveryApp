import { MdDeleteOutline } from "react-icons/md";
import { Input } from "antd";
import TotalBill from "./TotalBill";
import ButtonComp from "./ButtonComp";
import { useSelector } from "react-redux";
import "../style/clientLayoutComponent.scss";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
const AddToCart = () => {
	// const [orders,setOrders]=useState([])
	const navigate=useNavigate()
	const orders = useSelector((state) => state.order.orders);
	console.log("Orders", orders);

	const subTotal=orders.reduce((sum,order)=>{
		return sum + (order.amount * order.quantity)
	},0)

	return (
		<div className="add-to-cart-wrapper">
			<div className="cart-items-col">
				<div className="cart-items-row">
					<div className="display-cart-items">
						<div className="item-title">
							<div className="heading">
								<p>Item</p>
							</div>
							<div className="heading">
								<p>Name</p>
							</div>
							<div className="heading">
								<p>Price</p>
							</div>
							<div className="heading">
								<p>Qty</p>
							</div>
							<div className="heading">
								<p>Total</p>
							</div>
							<div>
								<p>Remove</p>
							</div>
						</div>
						<div className="booked-items">
							{orders.map((order, index) => {
								return (
									<div key={index} className="display-items">
										<div className="item" id="image">
											<img src={order.imgSrc} alt="" />
										</div>
										<div className="item">
											<p>{order.name}</p>
										</div>
										<div className="item">
											<p>{order.amount}</p>
										</div>
										<div className="item">
											<p>{order.quantity}</p>
										</div>
										<div className="item">
											<p>{order.amount * order.quantity}</p>
										</div>
										<div className="item">
											<MdDeleteOutline />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="cart-items-row">
					<div className="cart-summary-section">
						<div className="billing-action-wrapper">
							<TotalBill subTotal={subTotal} deliveryFee={7} />
							<div className="billing-action-btn-wrapper">
								<ButtonComp text="Proceed to Checkout" />
							</div>
						</div>
						<div className="promo-code-section">
							<h4>If You have a promo code. Enter it here</h4>
							<div className="promo-code-input-group">
								<Input placeholder="Promo Code" />
								{/* <ButtonComp
									redirectTo={"add-to-cart/delivery-info"}
									text="Submit"
								/> */}
								<button onClick={navigate("delivery-info")}></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToCart;
