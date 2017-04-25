import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';


export default class AboutComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="text-center">
            <div>About Page</div>
            <Link to="/">Go to Home</Link>
        </div>
    );
  }
}