import React from "react"
import { useForm } from "react-hook-form"
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"

const LoginForm = ({ signIn }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (formData) => {
		signIn({ user: formData })
	}

	return (
		<div className="form-container">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<br></br>
					<br></br>
					<br></br>
					<Label for="email">Email </Label>
					<input
						id="email"
						name="email"
						type="email"
						className="form-control"
						{...register("email", { required: true })}
					/>
					{errors.email && <FormFeedback>Email is required</FormFeedback>}
				</FormGroup>
				<br></br>
				<FormGroup>
					<Label for="password">Password</Label>
					<input
						id="password"
						name="password"
						type="password"
						className="form-control"
						{...register("password", { required: true })}
					/>
					{errors.password && <FormFeedback>Password is required</FormFeedback>}
				</FormGroup>
				<br></br>
				<div className="text-center">
					<Button type="submit" className="nav-button">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default LoginForm
