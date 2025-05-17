class CardTemplate {
	constructor(cardName, setName, cardText, setId, 
				cardSetId, cardColor, cardType, life, 
				cardCost, subTypes, counterAmount, attribute,) {
		this.cardName = cardName;
		this.setName = setName;
		this.cardText = cardText;
		this.setId = setId;
		this.cardSetId = cardSetId;
		this.cardColor = cardColor;
		this.cardType = cardType;
		this.life = life;
		this.cardCost = cardCost;
		this.subTypes = subTypes;
		this.counterAmount = counterAmount;
		this.attribute = attribute;
	}
}

export default CardTemplate;