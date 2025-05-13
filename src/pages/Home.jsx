import React from "react";
import Herobanner from "../components/Herobanner";

import "../style/Home.scss";
import { foodCategory } from "../constant";
const Home = () => {
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
						console.log("Categories", categories);
						return (
							<div className="food-category-content" key={indx}>
								<div className="category-img">
									<img
										src={categories.imgSrc}
										alt={categories.name}
										srcset=""
									/>
								</div>
								<h6>{categories.name}</h6>
							</div>
						);
					})}
				</div>
			</section>
			<section className="food-items-section">

			</section>
		</div>
	);
};

export default Home;
