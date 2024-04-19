import React, { useEffect, useState } from "react";

import styles from "./CommunityAccordian.module.css";
import useCommunityViewModel from "./CommunityAccordian.view-model";

function CommunityAccordian(props: any) {
	const { question, answer, handleClick, show, setShow } = props;
	// const { show, setShow, handleClick } = useCommunityViewModel();

	return (
		<div className={styles.root}>
			<div
				onClick={handleClick}
				className={`${styles.wrapper} cursor-pointer transition-all duration-500 ease-out 
					`}>
				<h1 className={`${styles.title} whites text-sm font-medium`}>
					{question}
				</h1>
				<img
					src={`images/${show ? "minus" : "plus"}.svg`}
					alt={show ? "collapse" : "expand"}
					className={styles.changeColor}
				/>
			</div>
			<div
				className={`${styles.content}  transition-all duration-500 ease-out ${
					show ? "max-h-[200px] pt-4" : "max-h-0 py-0 opacity-0"
				} overflow-hidden`}
				dangerouslySetInnerHTML={{ __html: answer }}
			/>
			{/* <div
				className={`${styles.content}  transition-all duration-500 ease-out ${
					show ? "max-h-[200px] " : "max-h-0 py-0 opacity-0"
				} overflow-hidden`}>
				{answer}
			</div>{" "} */}
		</div>
	);
}

export default React.memo(CommunityAccordian);
