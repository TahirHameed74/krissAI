import styles from "./styles.module.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime, delay } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from "three";
import { motion } from "framer-motion";
// import { styles } from "../Pricing/styles";
const color = "#5bbbd5";

const Icosahedron = () => (
	<mesh rotation-x={5}>
		<icosahedronGeometry args={[1, 0]} />
		<meshBasicMaterial wireframe color={color} />
	</mesh>
);

const Star = ({ p, highlighted, opacity, onStarMoveComplete }: any) => {
	const ref = useRef<THREE.Mesh>(null);

	const [color, setColor] = useState("#363f3e");
	// const [isDim, setIsDim] = useState(true);
	const [blinkStartTime, setBlinkStartTime] = useState(0);

	// Add a wave effect to the stars
	const waveAmplitude = 0.005; // Adjust this value to control the magnitude of the wave
	const waveFrequency = 2; // Adjust this value to control the frequency of the wave

	useLayoutEffect(() => {
		const distance = mix(2, 3.5, Math.random());
		const yAngle = mix(
			degreesToRadians(80),
			degreesToRadians(100),
			Math.random()
		);
		const xAngle = degreesToRadians(360) * p;
		ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
		// setBlinkStartTime(Math.random() * 0);
	}, []);

	const [isDim, setIsDim] = useState(Math.random() < 0.7); // Randomly set stars as dim or not dim
	const [redStarsPositions, setRedStarsPositions] = useState<number[]>([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsDim(Math.random() < 0.8); // Adjust the probability as needed
		}, Math.random() * 7500); // Adjust the interval range as needed

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		// Add 20 stars to redStarsPositions on clock's current position of movement
		const positions = [];
		const time = Date.now();
		for (let i = 0; i < 20; i++) {
			positions.push(Math.sin(time * 0.001) * 2 + 1);
		}
		setRedStarsPositions(positions);
	}, []);

	useFrame(() => {
		setColor(isDim ? "#363f3e" : "#5bbbd5"); // Adjust the dark and light colors as needed
	});

	// Apply the wave effect
	useFrame(({ clock }) => {
		const time = clock.getElapsedTime();
		const xAngle = degreesToRadians(360) * p;
		const waveOffsetX =
			Math.sin(0.022 * (xAngle * xAngle + time * time)) * 0.0005; // Calculate wave offset
		const waveOffsetY = Math.sin(xAngle + time * waveFrequency) * waveAmplitude; // Calculate wave offset

		// ref.current!.position.z += waveOffsetX; // Apply wave effect
		ref.current!.position.z += waveOffsetX; // Apply wave effect
		ref.current!.position.y += waveOffsetY; // Apply wave effect
		const currentPosition = ref.current!.position.clone();
		for (const position of redStarsPositions) {
			if (Math.abs(currentPosition.y) < 0.1) {
				// #ff0000
				setColor("#5bbbd5"); // Set color to red
				break;
			} else {
				setColor(isDim ? "#363f3e" : "#5bbbd5");
			}
		}
	});

	return (
		<mesh ref={ref}>
			<sphereGeometry args={[0.02, 64, 64]} />
			<meshBasicMaterial
				wireframe
				color={color}
				transparent
				opacity={opacity}
			/>
		</mesh>
	);
};

function Scene({ numStars = 1000, opacity }: any) {
	const gl = useThree((state) => state.gl);
	const { scrollYProgress } = useScroll();
	const slowedScrollYProgress = useTransform(
		scrollYProgress,
		(value) => value * 0.3 // Adjust the factor to slow down the scroll
	);
	const yAngle = useTransform(
		slowedScrollYProgress,
		[0, 1],
		[0, degreesToRadians(10)] // Reduced maximum angle
	);
	const time = useTime();

	useFrame(({ camera }) => {
		camera.position.setFromSphericalCoords(
			7, // Constant distance
			yAngle.get(),
			time.get() * 0.00006
		);
		camera.updateProjectionMatrix();
		camera.lookAt(0, 0, 0);
	});

	useLayoutEffect(() => gl.setPixelRatio(1));

	const stars = [];

	for (let i = 0; i < numStars; i++) {
		stars.push(<Star key={i} p={progress(0, numStars, i)} opacity={opacity} />);
	}

	return (
		<>
			<Icosahedron />
			{stars}
		</>
	);
}

const words = [
	"Word1",
	"Word2",
	"Word3",
	"Word4",
	"Word5",
	"Word6",
	"Word7",
	"Word8",
	"Word9",
	"Word10",
];

const Word = ({ word, delay }: any) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<motion.div
			// className="absolute z-[50] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			style={{ fontSize: "24px", marginBottom: "10px", color: "#ffffff" }}>
			{word}
		</motion.div>
	);
};

const WordsAnimation = () => {
	const delayIncrement = 0.5; // Adjust the delay increment as needed
	const delayBase = 0.5; // Adjust the base delay as needed

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			{words.map((word, index) => (
				<Word
					key={index}
					word={word}
					delay={delayBase + index * delayIncrement}
				/>
			))}
		</div>
	);
};
export default function ThreeDScroll() {
	const { scrollYProgress } = useScroll();
	const [opacity, setOpacity] = useState(0);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

	useEffect(() => {
		const handleScroll = () => {
			const newIndex = Math.floor(scrollYProgress.get() * 10);
			const currentScrollDirection =
				scrollYProgress.get() > opacity ? "down" : "up";
			setOpacity(scrollYProgress.get());
			setScrollDirection(currentScrollDirection);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollYProgress, opacity]);

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Canvas className={styles.canvas} gl={{ antialias: false }}>
					<Scene opacity={opacity} />
				</Canvas>
			</div>
			{/* <div>
				<WordsAnimation />
			</div> */}
		</div>
	);
}
