import ProjectCard from "./PricingCard";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../constants";

const Pricing = () => {
	return (
		<div id="pricing" className="bg-[#01294c]">
			{/* <motion.div variants={textVariant()}>
				<p className={"text-center mt-10"}>Plans & Pricing</p>
			</motion.div> */}

			<div>
				<p className={"text-center text-3xl text-white pt-10 mt-5"}>
					Plans & Pricing
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
