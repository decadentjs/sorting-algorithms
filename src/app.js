var React = require('react');
import Times from './times.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { n: 0 };
  }
  render () {
    return (
      <div>
        <Times n={this.state.n}/>
        <button onClick={this.handleClick.bind(this)}>click me!</button>
      </div>
    );
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 });
  }
}

export default App;
