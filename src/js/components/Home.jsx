import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const cards = [
		{
			image: "https://placehold.co/500x325",
			title: "Card title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio efficitur.",
			buttonText: "Find Out More!",

		},
		{
			image: "https://placehold.co/500x325",
			title: "Card title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio efficitur.",
			buttonText: "Find Out More!",

		},
		{
			image: "https://placehold.co/500x325",
			title: "Card title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio efficitur.",
			buttonText: "Find Out More!",

		},
		{
			image: "https://placehold.co/500x325",
			title: "Card title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec odio efficitur.",
			buttonText: "Find Out More!",

		},
	];

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row text-center">
					{cards.map((card, index) => {
						return (
							<Card
								key={index}
								image={card.image}
								title={card.title}
								description={card.description}
								buttonText={card.buttonText}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;