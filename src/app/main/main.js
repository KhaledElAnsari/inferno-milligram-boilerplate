import Inferno from "inferno";
import Component from "inferno-component";


export class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.styles = {
      welcome: {
        width: "100%"
      }
    };
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
          <div style={ this.styles.welcome }>Welcome to your modern minimal boilerplate</div>
        </div>
        { this.props.children }

        <footer>
          This website is hosted by <a href="http://surge.sh" target="_blank">{ this.props.host }</a>
          <br />
          Prepared by <a href="https://twitter.com/KhaledElAnsari" target="_blank">{ this.props.owner }</a>
        </footer>
      </div>
    );
  }
}