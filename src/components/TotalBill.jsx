import "../style/clientLayoutComponent.scss";

const TotalBill = ({subTotal,deliveryFee}) => {

	return (
		<div className="total-bill-wrapper">
			<div className="bill-content">
				<div className="bill-title">
					<h4>Card Totals</h4>
				</div>
				<div className="bill-details">
					<div className="bill-row">
						<span>Sub Total</span>
						<span>$ {subTotal}</span>
					</div>
					<div className="bill-row">
						<span>Delivery Fee</span>
						<span>$ {deliveryFee}</span>
					</div>
					<div className="bill-row-total">
						<span>Total</span>
						<span>$ {subTotal * deliveryFee}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalBill;
