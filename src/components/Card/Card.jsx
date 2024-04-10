import Styles from "./Card.module.css";
import React, { useState } from "react";

function Card({ client, address, description, imagen }) {
	// const [show, setShown] = useState(false);

	return (
		<div className={Styles.card}>
			<img className={Styles.cardImg} src={imagen} />
			<h2 className={Styles.title}>{client}</h2>
			<p className={Styles.address}>{address}</p>
			<p className={Styles.description}>{description}</p>
		</div>
	);
}

export default Card;
