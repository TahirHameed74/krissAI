import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import { svg } from "../../assets/svg";

const DocumentsKriss = () => {
	return (
		<div>
			<section className="ai " id="ai">
				<div className="ai__head section-head">
					<h1 className="ai__head-title">
						<span className="text-white">AI correct</span>
						<br />
						<span className="text-white">to perfection</span>
					</h1>
				</div>
				<div className="ai__main">
					<img
						className="ai__gradiant-blur-img"
						src="/assets/svg/gradient-blur-med.svg"
						alt="gradient blur background"
					/>
					<div
						className="ai__mockup"
						data-loop="0"
						data-src="https://lottie.host/0295e92a-27eb-42dd-b0ee-d97339256f4b/wJ1XB6BqMT.json"
						data-autoplay="0"
						data-duration="1.4">
						<div className="ai__mockup-images">
							<img
								src="assets/images/phone-screen-2.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								src="assets/images/phone-screen-3.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								src="passets/images/phone-screen-4.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								src="assets/images/phone-screen-5.jpg"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="mockup__backup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
							<img
								className="img__backup"
								src="assets/images/phone-screen-1.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="ai__text">
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Trim</h4>
							<p className="ai__desc-paragraph">
								Automatically trim filler words like uhms, uhhs and pauses in
								speech
							</p>
						</div>
						<div className="ai__progress progress">
							<div className="ai__progress-bar bar"></div>
							<div className="ai__progress-bar bar"></div>
							<div className="ai__progress-bar bar"></div>
							<div className="ai__progress-bar bar"></div>
							<div className="ai__progress-bar bar"></div>
						</div>
					</div>
				</div>
				<div className="ai__main-mobile" hidden>
					<div className="ai__main-mobile-card">
						<div className="ai__main-mobile-assets">
							<img
								className="ai__main-mobile-img"
								src="assets/images/phone-screen-1.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="ai__main-mobile-mockup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
						</div>
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Lipdub</h4>
							<p className="ai__desc-paragraph">
								Change your lip movement in post production to edit the content
								of your speech
							</p>
						</div>
					</div>
					<div className="ai__main-mobile-card">
						<div className="ai__main-mobile-assets">
							<img
								className="ai__main-mobile-img"
								src="assets/images/phone-screen-2.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="ai__main-mobile-mockup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
						</div>
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Trim</h4>
							<p className="ai__desc-paragraph">
								Automatically trim filler words like uhms, uhhs and pauses in
								speech
							</p>
						</div>
					</div>
					<div className="ai__main-mobile-card">
						<img
							className="ai__main-mobile-card-gradiant-blur-img"
							src="assets/svg/gradient-blur-big.svg"
							alt="gradient blur background"
						/>
						<div className="ai__main-mobile-assets">
							<img
								className="ai__main-mobile-img"
								src="assets/images/phone-screen-3.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="ai__main-mobile-mockup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
						</div>
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Enhance Speech</h4>
							<p className="ai__desc-paragraph">
								Automatically remove background noise and enhance speech
							</p>
						</div>
					</div>
					<div className="ai__main-mobile-card">
						<div className="ai__main-mobile-assets">
							<img
								className="ai__main-mobile-img"
								src="assets/images/phone-screen-4.webp"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="ai__main-mobile-mockup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
						</div>
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Eye Contact</h4>
							<p className="ai__desc-paragraph">
								Correct eye contact to look at the camera in post production
							</p>
						</div>
					</div>
					<div className="ai__main-mobile-card">
						<div className="ai__main-mobile-assets">
							<img
								className="ai__main-mobile-img"
								src="assets/images/phone-screen-5.jpg"
								alt="screenshot of the app in phone mockup"
							/>
							<img
								className="ai__main-mobile-mockup"
								src="assets/images/mockup.webp"
								alt="phone mockup"
							/>
						</div>
						<div className="ai__desc">
							<h4 className="ai__desc-title">AI Speech Correction</h4>
							<p className="ai__desc-paragraph">
								Correct any mistakes or in your recorded speech with one tap
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DocumentsKriss;
