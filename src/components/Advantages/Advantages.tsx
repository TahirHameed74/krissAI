import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Features = () => {
	useEffect(() => {
		// Initialize ScrollTrigger
		gsap.registerPlugin(ScrollTrigger);

		// Define animation for each section
		const animateSections = () => {
			const sectionsLeft = document.querySelectorAll(".feature-section-left");
			const sectionsRight = document.querySelectorAll(".feature-section-right");
			sectionsLeft.forEach((section) => {
				gsap.fromTo(
					section,
					{
						x: -30, // Move from left
						opacity: 0,
					},
					{
						x: 0, // Move to original position
						opacity: 1,
						duration: 1,
						y: 0,
						scrollTrigger: {
							trigger: section,
							start: "top bottom", // Trigger animation when top of section hits bottom of viewport
							end: "bottom top", // Reverse animation when bottom of section hits top of viewport
							scrub: true, // Smooth animation relative to scroll
						},
					}
				);
			});
			sectionsRight.forEach((section) => {
				gsap.fromTo(
					section,
					{
						x: 30, // Move from left
						opacity: 0,
						y: 0,
					},
					{
						x: 0, // Move to original position
						opacity: 1,
						duration: 1,
						y: 0,
						scrollTrigger: {
							trigger: section,
							start: "top bottom", // Trigger animation when top of section hits bottom of viewport
							end: "bottom top", // Reverse animation when bottom of section hits top of viewport
							scrub: true, // Smooth animation relative to scroll
						},
					}
				);
			});
		};

		animateSections();
	}, []);

	return (
		<div>
			<div className="feature-section-left" id="advantages">
				<h3>Advantages</h3>
				<h1>
					KRISS.AI can significantly benefit your dental office in several ways
				</h1>
				<p>
					Kriss.ai, specifically designed for the dental industry, offers a
					multitude of advantages that significantly enhance both the
					operational efficiency of dental practices and the patient experience.
					With its deep understanding of dental terminologies and procedures,
					Kriss.ai provides tailored solutions that improve case acceptance
					rates by educating patients in real-time.
				</p>
			</div>
			<div id="page8">
				<h1 className="feature-section-left">
					<span>24/7 Patient Experience</span> Unlike traditional chatbots,
					KRISS.AI interacts dynamically with patients, understanding unique
					questions & concerns. KRISS.AI answers questions outside normal office
					hours, enhancing customer experience & satisfaction.
				</h1>
			</div>
			<div id="page9">
				<h1 className="feature-section-right">
					<span>Reduce Office Workload </span>KRISS handles customer inquiries
					to allow your staff to focus their efforts on in-office customers and
					tasks. She can assist with clinical notes and insurance narratives to
					further improve office efficiency.
				</h1>
			</div>
			<div id="page10">
				<h1 className="feature-section-left">
					<span> Grow Your Practice </span>KRISS.AI increases the number of
					scheduled appointments by improving patient trust and case acceptance
					rates. Personalized customer interaction reduces website abandonment,
					growing your customer base while increasing sales and revenue.
				</h1>
			</div>
			<div id="page11">
				<h1 className="feature-section-right">
					<span> Expert Resource </span>Whether a practitioner has a question
					about procedures or a team member has questions about billing and
					coding, KRISS.AI will serve as an expert resource, providing accurate
					answers in an instant.
				</h1>
			</div>
		</div>
	);
};

export default Features;
