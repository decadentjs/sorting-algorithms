var React = require('react');
import Sorter from './sorter.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { n: 0 };
  }
  render () {
    return (
      <Sorter type="selection-sort"/>
    );
  }
}

export default App;
