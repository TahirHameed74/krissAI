import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [disabled, setDisabled] = useState(false);
	const [alertInfo, setAlertInfo] = useState({
		display: false,
		message: "",
		type: "",
	});

	// Shows alert message for form submission feedback
	const toggleAlert = (message: any, type: any) => {
		setAlertInfo({ display: true, message, type });

		// Hide alert after 5 seconds
		setTimeout(() => {
			setAlertInfo({ display: false, message: "", type: "" });
		}, 5000);
	};

	// Function called on submit that uses emailjs to send email of valid contact form
	const onSubmit = async (data: any) => {
		// Destrcture data object
		const { name, email, subject, message } = data;
		try {
			// Disable form while processing submission
			setDisabled(true);

			// Define template params
			const templateParams = {
				name,
				email,
				subject,
				message,
			};
			if (
				process.env.NEXT_SERVICE_ID &&
				process.env.NEXT_TEMPLATE_ID &&
				process.env.VITE_PUBLIC_KEY
			) {
				// Use emailjs to email contact form data
				await emailjs.send(
					process.env.NEXT_SERVICE_ID,
					process.env.NEXT_TEMPLATE_ID,
					templateParams,
					process.env.VITE_PUBLIC_KEY
				);
			}

			// Display success alert
			toggleAlert("Form submission was successful!", "success");
		} catch (e) {
			console.error(e);
			// Display error alert
			toggleAlert("Uh oh. Something went wrong.", "danger");
		} finally {
			// Re-enable form submission
			setDisabled(false);
			// Reset contact form fields after submission
			reset();
		}
	};

	return (
		<div id="contactUs">
			<div className="flex w-full justify-center text-3xl text-white ">
				<p>Contact Us</p>
			</div>

			<div className="w-4/5 flex mt-10 items-center justify-center  mx-auto">
				<form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className="w-full flex items-center  justify-between">
						<div className="w-full">
							<input
								type="text"
								{...register("name", {
									required: {
										value: true,
										message: "Please enter your name",
									},
									maxLength: {
										value: 30,
										message: "Please use 30 characters or less",
									},
								})}
								className="form-control formInput w-96"
								placeholder="Name"></input>
							{typeof errors.name === "string" && (
								<span className="errorMessage">{errors.name}</span>
							)}
						</div>
						<div className="ml-10">
							<input
								type="email"
								{...register("email", {
									required: true,
									pattern:
										/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								})}
								className="form-control formInput w-96"
								placeholder="Email address"></input>
							{errors.email && (
								<span className="errorMessage">
									Please enter a valid email address
								</span>
							)}
						</div>
					</div>
					{/* Row 2 of form */}
					<div className="row formRow w-full pt-2">
						<div>
							<input
								type="text"
								{...register("subject", {
									required: {
										value: true,
										message: "Please enter a subject",
									},
									maxLength: {
										value: 75,
										message: "Subject cannot exceed 75 characters",
									},
								})}
								className="form-control formInput w-full"
								placeholder="Subject"></input>
							{typeof errors.subjects === "string" && (
								<span className="errorMessage">{errors.subjects}</span>
							)}
						</div>
					</div>
					{/* Row 3 of form */}
					<div className="row formRow w-full h-52">
						<div className="col">
							<textarea
								rows={3}
								{...register("message", {
									required: true,
								})}
								className="form-control formInput w-full h-52"
								placeholder="Message"></textarea>
							{errors.message && (
								<span className="errorMessage">Please enter a message</span>
							)}
						</div>
					</div>
					<div className="flex justify-center">
						<button
							className="bg-[#1BB5C5] w-40 h-10 rounded-md text-white "
							disabled={disabled}
							type="submit">
							Submit
						</button>
					</div>
				</form>

				{alertInfo.display && (
					<div
						className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
						role="alert">
						{alertInfo.message}
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="alert"
							aria-label="Close"
							onClick={() =>
								setAlertInfo({ display: false, message: "", type: "" })
							} // Clear the alert when close button is clicked
						></button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
