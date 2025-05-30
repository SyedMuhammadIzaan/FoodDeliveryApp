import { useState } from "react";
import Herobanner from "../components/Herobanner";
import { foodCategory } from "../constant";
import CardComp from "../components/Card";
import "../style/Home.scss";

const Home = () => {
	const [displayItem, setDisplayItem] = useState("All");

	const handleItem = (name) => {
		setDisplayItem(name);
	};
	return (
		<div>
			<section>
				<Herobanner />
			</section>
			<section className="explore-wrapper">
				<div className="explore-wrapper-content">
					<h3>Explore our menu</h3>
					<p>
						Choose from a diverse menu featuring a detectable array of dishes.
						Our mission is to satisfy your craving and elevate, your dining
						experience, one delicious meal at a time.
					</p>
				</div>
			</section>
			<section className="food-categories-wrapper">
				<div className="food-category-row">
					{foodCategory.map((categories, indx) => {
						// console.log("Categories", categories);
						return (
							<div className="food-category-content" key={indx}>
								<div className="category-img">
									<img
										src={categories.imgSrc}
										alt={categories.name}
										onClick={() => {
											handleItem(categories.name);
										}}
									/>
								</div>
								<h6>{categories.name}</h6>
							</div>
						);
					})}
				</div>
			</section>
			<section className="food-items-section">
				<CardComp item={displayItem} />
			</section>
		</div>
	);
};

export default Home;
