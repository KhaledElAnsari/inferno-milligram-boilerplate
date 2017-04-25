import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';


export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="text-center">
            <div>Home Page</div>
            <Link to="/about">Go to About</Link>
        </div>
    );
  }
}