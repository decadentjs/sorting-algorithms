var React = require('react');
import selection_sort from './selection_sort.js';
import insertion_sort from './insertion_sort.js';
import bubble_sort from './bubble_sort.js';
import Sortable from './sortable.js';

var TIMEOUT = 50;

class Sorter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { list: this.props.list.slice() };
    // this.algo = this.getAlgo();
  }

  getAlgo() {
    switch (this.props.type) {
      case 'selection-sort':
        return selection_sort;
      case 'insertion-sort':
        return insertion_sort;
      case 'bubble-sort':
        return bubble_sort;
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      var ret = this.getAlgo()(this.state.list, this.state.resume);
      console.log(ret);
      if (ret.finished) {
        clearInterval(this.timer);
        this.setState({list: this.state.list, resume: ret, complete: true});
      }
      else {
        this.setState({list: this.state.list, resume: ret});
      }
    }, TIMEOUT);
  }

  getHeader () {
    switch (this.props.type) {
      case 'selection-sort':
        return <h1>Selection Sort</h1>;
      case 'insertion-sort':
        return <h1>Insertion Sort</h1>;
      case 'bubble-sort':
        return <h1>Bubble Sort</h1>;
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
        {this.state.list.map((w, i) => <Sortable
          w={w}
          sorted={this.state.resume && i < this.state.resume.i || this.state.complete}
          selected={this.state.resume && i === this.state.resume.jMin}
          current={this.state.resume && i === this.state.resume.i}
          target={this.state.resume && i === this.state.resume.j}/>)}
      </div>
    );
  }
}

export default Sorter;
