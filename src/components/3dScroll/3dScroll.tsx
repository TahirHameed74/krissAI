//  import styles from "./styles.module.css";
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { useRef, useState, useEffect, useLayoutEffect } from "react";
// import { useTransform, useScroll, useTime, delay } from "framer-motion";
// import { degreesToRadians, progress, mix } from "popmotion";
// import * as THREE from "three";
// import { motion } from "framer-motion";
// // import { styles } from "../Pricing/styles";
// const color = "#5bbbd5";

// const Icosahedron = () => (
// 	<mesh rotation-x={5}>
// 		<icosahedronGeometry args={[1, 0]} />
// 		<meshBasicMaterial wireframe color={color} />
// 	</mesh>
// );

// const Star = ({ p, highlighted, opacity, onStarMoveComplete }: any) => {
// 	const ref = useRef<THREE.Mesh>(null);

// 	const [color, setColor] = useState("#363f3e");
// 	// const [isDim, setIsDim] = useState(true);
// 	const [blinkStartTime, setBlinkStartTime] = useState(0);

// 	// Add a wave effect to the stars
// 	const waveAmplitude = 0.005; // Adjust this value to control the magnitude of the wave
// 	const waveFrequency = 2; // Adjust this value to control the frequency of the wave

// 	useLayoutEffect(() => {
// 		const distance = mix(2, 3.5, Math.random());
// 		const yAngle = mix(
// 			degreesToRadians(80),
// 			degreesToRadians(100),
// 			Math.random()
// 		);
// 		const xAngle = degreesToRadians(360) * p;
// 		ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
// 		// setBlinkStartTime(Math.random() * 0);
// 	}, []);

// 	const [isDim, setIsDim] = useState(Math.random() < 0.7); // Randomly set stars as dim or not dim
// 	const [redStarsPositions, setRedStarsPositions] = useState<number[]>([]);

// 	useEffect(() => {
// 		const intervalId = setInterval(() => {
// 			setIsDim(Math.random() < 0.8); // Adjust the probability as needed
// 		}, Math.random() * 7500); // Adjust the interval range as needed

// 		return () => clearInterval(intervalId);
// 	}, []);

// 	useEffect(() => {
// 		// Add 20 stars to redStarsPositions on clock's current position of movement
// 		const positions = [];
// 		const time = Date.now();
// 		for (let i = 0; i < 20; i++) {
// 			positions.push(Math.sin(time * 0.001) * 2 + 1);
// 		}
// 		setRedStarsPositions(positions);
// 	}, []);

// 	useFrame(() => {
// 		setColor(isDim ? "#363f3e" : "#5bbbd5"); // Adjust the dark and light colors as needed
// 	});

// 	// Apply the wave effect
// 	useFrame(({ clock }) => {
// 		const time = clock.getElapsedTime();
// 		const xAngle = degreesToRadians(360) * p;
// 		const waveOffsetX =
// 			Math.sin(0.022 * (xAngle * xAngle + time * time)) * 0.0005; // Calculate wave offset
// 		const waveOffsetY = Math.sin(xAngle + time * waveFrequency) * waveAmplitude; // Calculate wave offset

// 		// ref.current!.position.z += waveOffsetX; // Apply wave effect
// 		ref.current!.position.z += waveOffsetX; // Apply wave effect
// 		ref.current!.position.y += waveOffsetY; // Apply wave effect
// 		const currentPosition = ref.current!.position.clone();
// 		for (const position of redStarsPositions) {
// 			if (Math.abs(currentPosition.y) < 0.1) {
// 				// #ff0000
// 				setColor("#5bbbd5"); // Set color to red
// 				break;
// 			} else {
// 				setColor(isDim ? "#363f3e" : "#5bbbd5");
// 			}
// 		}
// 	});

// 	return (
// 		<mesh ref={ref}>
// 			<sphereGeometry args={[0.02, 64, 64]} />
// 			<meshBasicMaterial
// 				wireframe
// 				color={color}
// 				transparent
// 				opacity={opacity}
// 			/>
// 		</mesh>
// 	);
// };

// function Scene({ numStars = 1000, opacity }: any) {
// 	const gl = useThree((state) => state.gl);
// 	const { scrollYProgress } = useScroll();
// 	const slowedScrollYProgress = useTransform(
// 		scrollYProgress,
// 		(value) => value * 0.3 // Adjust the factor to slow down the scroll
// 	);
// 	const yAngle = useTransform(
// 		slowedScrollYProgress,
// 		[0, 1],
// 		[0, degreesToRadians(10)] // Reduced maximum angle
// 	);
// 	const time = useTime();

