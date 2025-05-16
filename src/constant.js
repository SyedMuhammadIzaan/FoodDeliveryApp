import CakeCategoryImg from "./assets/cake_category_img.webp";
import SaladcategoryImg from "./assets/salad_category_img.jpg";
import SandWichCategoryImg from "./assets/sandwich_category_img.webp";
import RollsCategoryImg from "./assets/roll_category_img.webp";
import PureVegetableCategoryImg from "./assets/vegetable_category_img.webp";
import PastaCategoryImg from "./assets/pasta_category_img.webp";
import NoodlesCategoryImg from "./assets/noodles_category_img.webp";
import IcecreamcategoryImg from "./assets/pista-icecream_img.webp";


import BBQPastaImg from "./assets/bbq-pasta_img.webp";
import BeefBiryaniImg from "./assets/beef-biryani_img.webp";
import ChickenBiryaniImg from "./assets/chicken-biryani_img.webp";
import SuadishBiryaniImg from "./assets/suadish-biryani_img.webp";
import BeefPulaoImg from "./assets/beef-pulao_img.webp";
import ChickenPulaoImg from "./assets/chicken-pulao_img.webp";
import HyderabadiBeefPulaoImg from "./assets/hyderabadi-beef-pulao_img.webp";
import YakhniPulaoImg from "./assets/yakhni-pulao_img.webp";
import BroastImg from "./assets/broast-food_img.webp";
import CaramelTriMilkImg from "./assets/caramel-tri-milk_img.webp";
import ChickenCrispyClubSandwichImg from "./assets/chicken-crispy-club-sandwich_img.webp";
import ClubSandwichImg from "./assets/club-sandwich_img.webp";
import ChickenMalaiBotiSandwichImg from "./assets/chicken-malai-boti-sandwich_img.webp";
import ChickenPastaImg from "./assets/chicken-pasta_img.webp";
import ChocolateIceCreamImg from "./assets/chocolate-icecream_img.webp";
import PeshawariIcecreamImg from "./assets/peshawari-icecream_img.webp";
import CrunchIceCreamImg from "./assets/crunch-icecream_img.webp";
import PistaIceCreamImg from "./assets/pista-icecream_img.webp";

import ChutneyJumboRollImg from "./assets/chutney-jumbo-roll_img.webp";
import CrispyJumboRollImg from "./assets/crispy-jumbo-roll_img.webp";
import CarrotImg from "./assets/carrot_img.webp";
import HariPiyazImg from "./assets/hari-piyaz_img.webp";
import LemonImg from "./assets/lemon_img.webp";
import MayoJumboRollImg from "./assets/mayo-jumbo-roll_img.webp";
import PistachiotriMilk from "./assets/pistachio-tri-milk_img.webp";
import PlainPastaImg from "./assets/plain-pasta_img.webp";
import ThreemilkCakeImg from "./assets/three-milk-cake_img.webp";
export const foodCategory = [
	{
		name: "Salad",
		imgSrc: SaladcategoryImg,
	},
	{
		name: "Cake",
		imgSrc: CakeCategoryImg,
	},
	{
		name: "Sandwich",
		imgSrc: SandWichCategoryImg,
	},
	{
		name: "Rolls",
		imgSrc: RollsCategoryImg,
	},
	{
		name: "Pure Veg",
		imgSrc: PureVegetableCategoryImg,
	},
	{
		name: "Pasta",
		imgSrc: PastaCategoryImg,
	},
	{
		name: "Noodles",
		imgSrc: NoodlesCategoryImg,
	},
	{
		name: "Biryani",
		imgSrc: SuadishBiryaniImg,
	},
	{
		name: "Ice Cream",
		imgSrc: PistaIceCreamImg,
	},
	{
		name: "Fast Food",
		imgSrc: BroastImg,
	},
];

