import Inferno from "inferno";
import Component from "inferno-component";
import { Link } from "inferno-router";


export class NotFoundComponent extends Component {
  constructor(props) {
		super(props);
	}

	render() {
		return(
			<div class="text-center">
				<img src="./assets/404.jpg" />
				<p>Page Not Found, <Link to="/">Go Back to Home</Link></p>
			</div>
		);
	}
}