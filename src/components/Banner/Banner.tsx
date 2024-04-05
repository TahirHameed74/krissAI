import React, { useEffect } from "react";
import gsap from "gsap";

const Banner = () => {
	return (
		<div id="home">
			<video
				className="bannerVideo"
				src="images/KrissAI.mp4"
				autoPlay
				loop
				muted></video>

			<div id="page-bottom">
				<h3 className="intro">Introduction</h3>
				<img
					width="408px"
					height="60px"
					src="images/Logo-Kriss-AI.png"
					alt=""
					className="logoBanner"
				/>
			</div>
		</div>
	);
};

export default Banner;
