var React = require('react');
var classnames = require('classnames');
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
      if (ret.finished) {
        clearInterval(this.timer);
        this.setState({list: this.state.list, resume: ret, complete: true});
      }
      else {
        this.setState({list: this.state.list, resume: ret});
      }
    }, TIMEOUT);
  }

  render () {
    var c = classnames('sorter', {
      'complete': this.state.complete
    });
    return (
      <div className={c}>
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
