import "../style/clientLayoutComponent.scss";
import { useSelector } from "react-redux";
const TotalBill = () => {
	const { pricing } = useSelector((state) => state.order);
	console.log("Pricing of Orders", pricing.subtotal);

	return (
		<div className="total-bill-wrapper">
			<div className="bill-content">
				<div className="bill-title">
					<h4>Card Totals</h4>
				</div>
				<div className="bill-details">
					<div className="bill-row">
						<span>Sub Total</span>
						<span>$ {pricing.subtotal}</span>
					</div>
					<div className="bill-row">
						<span>Delivery Fee</span>
						<span>$ {pricing.deliveryFee}</span>
					</div>
					<div className="bill-row-total">
						<span>Total</span>
						<span>$ {pricing.total}</span>
						{/* <span>$ {subTotal * deliveryFee}</span> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalBill;
