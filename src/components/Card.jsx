import { Card } from "antd";
import { foodItem } from "../constant";
const { Meta } = Card;
import "../style/clientLayoutComponent.scss"

const CardComp = () => {
	return (
		<div className="item-wrapper">
			{foodItem.map((item, index) => {
				// console.log("Item",item)
				return (
					<Card
						hoverable
						key={index}
						style={{ width: 248, height: 250 }}
						// style={{ width: 248, height: 250, border: "1px solid grey" }}
						cover={
							<img
								alt="example"
								src={item.imgSrc}
								style={{ height: 160, objectFit: "cover" }}
							/>
						}
					>
						<Meta title={item.name} description="www.instagram.com" />
					</Card>
				);
			})}
		</div>
	);
};

export default CardComp;
