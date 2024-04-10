import React, { Component } from "react";

const Features = () => {
	return (
		<div id="features">
			<h1>
				How KRISS.AI Works
				<br />
			</h1>
			<h2>
				KRISS.AI works by leveraging advanced Aritificial Intelligence (AI)
				technology <br />
				to interact with patients, doctors, and office staff in a dynamic manner
			</h2>
			<video src="/section3.mp4" autoPlay loop muted></video>
			<div className="overlay"></div>
		</div>
	);
};

export default Features;
