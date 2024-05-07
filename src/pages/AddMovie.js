import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

const AddMovie = ({ movie, createList, user }) => {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (newList) => {
		newList.user_id = user.id
		createList(newList)
		navigate("/mymovielist")
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
					<Col md={6} className="hidden-option">
						<FormGroup check>
							<Label for="watched"></Label>
							<input
								id="watched"
								name="watched"
								type="boolean"
								className="form-control"
								defaultValue={false}
								readOnly
								{...register("watched")}
							/>{" "}
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col className="hidden-option">
						<FormGroup>
							<Label for="rating"></Label>
							<input
								className="form-control"
								id="rating"
								name="rating"
								type="integer"
								defaultValue={0}
								readOnly
								{...register("rating")}
							/>
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
						<NavLink to="/mymovielist" className="my-movie-link">
							Add to My Movies
						</NavLink>
					</button>
				</div>
			</Form>
		</div>
	)
}
export default AddMovie
