import React from "react"
import { useForm } from "react-hook-form"
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import { useNavigate } from "react-router-dom"

const SignUpForm = ({ signUp }) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (newUser) => {
		signUp({ user: newUser })
		navigate("/")
	}

	// Function to validate if both passwords match
	const passwordsMatch = (value) => value === watch("password")

	return (
		<div className="form-container">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<br></br>
					<br></br>
					<Label for="username">Username </Label>
					<input
						id="username"
						name="username"
						type="text"
						className="form-control"
						{...register("username", { required: "Username is required" })}
					/>
					{errors.username && (
						<FormFeedback>{errors.username.message}</FormFeedback>
					)}
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label for="email">Email </Label>
					<input
						id="email"
						name="email"
						type="email"
						className="form-control"
						{...register("email", { required: "Email is required" })}
					/>
					{errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label for="password">Password</Label>
					<input
						id="password"
						name="password"
						type="password"
						className="form-control"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
					/>
					{errors.password && (
						<FormFeedback>{errors.password.message}</FormFeedback>
					)}
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label for="password_confirmation">Confirm Password</Label>
					<input
						id="password_confirmation"
						name="password_confirmation"
						type="password"
						className="form-control"
						{...register("password_confirmation", {
							required: "Please confirm password",
							validate: passwordsMatch,
						})}
					/>
					{errors.password_confirmation &&
						(errors.password_confirmation.type === "validate" ? (
							<FormFeedback>Passwords do not match</FormFeedback>
						) : (
							<FormFeedback>
								{errors.password_confirmation.message}
							</FormFeedback>
						))}
				</FormGroup>
				<div className="text-center">
					<Button type="submit" className="nav-button create-account-submit">
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default SignUpForm
