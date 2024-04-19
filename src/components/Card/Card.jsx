import Styles from "./Card.module.css";
import React, { useState } from "react";
import { styles } from "../Pricing/styles";

function Card({ link, client, address, description, imagen }) {
	// const [show, setShown] = useState(false);

	return (
		<div className={Styles.card}>
			<a href={link} target="_blank">
				<img className={Styles.cardImg} src={imagen} />

				<h2 className={Styles.title}>{client}</h2>
				<p className={Styles.address}>{address}</p>
				<div className="flex">
					<p className={Styles.description}>{description}</p>
					<button className="absolute right-2 bottom-8 rounded-full bg-[#403054] ">
						<img className="p-2" src="images/arrow.svg" alt="button" />
						{/* <img src="images/arrow.svg" alt="button" /> */}
					</button>
				</div>
			</a>
		</div>
	);
}

export default Card;
