import "./Card.css";

function Card({ card }) {
	return (
		<div className="card">
			<h2 className="card-name">{card.cardName}</h2>
			<p className="set-name">{card.setName} (Set ID: {card.setId})</p>
			<p className="card-type">
				{card.cardColor} {card.cardType} {card.subTypes ? `- ${card.subTypes}` : ""}
			</p>
			<p className="card-text">{card.cardText}</p>
			<div className="card-info">
				<span>Life: {card.life}</span>
				<span>Cost: {card.cardCost}</span>
				<span>Counter: {card.counterAmount}</span>
				<span>Attribute: {card.attribute}</span>
			</div>
		</div>
	);
}

export default Card;
