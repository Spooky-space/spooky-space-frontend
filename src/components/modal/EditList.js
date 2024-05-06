import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row, Input } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const EditList = ({ updateList, user, movie }) => {
	const navigate = useNavigate()
	const { id } = useParams()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (editList) => {
		editList.user_id = user.id
		updateList(editList)
		navigate("/myMovieList")
	}

	return (
		<div className="form-size-show">
			<Form onSubmit={handleSubmit(onSubmit)} className="form-size">
				<Row>
					<Col md={6} className="hidden-option">
						<FormGroup>
							<Label for="tmdb_api_id"></Label>
							<input
								id="tmdb_api_id"
								name="tmdb_api_id"
								type="integer"
								className="form-control"
								defaultValue={movie.id}
								readOnly
								{...register("tmdb_api_id")}
							/>
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup check>
							<Label for="not-watched">Movies I need to watch</Label>
							<input
								id="not-watched"
								name="not-watched"
								type="radio"
								checked
								className="form-control"
								{...register("not-watched")}
							/>{" "}
						</FormGroup>
						<FormGroup check>
							<Label for="watched"></Label>
							<input
								id="watched"
								name="watched"
								type="radio"
								className="form-control"
								{...register("watched")}
							/>{" "}
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="rating"></Label>
							<input
								className="form-control"
								id="rating"
								name="rating"
								type="integer"
								defaultValue={0}
								{...register("rating")}
							>
								<option className="hidden-option">0</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</input>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col className="hidden-option">
						<FormGroup>
							<Label for="user_id"></Label>
							<input
								className="form-control"
								id="user_id"
								name="user_id"
								type="integer"
								defaultValue={user.id}
								readOnly
								{...register("user_id")}
							/>
						</FormGroup>
					</Col>
				</Row>
				<div className="center-content">
					<button
						onClick={handleSubmit}
						className="nav-button add-movie-button"
					>
						Add to My Movies
					</button>
				</div>
			</Form>
		</div>
	)
}

export default EditList
