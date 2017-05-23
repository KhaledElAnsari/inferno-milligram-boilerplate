import Inferno from "inferno";
import Component from "inferno-component";
import { Link } from "inferno-router";


export class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.divstyle = {
      width: "100%"
    }
  }

  testAlert() {
    window.alert("Hey!");
  }
    
  render() {
    return (
      <div class="container">
        <div class="row header">
          <div class="column logo text-center">
            <img src="./assets/inferno.png" />
            <img src="./assets/milligram.png" />
          </div>
        </div>
        <div class="row header text-center">
          <div style={this.divstyle}>Welcome to your modern minimal boilerplate</div>
        </div>
        { this.props.children }

        <footer>
          This website is hosted by <a href="http://surge.sh" target="_blank">Surge.sh</a>
          <br />
          Prepared by <a href="https://twitter.com/KhaledElAnsari" target="_blank">Khaled Al-Ansari</a>
        </footer>
      </div>
    );
  }
}