import { MdDeleteOutline } from "react-icons/md";
import { Input } from "antd";
import TotalBill from "./TotalBill";
import BBQPastaImg from "../assets/bbq-pasta_img.webp";
import "../style/clientLayoutComponent.scss";
import ButtonComp from "./ButtonComp";
import { useSelector } from "react-redux";
const AddToCart = () => {
	const orders=useSelector((state)=>state.order.orders)
	console.log("Orders",orders)
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
							<div className="display-items">
								<div className="item" id="image">
									<img src={BBQPastaImg} alt="" />
								</div>
								<div className="item">
									<p>Beef Biryani</p>
								</div>
								<div className="item">
									<p>2000</p>
								</div>
								<div className="item">
									<p>2</p>
								</div>
								<div className="item">
									<p>1500</p>
								</div>
								<div className="item">
									<MdDeleteOutline />
								</div>
							</div>
							<div className="display-items">
								<div className="item" id="image">
									<img src={BBQPastaImg} alt="" />
								</div>
								<div className="item">
									<p>Beef Biryani</p>
								</div>
								<div className="item">
									<p>2000</p>
								</div>
								<div className="item">
									<p>2</p>
								</div>
								<div className="item">
									<p>1500</p>
								</div>
								<div className="item">
									<MdDeleteOutline />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cart-items-row">
					<div className="cart-summary-section">
						<div className="billing-action-wrapper">
							<TotalBill />
							<div className="billing-action-btn-wrapper">
								<ButtonComp text="Proceed to Checkout" />
							</div>
						</div>
						<div className="promo-code-section">
							<h4>If You have a promo code. Enter it here</h4>
							<div className="promo-code-input-group">
								<Input placeholder="Promo Code" />
								<ButtonComp redirectTo={"/add-to-cart/delivery-info"} text="Submit" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToCart;
