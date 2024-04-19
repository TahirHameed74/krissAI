import React, { Component } from "react";
import Card from "../Card/Card";
import styles from "./CaseStudies.module.css";
const CaseStudies = () => {
	let cards = [
		{
			link: "https://www.ideadentistry.com/",
			client: "Dr. Vu",
			address: "A General Dentist in Houston, TX",
			description:
				"As a busy dentist, patient engagement is crucial yet time-consuming. With the help of the AI chatbot, we’ve streamlined appointment scheduling, dental inquiries, & follow-up care. This technology has incredibly reduced our administrative workload, allowing us to focus more on providing top-notch oral care to our patients. It’s like having an extra pair of hands that work 24/7!",
			imagen: "./images/drV.png",
		},
		{
			link: "https://www.lifeworksdental.com/",
			client: "Dr. Tran and Dr. Nguyen",
			address: "Cosmetic Dentists Located in Memorial City, TX",
			description:
				"Integrating an AI chatbot into our dental practice has dramatically enhanced our patient service. It instantly addresses patient questions, offering them convenient and comprehensive responses. Our patients are happier with the quick, around-the-clock assistance, and our staff is relieved from the constant ringing of phones. It’s a win-win solution for us!",
			imagen: "./images/drT.png",
		},
	];
	return (
		<div id="caseStudies" className="bg-[#100919]">
			<div className="text-white testimonial ">
				<div className="flex flex-col justify-center text-center">
					<h4 className={styles.heading}>See KRISS.AI</h4>
					<h4 className={styles.heading2}> at work</h4>
				</div>
				<div className="flex justify-center mt-10 ">
					{cards.map((card) => (
						<Card
							link={card.link}
							client={card.client}
							address={card.address}
							description={card.description}
							imagen={card.imagen}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CaseStudies;
