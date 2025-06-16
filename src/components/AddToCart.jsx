import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import TotalBill from "./TotalBill";
import ButtonComp from "./ButtonComp";
import { removeFromCart } from "../features/orders/orderSlice";
import "../style/clientLayoutComponent.scss";

const AddToCart = () => {
	const dispatch=useDispatch();
	const orders = useSelector((state) => state.order.orders);
	
	const handleDeleteOrder=(orderId)=>{
		dispatch(removeFromCart({orderId}))
	}
	
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
							<div className="heading">
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
											<MdDeleteOutline size={22} color="red" onClick={()=>{handleDeleteOrder(order.id)}} />
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
							<TotalBill />
							<div className="billing-action-btn-wrapper">
								<ButtonComp redirectTo={"/delivery-info"} text="Proceed to Checkout" color="danger" />
								{/* <button onClick={navigate("delivery-info")}>Proceed to Checkout</button> */}
							</div>
						</div>
						<div className="promo-code-section">
							<h4>If You have a promo code. Enter it here</h4>
							<div className="promo-code-input-group">
								<Input placeholder="Promo Code" />
								<ButtonComp
									// redirectTo={"delivery-info"}
									text="Submit"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToCart;
