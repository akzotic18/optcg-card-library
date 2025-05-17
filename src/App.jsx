import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";
import CardTemplate from "./CardTemplate.js";

const cardData = new CardTemplate(
	"Flame Warrior",
	"Elemental Clash",
	"Deals 3 damage to all enemy creatures.",
	"EC-01",
	"SET001",
	"Red",
	"Creature",
	5,
	3,
	"Warrior",
	1,
	"Fire"
);

function App() {
	return(
		<>
			<Header />
			<Card card = {cardData} />
			<Card card = {cardData} />
			<Card card = {cardData} />
			<Card card = {cardData} />
			<Footer />
		</>
	);
}

export default App
