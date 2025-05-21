import { MdDeleteOutline } from "react-icons/md";
import BBQPastaImg from "../assets/bbq-pasta_img.webp";
import "../style/clientLayoutComponent.scss";
const AddToCart = () => {
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
				<div className="cart-items-row"></div>
			</div>
		</div>
	);
};

export default AddToCart;
