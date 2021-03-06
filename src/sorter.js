import React from 'react';
import classnames from 'classnames';
import selection_sort from './selection_sort.js';
import insertion_sort from './insertion_sort.js';
import bubble_sort from './bubble_sort.js';
import shell_sort from './shell_sort.js';
import heap_sort from './heap_sort.js';
import Sortable from './sortable.js';

var TIMEOUT = 100;

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
      case 'shell-sort':
        return shell_sort;
      case 'heap-sort':
        return heap_sort;
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
          key={i}
          sorted={this.state.resume && this.state.resume.ranges && into(this.state.resume.ranges, i) || this.state.complete}
          selected={this.state.resume && i === this.state.resume.jMin}
          current={this.state.resume && i === this.state.resume.i}
          target={this.state.resume && i === this.state.resume.j}/>)}
      </div>
    );
  }
}

function into(ranges, num) {
  if (!ranges) {
    return false;
  }
  return ranges.some(r => {
    return (r[0] <= num) && (num <= r[1]);
  });
}

export default Sorter;
