import React, { Component } from "react";

const About = () => {
	return (
		<div id="about">
			<div id="center-about">
				<h1 className=" text-5xl">What is Kriss AI</h1>
			</div>
			<video src="images/What-is-Kriss-AI.mp4" autoPlay loop muted></video>
			<div className="overlay-about"></div>
		</div>
	);
};

export default About;
