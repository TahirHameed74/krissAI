// Importing necessary React and icon components
import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";
// Reusable SocialIcon component with hover effect
const SocialIcon = ({ icon: Icon }: any) => (
	<Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
// Footer component
const Footer = () => {
	// Array defining the content and structure of the footer
	const items = [
		// Social media icons
		{ type: "icon", icon: FaFacebookSquare },
		{ type: "icon", icon: FaInstagram },
		{ type: "icon", icon: FaTwitterSquare },
		{ type: "icon", icon: FaGithubSquare },
		{ type: "icon", icon: FaDribbbleSquare },
		// Footer sections
		{
			type: "section",
			title: "About",
			items: [
				"Case Studies",
				"Advantages",
				"Video",
				"Privacy Policy",
				"Our Terms and Conditions",
			],
		},
		// {
		// 	type: "section",
		// 	title: "Support",
		// 	items: ["Pricing", "Documentation", "Guides", "API Status"],
		// },
		// {
		// 	type: "section",
		// 	title: "Company",
		// 	items: ["About", "Blog", "Jobs", "Press", "Careers"],
		// },
		// { type: "section", title: "Legal", items: ["Claim", "Policy", "Terms"] },
	];
	// JSX structure of the footer
	return (
		<div className="bg-[#000300] flex justify-center">
			<div className="w-4/5 py-16 px-4 flex justify-center gap-8 text-gray-300">
				{/* Left section with brand and social icons */}
				<div className="w-1/4 grid justify-center">
					<img
						width="208px"
						height="60px"
						src="images/Logo-Kriss-AI.png"
						alt=""
						className=""
					/>
					<div className="flex justify-between md:w-[75%] my-6">
						{/* Mapping over social icons and rendering the SocialIcon component */}
						{items.map((item, index) =>
							item.type === "icon" ? (
								<SocialIcon key={index} icon={item.icon} />
							) : null
						)}
					</div>
				</div>
				{/* Right section with footer content organized in sections */}
				<div className="lg:col-span-2 flex justify-center mt-6 w-full">
					{/* Mapping over sections and rendering content */}
					{items.map((item, index) =>
						item.type === "section" ? (
							<div key={index}>
								<h6 className="font-medium text-gray-100 text-xl">
									{item.title}
								</h6>
								<ul>
									{/* Mapping over items in each section */}

									{item.items &&
										item.items.map((subItem, subIndex) => (
											<li
												key={subIndex}
												className="py-2 text-sm hover:text-[#00df9a]">
												{subItem}
											</li>
										))}
								</ul>
							</div>
						) : null
					)}
				</div>
			</div>
		</div>
	);
};
export default Footer;
