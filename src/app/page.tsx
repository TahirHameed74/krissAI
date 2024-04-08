"use client";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import SplitText from "gsap-trial/SplitText";
import React from "react";
import {
	batch,
	Fade,
	FadeIn,
	Move,
	Sticky,
	StickyIn,
	ZoomIn,
} from "react-scroll-motion";
import { NavDesktop } from "@/components/NavBar/Navbar";
import Banner from "@/components/Banner/Banner";
import Users from "@/components/Users/Users";
import Features from "@/components/Features/Features";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Pricing from "../components/Pricing/Pricing";
import SideBar from "@/components/SideBar/SideBar";
import ParticleRing from "@/components/3dScroll/3dScroll";
import ContactForm from "@/components/ContactUs/ContactUS";
import Footer from "@/components/Footer/Footer";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(SplitText); // Register SplitText plugin

export default function Home() {
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());
	const main = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// const split = new SplitText(".intro", { type: "chars" });

			// gsap.from(split.chars, {
			// 	duration: 5,
			// 	opacity: 0,
			// 	x: "-100%", // Start from the left
			// 	y: "100%", // Start from the bottom
			// 	ease: "power4.out",
			// 	stagger: {
			// 		amount: 0.1, // Stagger the animation for each character
			// 		grid: "auto", // Arrange chars in a grid
			// 		from: "start", // Start from the first char
			// 	},
			// });

			gsap.to(".logoBanner", { rotation: "+=360", duration: 3 });

			gsap.to(".bannerVideo", {
				scrollTrigger: {
					trigger: ".bannerVideo",
					start: "2% top",
					end: "bottom top",
				},
			});

			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: `#users`,
					start: `top top`,
					scrub: 1,
					pin: true,
				},
			});

			tl.fromTo(
				"#users>h1",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#users>h1", { opacity: 0, top: "30%", duration: 2 });

			// After h1 fades out, start fading in h2 and move it, but delay this part
			tl.fromTo(
				"#users>h2",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#users>h2", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});

			tl.fromTo(
				"#users>h3",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#users>h3", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});

			tl.fromTo(
				"#users>h4",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#users>h4", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});
			tl.fromTo(
				"#users>h5",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "30%", duration: 30 }
			).to("#users>h5", {
				opacity: 0,
				top: "30%",
				duration: 2,
			});
			var tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: `#features`,
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
					"#features>h1",
					{ opacity: 0, top: "100%" },
					{ opacity: 1, top: "50%", duration: 3 }
				)
				.to("#features>h1", { opacity: 0, top: "30%", duration: 3 });

			// After h1 fades out, start fading in h2 and move it, but delay this part
			tl1.fromTo(
				"#features>h2",
				{ opacity: 0, top: "100%" },
				{ opacity: 1, top: "50%", duration: 3 },
				">1"
			);

			var tl2 = gsap.timeline({
				scrollTrigger: {
					trigger: `#about`,
					start: `top top`,
					scrub: 1,

					pin: true,
				},
			});

			tl2.to("#about>#center-about", {
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
	const [currentSection, setCurrentSection] = useState("");

	const handleScroll = () => {
		const sections = document.querySelectorAll(
			"section[id]"
		) as NodeListOf<HTMLElement>; // Type assertion
		const scrollPosition = window.scrollY;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (
				scrollPosition >= sectionTop &&
				scrollPosition < sectionTop + sectionHeight
			) {
				console.log(section.id);
				setCurrentSection("#" + section.id);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="relative">
			{/* <ThreeDScroll /> */}

			<NavDesktop />
			<SideBar
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>
			<div ref={main}>
				<section id="section1">
					<Banner />
				</section>
				<section id="section2">
					<Users />
				</section>
				<section id="section3">
					<Features />
				</section>
				<section id="section4">
					<About />
				</section>
				<section id="section5">
					<Advantages />
				</section>
				<section id="section6">
					<CaseStudies />
				</section>
				<section id="section7">
					<Pricing />
				</section>
			</div>
			<ParticleRing />
			<section id="section8">
				<ContactForm />
			</section>

			<section id="section9">
				<Footer />{" "}
			</section>
		</div>
	);
}
