import { useForm } from "react-hook-form"
import { Col, Form, FormGroup, Label, Row } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const WatchedEdit = ({ updateList, user, movie }) => {
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
	}
	return (
		<div className="form-size-show">
			<Form onSubmit={handleSubmit(onSubmit)} className="form-size">
				<Row>
					<Col md={6}>
						<FormGroup check>
							<Label for="not-watched">Movies I need to watch</Label>
							<input
								id="not-watched"
								name="not-watched"
								type="toggle"
								checked
								className="form-control"
								{...register("not-watched")}
							/>{" "}
						</FormGroup>
					</Col>
				</Row>
			</Form>
		</div>
	)
}

export default WatchedEdit
