import React from "react"
import { useForm } from "react-hook-form"
import { Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission logic here, API data
  }

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="emailSignIn">Email</Label>
          <Input
            id="emailSignIn"
            name="email"
            type="email"
            className="form-control"
            invalid={errors.email ? true : false}
            {...register("email", { required: true })}
          />
          {errors.email && <FormFeedback>Email is required</FormFeedback>}
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="passwordSignIn">Password</Label>
          <Input
            id="passwordSignIn"
            name="password"
            type="password"
            className="form-control"
            invalid={errors.password ? true : false}
            {...register("password", { required: true })}
          />
          {errors.password && <FormFeedback>Password is required</FormFeedback>}
        </FormGroup>
        <br></br>
        <div className="text-center">
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
