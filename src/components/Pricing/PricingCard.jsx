import React, { useState } from "react";
import CommunityAccordian from "../CommunityAccordian/CommunityAccordian";

const ProjectCard = ({
	index,
	title,
	price,
	description,
	benefits,
	buttonText,
	buttonLink,
}) => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleButtonClick = (href) => {
		window.open(href, "_blank"); // Opens link in a new tab
	};

	return (
		<div className="">
			<div className="relative min-w-[520px] p-5 rounded-2xl sm:w-[360px] w-full min-h-[600px] h-full bg-white overflow-scroll ">
				<div className="text-center">
					<h3 className=" font-bold text-[24px]">{title}</h3>
					<p className="mt-1  text-[#1BB5C5] text-xl font-semibold">{price}</p>
					<p className="mt-2 text-[20px] font-semibold">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{benefits.map((item, index) => {
						const { title, explanation } = item;
						return (
							<CommunityAccordian
								question={title}
								answer={explanation}
								key={index}
								show={openIndex === index}
								handleClick={() => handleClick(index)}
							/>
						);
					})}
				</div>
				<div className=" flex justify-center ">
					<div className="absolute  bottom-2">
						<button
							className="bg-[#100919] text-white rounded-full p-3 "
							onClick={() => handleButtonClick(buttonLink)}>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