// 	useFrame(({ camera }) => {
// 		camera.position.setFromSphericalCoords(
// 			7, // Constant distance
// 			yAngle.get(),
// 			time.get() * 0.00006
// 		);
// 		camera.updateProjectionMatrix();
// 		camera.lookAt(0, 0, 0);
// 	});

// 	useLayoutEffect(() => gl.setPixelRatio(1));

// 	const stars = [];

// 	for (let i = 0; i < numStars; i++) {
// 		stars.push(<Star key={i} p={progress(0, numStars, i)} opacity={opacity} />);
// 	}

// 	return (
// 		<>
// 			<Icosahedron />
// 			{stars}
// 		</>
// 	);
// }

// const words = [
// 	"Word1",
// 	"Word2",
// 	"Word3",
// 	"Word4",
// 	"Word5",
// 	"Word6",
// 	"Word7",
// 	"Word8",
// 	"Word9",
// 	"Word10",
// ];

// const Word = ({ word, delay }: any) => {
// 	const [isVisible, setIsVisible] = useState(false);

// 	return (
// 		<motion.div
// 			// className="absolute z-[50] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: isVisible ? 1 : 0 }}
// 			transition={{ duration: 0.5 }}
// 			style={{ fontSize: "24px", marginBottom: "10px", color: "#ffffff" }}>
// 			{word}
// 		</motion.div>
// 	);
// };

// const WordsAnimation = () => {
// 	const delayIncrement = 0.5; // Adjust the delay increment as needed
// 	const delayBase = 0.5; // Adjust the base delay as needed

// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				flexDirection: "column",
// 				alignItems: "center",
// 				justifyContent: "center",
// 				height: "100vh",
// 			}}>
// 			{words.map((word, index) => (
// 				<Word
// 					key={index}
// 					word={word}
// 					delay={delayBase + index * delayIncrement}
// 				/>
// 			))}
// 		</div>
// 	);
// };
// export default function ThreeDScroll() {
// 	const { scrollYProgress } = useScroll();
// 	const [opacity, setOpacity] = useState(0);
// 	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			const newIndex = Math.floor(scrollYProgress.get() * 10);
// 			const currentScrollDirection =
// 				scrollYProgress.get() > opacity ? "down" : "up";
// 			setOpacity(scrollYProgress.get());
// 			setScrollDirection(currentScrollDirection);
// 		};

// 		window.addEventListener("scroll", handleScroll);

// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, [scrollYProgress, opacity]);

