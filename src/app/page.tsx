"use client";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText";
import React from "react";

import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card/Card";
import Carousel from "../components/Card/Carroussel";
import Works from "../components/Pricing/works";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	FadeOut,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	StickyOut,
	Zoom,
	ZoomIn,
	ZoomOut,
} from "react-scroll-motion";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText); // Register SplitText plugin

export default function Home() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());
	const main = useRef<HTMLDivElement>(null);

	let cards = [
		{
			client: "Dr. Vu",
			address: "A General Dentist in Houston, TX",
			description:
				"As a busy dentist, patient engagement is crucial yet time-consuming. With the help of the AI chatbot, we’ve streamlined appointment scheduling, dental inquiries, & follow-up care. This technology has incredibly reduced our administrative workload, allowing us to focus more on providing top-notch oral care to our patients. It’s like having an extra pair of hands that work 24/7!",
			imagen: "../images/drV.png",
		},
		{
			client: "Dr. Tran and Dr. Nguyen",
			address: "Cosmetic Dentists Located in Memorial City, TX",
			description:
				"Integrating an AI chatbot into our dental practice has dramatically enhanced our patient service. It instantly addresses patient questions, offering them convenient and comprehensive responses. Our patients are happier with the quick, around-the-clock assistance, and our staff is relieved from the constant ringing of phones. It’s a win-win solution for us!",
			imagen: "../images/drT.png",
		},
	];

	useGSAP(
		() => {
			const split = new SplitText(".intro", { type: "chars" });

			gsap.from(split.chars, {
				duration: 5,
				opacity: 0,
				x: "-100%", // Start from the left
				y: "100%", // Start from the bottom
				ease: "power4.out",
				stagger: {
					amount: 0.1, // Stagger the animation for each character
					grid: "auto", // Arrange chars in a grid
					from: "start", // Start from the first char
				},
			});

			gsap.to(".logoBanner", { rotation: "+=360", duration: 3 });

			gsap.to(".bannerVideo", {
				scrollTrigger: {
					trigger: ".bannerVideo",
					start: "2% top",
					end: "bottom top",
				},
			});
			// var boxes = gsap
			// 	.timeline({
			// 		scrollTrigger: {
			// 			trigger: "#main",
			// 			pin: true,
			// 			start: "top top",
			// 			end: "+=3000",
			// 			scrub: 0.3,
			// 		},
			// 		defaults: { duration: 0.4 },
			// 	})
			// 	.fromTo("#page>.background-overlay", { opacity: 0 }, { opacity: 1 })
			// 	// .fromTo(".background-overlay", { opacity: 1 }, { opacity: 0 })
			// 	.to({}, { duration: 0.4 });

			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: `#page1`,
					start: `top top`,
					scrub: 1,
					pin: true,
				},
			});

			tl.fromTo(
				"#page1>h1",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#page1>h1", { opacity: 0, top: "30%", duration: 2 });

			// After h1 fades out, start fading in h2 and move it, but delay this part
			tl.fromTo(
				"#page1>h2",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#page1>h2", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});

			tl.fromTo(
				"#page1>h3",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#page1>h3", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});

			tl.fromTo(
				"#page1>h4",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#page1>h4", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});
			tl.fromTo(
				"#page1>h5",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#page1>h5", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});
			var tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: `#page2`,
					start: `top top`, // Adjust as needed to control when the animation starts
					end: "bottom top", // This will give more room for scrolling through animations
					scrub: true,
					pin: true,
					markers: false, // Remove in production, useful for debugging
				},
			});

			// Fade in and move h1, then fade it out
			tl1
				.fromTo(
					"#page2>h1",
					{ opacity: 0, top: "100%" },
					{ opacity: 1, top: "50%", duration: 3 }
				)
				.to("#page2>h1", { opacity: 0, top: "30%", duration: 3 });

			// After h1 fades out, start fading in h2 and move it, but delay this part
			tl1.fromTo(
				"#page2>h2",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "50%", duration: 3 },
				">1"
			);

			var tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: `#page4`,
					start: `top top`,
					scrub: 1,

					pin: true,
				},
			});

			tl2.to("#page4>#center-page4", {
				top: `-50%`,
			});

			var testimonial = gsap.timeline({
				scrollTrigger: {
					trigger: ".testimonial",
					start: "top top",
					scrub: 1,
					pin: true,
				},
			});

			testimonial.fromTo(
				".testimonial",
				{
					x: -100, // Move cards from left to right
					opacity: 0, // Optionally fade in the cards
					duration: 1, // Animation duration
				},
				{
					x: "0%", // Move cards to original position (left)
					y: "0%",
					opacity: 1, // Make cards visible
				}
			);
		},

		{ scope: main }
	);

	return (
		<>
			<div ref={main}>
				<div id="page">
					<video
						className="bannerVideo"
						src="images/KrissAI.mp4"
						autoPlay
						loop
						muted></video>
					{/* <nav>
						<h3>Kriss AI</h3>
						<button>Login</button>
						<button>Sign Up</button>
					</nav> */}
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
				<div id="page1">
					<h1>Who Can Chat With KRISS.AI?</h1>
					<h2 className="heading" id="part1">
						<span className="flex justify-center">PATIENTS </span>
						<span className="sentence">
							For Questions About Dental Concerns And Treatment Options
						</span>
					</h2>
					<h3 className="heading" id="part2">
						<span className="flex justify-center">DOCTORS </span>
						<span className="sentence">
							Clinical Decision Support & Document Assistance
						</span>
					</h3>

					<h4 className="heading" id="part3">
						<span className="flex justify-center"> RDAs & HYGIENISTS </span>
						<span className="sentence">
							Continuous Learning For Dental Education And Training
						</span>
					</h4>
					<h5 className="heading" id="part4">
						<span className="flex justify-center"> FRONT DESK </span>
						<span className="sentence">
							For Questions About Billing, Coding, And Insurance{" "}
						</span>
					</h5>
					<video src="/section2.mp4" autoPlay loop muted></video>
				</div>

				<div id="page2">
					<h1>
						How KRISS.AI Works
						<br />
					</h1>
					<h2>
						KRISS.AI works by leveraging advanced Aritificial Intelligence (AI)
						technology <br />
						to interact with patients, doctors, and office staff in a dynamic
						manner
					</h2>
					<video src="/section3.mp4" autoPlay loop muted></video>
				</div>

				<div id="page4">
					<div id="center-page4">
						<h1 className=" text-5xl">What is Kriss AI</h1>
					</div>
					<video src="images/What-is-Kriss-AI.mp4" autoPlay loop muted></video>
				</div>
				<div id="page5">
					<div className="left5">
						<h1>
							Your apps live in <br />
							your space.
						</h1>
					</div>
					<div className="right5">
						<h3>
							With Vision Pro, you have an infinite canvas that transforms how
							you use the apps you love. Arrange apps anywhere and scale them to
							the perfect size, making the workspace of your dreams a reality —
							all while staying present in the world around you. Browse the web
							in Safari, create a to-do list in Notes, chat in Messages, and
							seamlessly move between them with a glance.
						</h3>
						<button>+ Learn more about apps</button>
					</div>
				</div>
				<div id="page6">
					<h3>Advantages</h3>
					<h1>
						KRISS.AI can significantly benefit your dental office in several
						ways
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
				{/* <div id="page7">
					<canvas></canvas>
				</div> */}
				<div id="page8">
					<h1>
						<span>24/7 Patient Experience</span> Unlike traditional chatbots,
						KRISS.AI interacts dynamically with patients, understanding unique
						questions & concerns. KRISS.AI answers questions outside normal
						office hours, enhancing customer experience & satisfaction.
					</h1>
				</div>
				<div id="page9">
					<h1>
						<span>Reduce Office Workload </span>KRISS handles customer inquiries
						to allow your staff to focus their efforts on in-office customers
						and tasks. She can assist with clinical notes and insurance
						narratives to further improve office efficiency.
					</h1>
				</div>
				<div id="page10">
					<h1>
						<span> Grow Your Practice </span>KRISS.AI increases the number of
						scheduled appointments by improving patient trust and case
						acceptance rates. Personalized customer interaction reduces website
						abandonment, growing your customer base while increasing sales and
						revenue.
					</h1>
				</div>
				<div id="page11">
					<h1>
						<span> Expert Resource </span>Whether a practitioner has a question
						about procedures or a team member has questions about billing and
						coding, KRISS.AI will serve as an expert resource, providing
						accurate answers in an instant.
					</h1>
				</div>
				<div className="bg-white">
					<div className="text-white testimonial">
						<div className="flex flex-col justify-center text-center">
							<h4 className="text-3xl font-medium my-10 text-black">
								See KRISS.AI at work
							</h4>
							<p className="text-xl text-[#1BB5C5]">
								Click a Case Study and chat with KRISS.AI now
							</p>
						</div>
						<div className="flex justify-center my-10 ">
							{cards.map((card) => (
								<Card
									client={card.client}
									address={card.address}
									description={card.description}
									imagen={card.imagen}
								/>
							))}
						</div>
					</div>
					<div className="bg-[#01294c]">
						<Works />
					</div>
					<div id="page19">
						<h1>More pixels than a 4K TV. For each eye.</h1>
						<h5>
							The custom micro‑OLED display system features 23 million pixels,
							delivering stunning resolution and colors. And a specially
							designed three‑element lens creates the feeling of a display
							that’s everywhere you look.
						</h5>
					</div>
					<div id="page20">
						<video
							src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4"
							autoPlay
							loop
							muted></video>
						<div id="center-page20">
							<h1>
								Our most advanced <br />
								Spatial Audio system ever.
							</h1>
							<p>
								Dual-driver audio pods positioned next to each ear deliver
								personalized sound while letting you hear what’s around you.
								Ambient Spatial Audio makes sounds feel like they’re coming from
								your surroundings. And with audio raytracing, Vision Pro
								analyzes your room’s acoustic properties — including the
								physical materials — to adapt and match sound to your space.
							</p>
						</div>
					</div>
					<div id="page21">
						<img
							id="troff"
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_off__fx6m2dj3mlqq_large.jpg"
							alt=""
						/>
						<img
							id="tron"
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg"
							alt=""
						/>
					</div>
					<div className="overlay">
						<h1>Responsive, precision eye tracking.</h1>
						<h5>
							A high-performance eye tracking system of LEDs and infrared
							cameras projects invisible light patterns onto each eye. This
							advanced system provides ultraprecise input without your needing
							to hold any controllers, so you can accurately select elements
							just by looking at them.
						</h5>
					</div>
					<div id="page22">
						<img
							id="snroff"
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large.jpg"
							alt=""
						/>
						<img
							id="snron"
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg"
							alt=""
						/>
					</div>
					<div className="overlay">
						<h1>A sophisticated sensor array.</h1>
						<h5>
							A pair of high-resolution cameras transmit over one billion pixels
							per second to the displays so you can see the world around you
							clearly. The system also helps deliver precise head and hand
							tracking and real‑time 3D mapping, all while understanding your
							hand gestures from a wide range of positions.
						</h5>
					</div>
					<div id="page23">
						<img
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_chips__s805s5o3gkii_medium.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}
