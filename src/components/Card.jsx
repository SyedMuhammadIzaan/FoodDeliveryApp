import { Card } from "antd";
import { foodItem } from "../constant";
import { useDispatch } from "react-redux";
// const { Meta } = Card;
import {addOrder} from "../features/orders/orderSlice.js"
import "../style/clientLayoutComponent.scss";

const CardComp = ({ item }) => {
	const dispatch=useDispatch();
	const filterItemOfCard = foodItem.filter((element) => {
		return element.category === item;
	});
	const handleAddToCart=(selectItem)=>{
		console.log("Select Item",selectItem)
		dispatch(addOrder(selectItem))
	}
	// console.log("Filter Item ", filterItemOfCard);
	return (
		<div className="item-wrapper">
			{item === "All"
				? foodItem.map((item, index) => {
						return (
							<Card
								hoverable
								key={index}
								style={{ width: 248, height: 270 }}
								onClick={()=>{handleAddToCart(item)}}
								// style={{ width: 248, height: 250, border: "1px solid grey" }}
								cover={
									<img
										alt="example"
										src={item.imgSrc}
										style={{ height: 181, objectFit: "cover" }}
									/>
								}
							>
								<div className="item-content">
									<p className="item-header">
										<span className="item-name">{item.name}</span>
										<span className="item-rating">
											{" "}
											{item.rating ? item.rating : ""}{" "}
											{item.peopleRated ? <>({item.peopleRated}+)</> : ""}
										</span>
									</p>
									<p className="item-deliveryTime-content">
										{item.deliveryTime ? item.deliveryTime : ""}
									</p>
									<p>{item.fare ? item.fare : ""}</p>
								</div>
								{/* <Meta title={item.name} description="www.instagram.com" /> */}
							</Card>
						);
				  })
				: filterItemOfCard.map((item, index) => {
						// console.log("Item",item)
						return (
							<Card
								hoverable
								key={index}
								style={{ width: 248, height: 270 }}
								onClick={()=>{handleAddToCart(item)}}
								// style={{ width: 248, height: 250, border: "1px solid grey" }}
								cover={
									<img
										alt="example"
										src={item.imgSrc}
										style={{ height: 160, objectFit: "cover" }}
									/>
								}
							>
								<div className="item-content">
									<p className="item-header">
										<span className="item-name">{item.name}</span>
										<span className="item-rating">
											{" "}
											{item.rating ? item.rating : ""}{" "}
											{item.peopleRated ? <>({item.peopleRated}+)</> : ""}
										</span>
									</p>
									<p className="item-deliveryTime-content">
										{item.deliveryTime ? item.deliveryTime : ""}
									</p>
									<p>{item.fare ? item.fare : ""}</p>
								</div>
								{/* <Meta title={item.name} description="www.instagram.com" /> */}
							</Card>
						);
				  })}
		</div>
	);
};

export default CardComp;