export const foodItem = [
	{
		name: "Suadish Biryani - North Nazimabad",
		rating: 4.6,
		peopleRated: 2000,
		deliveryTime: "15 - 20 min",
		category:"Biryani",
		saveAmount: 69,
		imgSrc: SuadishBiryaniImg,
		popular: [
			{
				name: "Chicken Biryani",
				rating: 4.7,
				peopleRated: 25000,
				deliveryTime: "25 - 50 min",
				category: "Biryani",
				saveAmount: "from Rs. 79 with Saver",
				amount: "Rs. 349.00",
				halfKg: "Rs. 349.00",
				double: "Rs. 449.00",
				imgSrc: ChickenBiryaniImg,
			},
			{
				name: "Beef Biryani",
				rating: 4.7,
				peopleRated: 25000,
				deliveryTime: "25 - 50 min",
				category: "Biryani",
				saveAmount: "from Rs. 79 with Saver",
				amount: "Rs. 399.00",
				halfKg: "Rs. 399.00",
				double: "Rs. 449.00",
				imgSrc: BeefBiryaniImg,
			},
			{
				name: "Chicken Pulao",
				rating: 4.7,
				peopleRated: 25000,
				deliveryTime: "25 - 50 min",
				category: "Biryani",
				saveAmount: "from Rs. 79 with Saver",
				amount: "Rs. 319.00",
				halfKg: "Rs. 319.00",
				double: "Rs. 449.00",
				imgSrc: ChickenPulaoImg,
			},
			{
				name: "Beef Pulao",
				rating: 4.7,
				peopleRated: 25000,
				deliveryTime: "25 - 50 min",
				category: "Biryani",
				saveAmount: "from Rs. 79 with Saver",
				amount: "Rs. 399.00",
				halfKg: "Rs. 399.00",
				imgSrc: BeefPulaoImg,
			},
			{
				name: "Hyderabadi Beef Pulao",
				rating: 4.7,
				peopleRated: 25000,
				deliveryTime: "25 - 50 min",
				category: "Biryani",
				saveAmount: "from Rs. 79 with Saver",
				amount: "Rs. 399.00",
				halfKg: "Rs. 399.00",
				imgSrc: HyderabadiBeefPulaoImg,
			},
		],
	},
	{
		name: "Al Momin - Hyderabadi Yakhni Pulao",
		rating: 4.7,
		peopleRated: 1000,
		deliveryTime: "25 - 50 min",
		category: "Biryani",
		saveAmount: "from Rs. 79 with Saver",
		amount: 399.0,
		halfKg: 399.0,
		double: 449.0,
		imgSrc: YakhniPulaoImg,
		popular: [
			[
				{
					name: "Meal for One",
					category: "Biryani",
					amount: 480.0,
					discount: 15,
					halfKg: 399.0,
					imgSrc: BeefBiryaniImg,
				},
				{
					name: "Chicken Biryani(Half Kg)",
					category: "Biryani",
					amount: 320.0,
					discount: 15,
					halfKg: 320.0,
					imgSrc: ChickenBiryaniImg,
				},
				{
					name: "Hyderabadi Beef Pulao(Half Kg)",
					category: "Biryani",
					amount: 420.0,
					discount: 15,
					halfKg: 420.0,
					imgSrc: HyderabadiBeefPulaoImg,
				},
			],
		],
	},
	{
		name: "Kababjees bakers - Water Pump",
		rating: 4.9,
		peopleRated: 5000,
		deliveryTime: "5 - 30 min",
		category: "Ice Cream",
		saveAmount: 79,
		amount: 319.0,
		imgSrc: ThreemilkCakeImg,
		popular: [
			{
				name: "Peshawari Ice Cream",
				category: "Ice Cream",
				amount: 252.00,
				discount: 10,
				regular: 252.00,
                halfLitre:539.10,
                oneLitre:899.10,
				imgSrc: PeshawariIcecreamImg,
			},
			{
				name: "Chocolate Ice Cream",
				category: "Ice Cream",
				amount: 252.00,
                regular: 252.00,
                halfLitre:539.10,
                oneLitre:899.10,
				discount: 10,
				imgSrc: ChocolateIceCreamImg,
			},
			{
				name: "Crunch Ice Cream",
				category: "Ice Cream",
				amount: 252.00,
				discount: 10,
                regular: 252.00,
                halfLitre:539.10,
                oneLitre:899.10,
				imgSrc: CrunchIceCreamImg,
			},
		],
	},
	{
		name: "Three Milk Cake",
        rating: 4.9,
		peopleRated: 5500,
		deliveryTime: "5 - 30 min",
		category: "Cake",
		amount: 1999.0,
		discount: 10,
		halfKg: "Rs. 399.00",
		imgSrc: ThreemilkCakeImg,
	},
	{
		name: "Caramel Tri - Milk",
        rating: 4.9,
		peopleRated: 5000,
		deliveryTime: "5 - 30 min",
		category: "Cake",
		amount: 375.0,
		discount: 10,
        imgSrc: CaramelTriMilkImg,
	},
	{
		name: "Pistachio tri - Milk",
        rating: 4.9,
		peopleRated: 5000,
		deliveryTime: "5 - 30 min",
		category: "Cake",
		amount: 400.0,
		discount: 10,
        imgSrc: PistachiotriMilk,
	},
    {
        name:"Plain Pasta",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:399.00,
        saveAmount:79,
        category:"Pasta",
        discount:15,
        imgSrc: PlainPastaImg,
    },
    {
        name:"Chicken Pasta",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:649.00,
        saveAmount:79,
        category:"Pasta",
        discount:15,
        imgSrc: ChickenPastaImg,
    },
    {
        name:"BBQ Pasta",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:680.00,
        saveAmount:79,
        category:"Pasta",
        discount:15,
        imgSrc: BBQPastaImg,
    },
    {
        name:"Chatni Jumbo Roll",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:470.00,
        saveAmount:79,
        category:"Roll",
        discount:15,
        imgSrc: ChutneyJumboRollImg,
    },
    {
        name:"Mayo Jumbo Roll",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:549.00,
        saveAmount:79,
        category:"Roll",
        discount:15,
        imgSrc: MayoJumboRollImg,
    }
    ,{
        name:"Crispy Jumbo Roll",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:549.00,
        saveAmount:79,
        category:"Roll",
        discount:15,
        imgSrc: CrispyJumboRollImg,
    },
    {
        name:"Chicken Crispy Club",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:480.00,
        saveAmount:99,
        discount:10,
        category:"Sandwich",
        imgSrc: ChickenCrispyClubSandwichImg,
    },
    {
        name:"Club Sandwich",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:460.00,
        saveAmount:99,
        discount:10,
        category:"Sandwich",
        imgSrc: ClubSandwichImg,
    },
    {
        name:"Chicken Malai Boti Sandwich",
        rating:3.8,
        peopleRated:1000,
        deliveryTime:"10 - 15 min",
        amount:520.00,
        saveAmount:99,
        discount:10,
        category:"Sandwich",
        imgSrc: ChickenMalaiBotiSandwichImg,
    },
    {
        name:"Brightfarms Spring Onion - Hari Piyaz (Pakistan) 250 g",
        amount:59.00,
        weight:250,
        category:"Pure Veg",
        imgSrc: HariPiyazImg,
    },
    {
        name:"Carrot Orange 500g",
        amount:79.00,
        weight:500,
        category:"Pure Veg",
        imgSrc: CarrotImg,
    },
    {
        name:"Lemon",
        amount:299.00,
        weight:250,
        category:"Pure Veg",
        imgSrc: LemonImg,
    }
];
