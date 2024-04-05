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
					Apple Vision Pro is the result of decades of experience designing
					high‑performance, mobile, and wearable devices — culminating in the
					most ambitious product Apple has ever created. Vision Pro integrates
					incredibly advanced technology into an elegant, compact form,
					resulting in an amazing experience every time you put it on.
					Enclosure. A singular piece of three-dimensionally formed laminated
					glass flows into an aluminum alloy frame that curves to wrap around
					your face. Light Seal. The Light Seal
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
