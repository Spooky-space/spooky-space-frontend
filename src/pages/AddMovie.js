import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row, Input } from "reactstrap"
import { useNavigate } from "react-router-dom"

const AddMovie = ({ createList, user, movie }) => {
	const navigate = useNavigate()
	const preloadedValues = {
		tmdb_api_id: 0,
		watched: false,
		rating: 0,
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: preloadedValues })

	const onSubmit = (newList) => {
		newList.user_id = user.id
		createList(newList)
		navigate("/myMovieList")
	}

	return (
		<div className="page-body">
			<h3 className="title-header center-content">Add a New Movie</h3>
			<Form onSubmit={handleSubmit(onSubmit)} className="form-size">
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="movie-id">{/*{movie.id}*/}</Label> 
							<Input
								id="movie-id"
								name="movie-id"
								placeholder="Movie ID"
								type="integer"
								className="form-control"
								{...register("movie-id", { required: true })}
							/>
							{errors.unit && (
								<span className="form-validations">movie id is required</span>
							)}
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup check>
							<Input name="not-watched" type="radio" />{" "}
							<Label check>I haven't seen this movie yet</Label>
						</FormGroup>
						<FormGroup check>
							<Input name="watched" type="radio" />{" "}
							<Label check>I've watched this movie</Label>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="rating"></Label>
							<Input
								className="form-control"
								id="rating"
								name="rating"
								type="select"
							>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							</Input>
						</FormGroup>
					</Col>
				</Row>
				<div className="center-content">
					<button onClick={handleSubmit} className="nav-button">
						Submit
					</button>
				</div>
			</Form>
		</div>
	)
}

export default AddMovie
