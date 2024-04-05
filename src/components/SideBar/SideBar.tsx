import { routes } from "../NavBar/routes";
import { useEffect, useState } from "react";

interface SideBarProps {
	currentSection: string;
	setCurrentSection: (section: any) => void;
}

const SideBar = ({ currentSection, setCurrentSection }: SideBarProps) => {
	const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

	// Function to handle menu item click
	const handleMenuItemClick = (href: any, isHover: boolean) => {
		if (!isHover) {
			setCurrentSection(href);
		}
	};

	// const handleClick = useCallback(
	// 	async (event: React.MouseEvent<HTMLButtonElement>) => {
	// 		event.preventDefault();

	// 		userSession = userSession.data.session;
	// 		if (
	// 			!userSession &&
	// 			(path === "/create" || path === "/chat" || path === "/profile")
	// 		) {
	// 			event.preventDefault();
	// 			return;
	// 		}
	// 		if (path === "https://docs.thesia.ai/") {
	// 			// Open the link in a new tab
	// 			window.open(path, "_blank");
	// 		} else {
	// 			// Navigate to the regular path using Next.js router
	// 			router.push(path ?? "/");
	// 		}
	// 	},
	// 	[path, router]
	// );

	return (
		<div className="fixed right-8 h-full z-50 top-1/3">
			<ul className="list-none">
				{routes.map((route) => {
					const { href, title } = route;
					return (
						<li className="flex" key={href}>
							<a
								href={`${href}`} // Assuming href corresponds to section id
								className={`text-xl text-white leading-none hover:text-[#1BB5C5] ${
									currentSection === href ? "!text-[#1BB5C5]" : ""
								}`}
								onMouseEnter={() => {
									setHoveredTitle(title); // Update hoveredTitle state
									handleMenuItemClick(href, true); // Handle hover event
								}}
								onMouseLeave={() => {
									setHoveredTitle(null); // Reset hoveredTitle state
								}}
								onClick={() => handleMenuItemClick(href, false)} // Handle click event
								title={title} // Set title attribute for showing on hover
							>
								•
							</a>
							{/* Conditionally render hovered title */}
							{hoveredTitle === title && (
								<div className=" whitespace-nowrap absolute right-6 text-white ">
									{title}
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SideBar;
