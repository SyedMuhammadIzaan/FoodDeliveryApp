import { Button, Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { foodItem } from "../constant";
import { useDispatch } from "react-redux";
// const { Meta } = Card;
import { addOrder } from "../features/orders/orderSlice.js";
import "../style/clientLayoutComponent.scss";
import { useState } from "react";

const CardComp = ({ item }) => {
	const dispatch = useDispatch();
	const [quantities, setQuantities] = useState({});

	const filterItemOfCard = foodItem.filter((element) => {
		return element.category === item;
	});
	const handleAddToCart = (selectItem) => {
		const quantity = quantities[selectItem.id] || 1; 
		const orderItem={
			...selectItem,
			quantity:quantity
		}
		console.log("Order Item",orderItem)
		dispatch(addOrder(orderItem));
	};
	const handleQuantityChange = (itemId, change) => {
		setQuantities((prev) => {
			const current = prev[itemId] || 0;
			const newQuantity = current + change;
			return {
				...prev,
				[itemId]: newQuantity > 0 ? newQuantity : 0,
			};
		});
	};
	console.log("Qty", quantities);
	// console.log("Filter Item ", filterItemOfCard);
	return (
		<div className="item-wrapper">
			{item === "All"
				? foodItem.map((item, index) => {
						return (
							<Card
								hoverable
								key={index}
								style={{ width: 248, height: 270, position: "relative" }}
								onClick={() => handleAddToCart(item)}
								cover={
									<div style={{ position: "relative" }}>
										<img
											alt={item.name}
											src={item.imgSrc}
											style={{ height: 181, objectFit: "cover", width: "100%" }}
										/>
										{quantities[item.id] > 0 ? (
											<div
												style={{
													position: "absolute",
													bottom: 10,
													right: 10,
													display: "flex",
													alignItems: "center",
													backgroundColor: "white",
													borderRadius: 20,
													padding: "2px 8px",
													boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
												}}
											>
												<Button
													type="text"
													icon={<MinusOutlined />}
													onClick={(e) => {
														e.stopPropagation();
														handleQuantityChange(item.id, -1);
													}}
													size="small"
												/>
												<span style={{ margin: "0 8px" }}>
													{quantities[item.id]}
												</span>
												<Button
													type="text"
													icon={<PlusOutlined />}
													onClick={(e) => {
														e.stopPropagation();
														handleQuantityChange(item.id, 1);
													}}
													size="small"
												/>
											</div>
										) : (
											<Button
												type="primary"
												shape="circle"
												icon={<PlusOutlined />}
												style={{
													position: "absolute",
													bottom: 10,
													right: 10,
												}}
												onClick={(e) => {
													e.stopPropagation();
													handleQuantityChange(item.id, 1);
												}}
											/>
										)}
									</div>
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
								onClick={() => {
									handleAddToCart(item);
								}}
								// style={{ width: 248, height: 250, border: "1px solid grey" }}
								cover={
									<div style={{ position: "relative" }}>
										<img
											alt={item.name}
											src={item.imgSrc}
											style={{ height: 181, objectFit: "cover", width: "100%" }}
										/>
										{quantities[item.id] > 0 ? (
											<div
												style={{
													position: "absolute",
													bottom: 10,
													right: 10,
													display: "flex",
													alignItems: "center",
													backgroundColor: "white",
													borderRadius: 20,
													padding: "2px 8px",
													boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
												}}
											>
												<Button
													type="text"
													icon={<MinusOutlined />}
													onClick={(e) => {
														e.stopPropagation();
														handleQuantityChange(item.id, -1);
													}}
													size="small"
												/>
												<span style={{ margin: "0 8px" }}>
													{quantities[item.id]}
												</span>
												<Button
													type="text"
													icon={<PlusOutlined />}
													onClick={(e) => {
														e.stopPropagation();
														handleQuantityChange(item.id, 1);
													}}
													size="small"
												/>
											</div>
										) : (
											<Button
												type="primary"
												shape="circle"
												icon={<PlusOutlined />}
												style={{
													position: "absolute",
													bottom: 10,
													right: 10,
												}}
												onClick={(e) => {
													e.stopPropagation();
													handleQuantityChange(item.id, 1);
												}}
											/>
										)}
									</div>
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
