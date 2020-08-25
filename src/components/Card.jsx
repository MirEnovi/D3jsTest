import React, {Fragment} from "react";

//css
import '../css/card.css'
const Card = (props) => {
	return (
		<Fragment>
			<div className="card card-style">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
				</div>
			</div>
		</Fragment>
	)
}

export default Card