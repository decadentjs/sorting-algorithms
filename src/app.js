var React = require('react');
import Sorter from './sorter.js';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var buf = [];
    for (var i = 0; i < 20; i++) {
      buf.push(250 * Math.random());
    }
    return (
      <div>
        <Sorter type="selection-sort" list={buf}/>
        <Sorter type="insertion-sort" list={buf}/>
      </div>
    );
  }
}

export default App;
