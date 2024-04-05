import React, { Component } from "react";

const Users = () => {
	return (
		<div id="users">
			<h1>Who Can Chat With KRISS.AI?</h1>
			<h2 className="heading" id="part1">
				<span className="flex justify-center">PATIENTS </span>
				<span className="sentence">
					For Questions About Dental Concerns And Treatment Options
				</span>
			</h2>
			<h3 className="heading" id="part2">
				<span className="flex justify-center">DOCTORS </span>
				<span className="sentence">
					Clinical Decision Support & Document Assistance
				</span>
			</h3>

			<h4 className="heading" id="part3">
				<span className="flex justify-center"> RDAs & HYGIENISTS </span>
				<span className="sentence">
					Continuous Learning For Dental Education And Training
				</span>
			</h4>
			<h5 className="heading" id="part4">
				<span className="flex justify-center"> FRONT DESK </span>
				<span className="sentence">
					For Questions About Billing, Coding, And Insurance{" "}
				</span>
			</h5>
			<video src="/section2.mp4" autoPlay loop muted></video>
		</div>
	);
};

export default Users;
