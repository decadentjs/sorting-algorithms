var React = require('react');
var arrayShuffle = require('array-shuffle');

import Sorter from './sorter.js';
import swap from './swap.js';

const WIDTH = 100;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.getState();
  }

  getState () {
    var i, random_buf = [];
    for (i = 0; i < 20; i++) {
      random_buf.push(WIDTH / 20 * (i + 1));
    }
    random_buf = arrayShuffle(random_buf);

    var partially_ordered_buf = [];
    for (i = 0; i < 20; i++) {
      partially_ordered_buf.push(WIDTH / 20 * (i + 1));
    }
    swap(partially_ordered_buf, 2, 4);
    swap(partially_ordered_buf, 2, 3);
    swap(partially_ordered_buf, 7, 8);
    swap(partially_ordered_buf, 11, 12);
    swap(partially_ordered_buf, 13, 15);
    swap(partially_ordered_buf, 13, 14);
    swap(partially_ordered_buf, 16, 18);

    var reversed_buf = [];
    for (i = 0; i < 20; i++) {
      reversed_buf.push(WIDTH / 20 * (20 - i));
    }

    var few_unique_buf = [];
    for (i = 0; i < 20; i++) {
      few_unique_buf.push(WIDTH * Math.ceil(4 * Math.random()) / 4);
    }

    return {
      random_buf: random_buf,
      partially_ordered_buf: partially_ordered_buf,
      reversed_buf: reversed_buf,
      few_unique_buf: few_unique_buf
    };
  }

  componentDidMount () {
    this.reset();
  }

  reset () {
    this.setState(this.getState());
  }

  render () {
    return (
      <div>
        <div className="row">
          <h1></h1>
          <h1>Insertion Sort</h1>
          <h1>Selection Sort</h1>
          <h1>Bubble Sort</h1>
          <h1>Shell Sort</h1>
          <h1>Heap Sort</h1>
        </div>
        <div className="row">
          <h2>Random</h2>
          <Sorter type="insertion-sort" list={this.state.random_buf}/>
          <Sorter type="selection-sort" list={this.state.random_buf}/>
          <Sorter type="bubble-sort"    list={this.state.random_buf}/>
          <Sorter type="shell-sort"     list={this.state.random_buf}/>
          <Sorter type="heap-sort"      list={this.state.random_buf}/>
        </div>
        <div className="row">
          <h2>Nearly Sorted</h2>
          <Sorter type="insertion-sort" list={this.state.partially_ordered_buf}/>
          <Sorter type="selection-sort" list={this.state.partially_ordered_buf}/>
          <Sorter type="bubble-sort"    list={this.state.partially_ordered_buf}/>
          <Sorter type="shell-sort"     list={this.state.partially_ordered_buf}/>
          <Sorter type="heap-sort"      list={this.state.partially_ordered_buf}/>
        </div>
        <div className="row">
          <h2>Reversed</h2>
          <Sorter type="insertion-sort" list={this.state.reversed_buf}/>
          <Sorter type="selection-sort" list={this.state.reversed_buf}/>
          <Sorter type="bubble-sort"    list={this.state.reversed_buf}/>
          <Sorter type="shell-sort"     list={this.state.reversed_buf}/>
          <Sorter type="heap-sort"      list={this.state.reversed_buf}/>
        </div>
        <div className="row">
          <h2>Few Unique</h2>
          <Sorter type="insertion-sort" list={this.state.few_unique_buf}/>
          <Sorter type="selection-sort" list={this.state.few_unique_buf}/>
          <Sorter type="bubble-sort"    list={this.state.few_unique_buf}/>
          <Sorter type="shell-sort"     list={this.state.few_unique_buf}/>
          <Sorter type="heap-sort"      list={this.state.few_unique_buf}/>
        </div>
      </div>
    );
  }
}

export default App;
