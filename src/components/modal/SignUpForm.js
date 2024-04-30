import React from "react"
import { useForm } from "react-hook-form"
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle account creation logic here, typically sending data to an API
  }

  // Function to validate if both passwords match
  const passwordsMatch = (value) => value === watch("password")

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            className="form-control"
            {...register("fullName", { required: "Full name is required" })}
            invalid={errors.fullName ? true : false}
          />
          {errors.fullName && (
            <FormFeedback>{errors.fullName.message}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="emailSignUp">Email</Label>
          <Input
            id="emailSignUp"
            name="email"
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
            invalid={errors.email ? true : false}
          />
          {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="passwordSignUp">Password</Label>
          <Input
            id="passwordSignUp"
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
            invalid={errors.password ? true : false}
          />
          {errors.password && (
            <FormFeedback>{errors.password.message}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="passwordConfirm">Confirm Password</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            className="form-control"
            {...register("passwordConfirm", {
              required: "Please confirm password",
              validate: passwordsMatch,
            })}
            invalid={errors.passwordConfirm ? true : false}
          />
          {errors.passwordConfirm &&
            (errors.passwordConfirm.type === "validate" ? (
              <FormFeedback>Passwords do not match</FormFeedback>
            ) : (
              <FormFeedback>{errors.passwordConfirm.message}</FormFeedback>
            ))}
        </FormGroup>
        <div className="text-center">
          <Button type="submit" className="submit-button">
            Create Account
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
