import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import CommunityAccordian from "../CommunityAccordian/CommunityAccordian";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({ index, title, price, description, benefits }) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="min-w-[520px] p-5 rounded-2xl sm:w-[360px] w-full bg-white">
				<div className="text-center">
					<h3 className=" font-bold text-[24px]">{title}</h3>
					<p className="mt-6 text-[#1BB5C5] text-2xl font-normal">{price}</p>
					<p className="mt-2 text-[20px] font-semibold">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2 ">
					{benefits.map((item, index) => {
						const { title, explanation } = item;
						return (
							<CommunityAccordian
								question={title}
								answer={explanation}
								key={index}
							/>
						);
					})}
				</div>
			</Tilt>
		</motion.div>
	);
};

export default ProjectCard;