// 	return (
// 		<div className={styles.root}>
// 			<div className={styles.container}>
// 				<Canvas className={styles.canvas} gl={{ antialias: false }}>
// 					<Scene opacity={opacity} />
// 				</Canvas>
// 			</div>
// 			{/* <div>
// 				<WordsAnimation />
// 			</div> */}
// 		</div>
// 	);
// }

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./styles.module.css";
const ParticleRing = () => {
	const sceneRef: any = useRef();
	const rendererRef: any = useRef(null);
	const particleSystemRef: any = useRef();
	const textsRef: any = useRef([]);

	const containerRef: any = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		rendererRef.current = renderer;
		sceneRef.current.appendChild(renderer.domElement);

		// Create particles
		const particleCount = 2000;
		const particles = new THREE.BufferGeometry();
		const particlePositions = new Float32Array(particleCount * 3);
		const particleColors = new Float32Array(particleCount * 3);

		const startColor = new THREE.Color("#03ffe0");
		const endColor = new THREE.Color("#47edc4"); // Light shade of #03ffe0
		var geometry = new THREE.PlaneGeometry(35, 20, 32);
		var texture = new THREE.TextureLoader().load("images/test.png");
		var material = new THREE.MeshBasicMaterial({ map: texture });

		for (let p = 0; p < particleCount; p++) {
			const theta = Math.random() * Math.PI * 2; // Random angle
			const radius = 36 + Math.random() * 30; // Random radius
			const x = Math.cos(theta) * radius;
			const y = Math.sin(theta) * radius;
			const z = 0;

			particlePositions[p * 3] = x;
			particlePositions[p * 3 + 1] = y;
			particlePositions[p * 3 + 2] = z;

			// Calculate color based on distance
			const distance = Math.sqrt(x * x + y * y);
			const percentage = distance / 80; // Assuming 80 is the maximum distance

			const interpolatedColor = new THREE.Color()
				.copy(startColor)
				.lerp(endColor, percentage);

			// const color = new THREE.Color().setHSL((1 - distance / 80) * 0.4, 2, 10); // Green to light green
			particleColors[p * 3] = interpolatedColor.r;
			particleColors[p * 3 + 1] = interpolatedColor.g;
			particleColors[p * 3 + 2] = interpolatedColor.b;
		}

		particles.setAttribute(
			"position",
			new THREE.BufferAttribute(particlePositions, 3)
		);
		particles.setAttribute(
			"color",
			new THREE.BufferAttribute(particleColors, 3)
		);

		const particleMaterial = new THREE.PointsMaterial({
			size: 0.8,
			vertexColors: true,
		});
		const particleSystem = new THREE.Points(particles, particleMaterial);
		var mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);
		scene.add(particleSystem);
		particleSystemRef.current = particleSystem;

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Rotate particle system
			particleSystem.rotation.z += 0.001;

			// Ripple effect
			const time = Date.now() * 0.002;
			const positions = particles.getAttribute("position");
			for (let p = 0; p < particleCount; p++) {
				const x = positions.getX(p);
				const y = positions.getY(p);
				const distance = Math.sqrt(x * x + y * y);
				positions.setZ(p, Math.sin(distance / 5 - time) * 5);
			}
			positions.needsUpdate = true;

			renderer.render(scene, camera);
		};

		// Set camera position
		camera.position.z = 100;

		animate();

		// Create text elements
		const texts = [
			". Informed consent",
			". Clinical notes",
			". Insurance Appeal letter",
			". Patient work excuse",
			". Child school excuse",
			". Medical Necessity Narrative",
			". Dental blog post",
			". Explanation of Benefits Letter",
			". Treatment plan",
			". Specialist referral letter",
			". Dental Lab prescription",
			". Social media marketing content",
			// "Patient insights",
		];

		texts.forEach((text, index) => {
			const textDiv = document.createElement("div");
			textDiv.textContent = text;
			textDiv.style.position = "fixed";
			textDiv.style.top = `${50 + 30 * Math.sin((index * Math.PI) / 6)}%`; // Position around a circle
			textDiv.style.left = `${50 + 20 * Math.cos((index * Math.PI) / 6)}%`;
			textDiv.style.transform = "translate(-50%, -50%)";
			textDiv.style.opacity = "0"; // Initially hidden

			// Set color for texts with odd indices
			if (index % 2 !== 0) {
				textDiv.style.color = "#5f6163"; // Change color as needed
			} else {
				textDiv.style.color = "#03ffe0"; // Default color for the rest
			}

			textsRef.current.push(textDiv);
			containerRef.current.appendChild(textDiv);
		});

		// #5f6163

		// Function to handle scroll event
		const revealText = () => {
			const scrollY = containerRef.current.scrollTop;
			const revealThreshold = containerRef.current.offsetHeight / 2;

			if (scrollY > revealThreshold) {
				textsRef.current.forEach((text: any) => {
					text.style.opacity = "1";
				});
			} else {
				textsRef.current.forEach((text: any) => {
					text.style.opacity = "0";
				});
			}
			if (scrollY > revealThreshold) {
				const progress = Math.min(
					(scrollY - revealThreshold) / revealThreshold,
					1
				);

				// Interpolate the position of the text from its initial position to the middle of the scene
				const initialTop = 40;
				const targetTop = 40; // Top position in the middle of the scene
				const interpolatedTop =
					initialTop + (targetTop - initialTop) * progress;

				const initialLeft = 40;
				const targetLeft = 50; // Left position in the middle of the scene
				const interpolatedLeft =
					initialLeft + (targetLeft - initialLeft) * progress;

				// Update the position of the text
				textsRef.current[2].style.opacity = "1";
				textsRef.current[2].style.top = `${interpolatedTop}%`;
				textsRef.current[2].style.left = `${interpolatedLeft}%`;
				textsRef.current[2].style.transform = "translate(-50%, -50%)";
			}
		};

		const deleteText = () => {
			textsRef.current.forEach((text: any) => {
				text.style.opacity = "0";
			});
		};

		// Attach scroll event listener
		containerRef.current.addEventListener("scroll", revealText);

		// Clean up
		return () => {
			scene.remove(mesh);
			scene.remove(particleSystem);
			rendererRef.current.dispose();
		};
	}, []);

	return (
		<div className="relative h-screen">
			<div
				ref={containerRef}
				style={{ width: "100%", height: "100vh", overflowY: "scroll" }}
				className="relative">
				{" "}
				<div ref={sceneRef} />
			</div>
		</div>
	);
};

export default ParticleRing;
