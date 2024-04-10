import { useEffect } from "react";
import { routes } from "./routes";
import { gsap } from "gsap";

export const NavDesktop = () => {
	useEffect(() => {
		// Create animation timeline
		const tl = gsap.timeline({
			defaults: { duration: 0.5, ease: "power2.out" },
		});

		// Initial positions for elements
		tl.set(".nav-item", { x: -50, opacity: 0 });

		// Animate each navigation item
		tl.fromTo(
			".nav-item",
			{ x: -50, opacity: 0 },
			{ x: 0, opacity: 1, stagger: 0.1 }
		);

		// Button animation
		tl.fromTo(
			".nav-button",
			{ x: 50, opacity: 0 },
			{ x: 0, opacity: 1, stagger: 0.1 }
		);

		// Run the timeline
		tl.play();
	}, []);

	const handleClick = (href: string) => {
		window.open(href, "_blank"); // Opens link in a new tab
	};

	return (
		// from-[#092441] to-[#1f5d94b3] bg-gradient-to-r shadow-md
		<ul className="sm:hidden lg:flex    bg-opacity-0  justify-center fixed h-16 w-full lg:items-center gap-5 text-sm font-semibold z-30 text-white">
			<img className="w-28 mr-[70%] nav-item" src="images/Logo-Kriss-AI.png" />
			{/* {routes.map((route) => {
				const { Icon, href, title } = route;
				return (
					<li>
						<a
							href={href}
							className="flex nav-item items-center gap-1 hover:text-[#1BB5C5] transition-all">
							<Icon />
							{title}
						</a>
					</li>
				);
			})} */}
			<button
				onClick={() => handleClick("https://app.kriss.ai/")}
				className=" rounded-3xl h-12 w-24  bg-[#78e4d7] nav-item">
				Login
			</button>
			<button
				onClick={() => handleClick("https://app.kriss.ai/register")}
				className=" rounded-3xl h-12 w-24  bg-[#78e4d7] nav-item">
				Sign Up
			</button>
		</ul>
	);
};
