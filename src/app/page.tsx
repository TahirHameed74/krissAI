"use client";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
	const main = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.to(".intro", { rotation: "+=360", duration: 3 });

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
					trigger: `#page1`,
					start: `top top`,
					scrub: 1,
					// end: "bottom top", // This will give more room for scrolling through animations
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
					<nav>
						<h3>Kriss AI</h3>
						<button>Login</button>
						<button>Sign Up</button>
					</nav>
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
					<video
						src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
						autoPlay
						loop
						muted></video>
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
					<video
						src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4"
						autoPlay
						loop
						muted></video>
				</div>
				<div id="page3">
					<div id="page3-upper">
						<img
							src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/logo__4zgkuyebgtem_large.png"
							alt=""
						/>
						<div id="page3-upper-inner">
							<h3>WATCH THE FILM</h3>
							<h3>WATCH THE EVENT </h3>
						</div>
					</div>
					<img src="./images/Apple vision image.png" alt="" />
					<button>+ Take a closer look at Vision Pro</button>
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
					<h3>Design</h3>
					<h1>Designed by Apple.</h1>
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
				<div id="page7">
					<canvas></canvas>
				</div>
				<div id="page8">
					<h1>
						<span>Setup</span> Choose the plan that fits your practice needs.
						Our standard plan is full of benefits for every person in your
						dental office - from the patient to the dentist. Our premium plan
						will be launching soon with more invaluable tools for the doctor and
						the office staff.
					</h1>
				</div>
				<div id="page9">
					<h1>
						<span>Integration</span> Work with your local rep and a KRISS.AI
						onboarder to ensure KRISS knows every important detail about your
						practice. What insurance do you take? What equipment do you have?
						The KRISS.AI team will train KRISS so she answers your patients the
						way you want her to, every time.
					</h1>
				</div>
				<div id="page10">
					<h1>
						<span> Interaction </span>KRISS.AI is ready to answer patient
						questions about treatments, practitioner questions about clinical
						situations, and team questions about billing, coding, and insurance.
						Natural language processing creates a human-like conversation,
						enhancing the patient’s experience.
					</h1>
				</div>
				<div id="page11">
					<h1>
						<span> Interaction </span>KRISS.AI is ready to answer patient
						questions about treatments, practitioner questions about clinical
						situations, and team questions about billing, coding, and insurance.
						Natural language processing creates a human-like conversation,
						enhancing the patient’s experience.
					</h1>
				</div>
				<div id="page12">
					<h1>
						<span>Sound. </span>Speakers positioned close to your ears deliver
						rich Spatial Audio while keeping you aware of your surroundings.
					</h1>
				</div>
				<div id="page13">
					<h1>
						<span>EyeSight.</span> An outward display reveals your eyes while
						wearing Vision Pro, letting others know when you are using apps or
						fully immersed.
					</h1>
				</div>
				<div id="page14">
					<div className="left14"></div>
					<div className="right14"></div>
				</div>
				<div id="page15">
					<div id="center-page15">
						<video
							src="https://www.apple.com//105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/glass/large_2x.mp4"
							autoPlay
							loop
							muted></video>
					</div>
				</div>
				<div id="page16">
					<h2>
						A singular piece of
						<span>three-dimensionally formed laminated glass</span> acts as an
						optical surface for the cameras and sensors that view the world. It
						flows seamlessly into a custom aluminum alloy frame that gently
						curves to wrap around your face while serving as an attachment point
						for the
						<span>Light Seal.</span>
					</h2>
					<img
						src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
						alt=""
					/>
					<button>+ Learn more about design</button>
				</div>
				<div className="bg-black">
					<div id="page17">
						<h4>Technology</h4>
						<h1>
							Innovation you can <br />
							see, hear, and feel.
						</h1>
						<p>
							<span>Pushing boundaries from the inside out.</span> Spatial
							experiences on Vision Pro are only possible through groundbreaking
							Apple technology. Displays the size of a postage stamp that
							deliver more pixels than a 4K TV to each eye. Incredible advances
							in Spatial Audio. A revolutionary dual‑chip design featuring
							custom Apple silicon. A sophisticated array of cameras and
							sensors. All the elements work together to create an unprecedented
							experience you have to see to believe.
						</p>
					</div>
					<div id="page18">
						<canvas></canvas>
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
