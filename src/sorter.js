var React = require('react');
import selection_sort from './selection_sort.js';
import Sortable from './sortable.js';

class Sorter extends React.Component {
  constructor (props) {
    super(props);
    var buf = [];
    for (var i = 0; i < 20; i++) {
      buf.push(250 * Math.random());
    }
    this.state = { list: buf };
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      if (selection_sort(this.state.list)) {
        clearInterval(this.timer);
        this.setState({list: this.state.list, complete: true});
      }
      else {
        this.setState({list: this.state.list});
      }
    }, 1000);
  }

  render () {
    var c = '';
    if (this.state.complete) {
      c = 'complete';
    }
    return (
      <div className={c}>
        <h2>Selection Sort</h2>
        {this.state.list.map(w => <Sortable w={w}/>)}
      </div>
    );
  }
}

export default Sorter;
