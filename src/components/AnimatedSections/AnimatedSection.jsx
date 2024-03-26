import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText); // Register SplitText plugin
const AnimatedSections = () => {
	const sectionsRef = useRef([]);
	const imagesRef = useRef([]);
	const headingsRef = useRef([]);
	const outerWrappersRef = useRef([]);
	const innerWrappersRef = useRef([]);
	const currentIndexRef = useRef(-1);
	const animatingRef = useRef(false);

	useEffect(() => {
		// Populate refs with DOM elements
		sectionsRef.current = document.querySelectorAll("section");
		imagesRef.current = document.querySelectorAll(".bg");
		headingsRef.current = gsap.utils.toArray(".section-heading");
		outerWrappersRef.current = gsap.utils.toArray(".outer");
		innerWrappersRef.current = gsap.utils.toArray(".inner");

		// Set initial positions of elements
		gsap.set(outerWrappersRef.current, { yPercent: 100 });
		gsap.set(innerWrappersRef.current, { yPercent: -100 });

		// Initial animation
		gotoSection(0, 1);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const gotoSection = (index, direction) => {
		const sections = sectionsRef.current;
		const images = imagesRef.current;
		const outerWrappers = outerWrappersRef.current;
		const innerWrappers = innerWrappersRef.current;
		const headings = headingsRef.current;
		const currentIndex = currentIndexRef.current;

		index = wrap(index); // make sure it's valid
		animatingRef.current = true;
		const fromTop = direction === -1;
		const dFactor = fromTop ? -1 : 1;
		const tl = gsap.timeline({
			defaults: { duration: 1.25, ease: "power1.inOut" },
			onComplete: () => (animatingRef.current = false),
		});

		if (currentIndex >= 0) {
			gsap.set(sections[currentIndex], { zIndex: 0 });
			tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
				sections[currentIndex],
				{ autoAlpha: 0 }
			);
		}

		gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
		if (outerWrappers[index])
			tl.fromTo(
				[outerWrappers[index], innerWrappers[index]],
				{
					yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
				},
				{
					yPercent: 0,
				},
				0
			)
				.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
				.fromTo(
					headings[index].chars,
					{
						autoAlpha: 0,
						yPercent: 150 * dFactor,
					},
					{
						autoAlpha: 1,
						yPercent: 0,
						duration: 1,
						ease: "power2",
						stagger: {
							each: 0.02,
							from: "random",
						},
					},
					0.2
				);

		currentIndexRef.current = index;
	};

	// Helper function to handle wrapping around sections
	const wrap = (index) => {
		const sections = sectionsRef.current;
		return gsap.utils.wrap(0, sections.length)(index);
	};

	// Event handler for scrolling down
	const handleScrollDown = () => {
		if (!animatingRef.current) {
			gotoSection(currentIndexRef.current + 1, 1);
		}
	};

	// Event handler for scrolling up
	const handleScrollUp = () => {
		if (!animatingRef.current) {
			gotoSection(currentIndexRef.current - 1, -1);
		}
	};

	// Event listener for scrolling
	useEffect(() => {
		const handleScroll = () => {
			const deltaY = window.event.deltaY;
			if (deltaY > 0) {
				handleScrollDown();
			} else {
				handleScrollUp();
			}
		};

		window.addEventListener("wheel", handleScroll);
		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div>
			<header>
				<div>Animated Sections</div>
				<div>
					<a href="https://codepen.io/BrianCross/pen/PoWapLP">
						Original By Brian
					</a>
				</div>
			</header>
			<section ref={sectionsRef} className="first">
				<div className="outer">
					<div className="inner">
						<div className="bg one">
							<h2 className="section-heading">Scroll down</h2>
						</div>
					</div>
				</div>
			</section>
			<section ref={sectionsRef} className="second">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading">Animated with GSAP</h2>
						</div>
					</div>
				</div>
			</section>
			<section ref={sectionsRef} className="third">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading">GreenSock</h2>
						</div>
					</div>
				</div>
			</section>
			<section ref={sectionsRef} className="fourth">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading">Animation platform</h2>
						</div>
					</div>
				</div>
			</section>
			<section ref={sectionsRef} className="fifth">
				<div className="outer">
					<div className="inner">
						<div className="bg">
							<h2 className="section-heading">Keep scrolling</h2>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AnimatedSections;
