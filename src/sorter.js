var React = require('react');
import selection_sort from './selection_sort.js';
import insertion_sort from './insertion_sort.js';
import Sortable from './sortable.js';

class Sorter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { list: this.props.list };
    // this.algo = this.getAlgo();
  }

  getAlgo() {
    switch (this.props.type) {
      case 'selection-sort':
        return selection_sort;
      case 'insertion-sort':
        return insertion_sort;
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      if (this.getAlgo()(this.state.list)) {
        clearInterval(this.timer);
        this.setState({list: this.state.list, complete: true});
      }
      else {
        this.setState({list: this.state.list});
      }
    }, 1000);
  }

  getHeader () {
    switch (this.props.type) {
      case 'selection-sort':
        return <h1>Selection Sort</h1>;
      case 'insertion-sort':
        return <h1>Insertion Sort</h1>;
    }
  }

  render () {
    var c = '';
    if (this.state.complete) {
      c = 'complete';
    }
    return (
      <div className={c}>
        {this.getHeader()}
        {this.state.list.map(w => <Sortable w={w}/>)}
      </div>
    );
  }
}

export default Sorter;
