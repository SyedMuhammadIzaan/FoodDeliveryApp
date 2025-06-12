import React from "react";
import "../style/clientLayoutComponent.scss";

const Herobanner = () => {
	return (
		<div className="herobanner-wrapper">
			<div className="herobanner-content">
				<div className="herobanner-title">
					<h2>Order your favourite food here</h2>
				</div>
				<div className="herobanner-desc">
					<span>
						Delicious meals from your favorite restaurants delivered in minutes.
						Whether it’s breakfast, lunch, dinner, or a late-night craving —
						we’ve got you covered.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Herobanner;
