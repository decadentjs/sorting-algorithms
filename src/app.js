import React from 'react';
import arrayShuffle from 'array-shuffle';
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

    var ordered_buf = [];
    for (i = 0; i < 20; i++) {
      ordered_buf.push(WIDTH / 20 * (i + 1));
    }

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
      ordered_buf: ordered_buf,
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
          <div className="column-heading"></div>
          <div className="column-heading">Insertion Sort</div>
          <div className="column-heading">Selection Sort</div>
          <div className="column-heading">Bubble Sort</div>
          <div className="column-heading">Shell Sort</div>
          <div className="column-heading">Heap Sort</div>
        </div>
        <div className="row">
          <div className="row-heading">Random</div>
          <Sorter type="insertion-sort" list={this.state.random_buf}/>
          <Sorter type="selection-sort" list={this.state.random_buf}/>
          <Sorter type="bubble-sort"    list={this.state.random_buf}/>
          <Sorter type="shell-sort"     list={this.state.random_buf}/>
          <Sorter type="heap-sort"      list={this.state.random_buf}/>
        </div>
        <div className="row">
          <div className="row-heading">Nearly Sorted</div>
          <Sorter type="insertion-sort" list={this.state.partially_ordered_buf}/>
          <Sorter type="selection-sort" list={this.state.partially_ordered_buf}/>
          <Sorter type="bubble-sort"    list={this.state.partially_ordered_buf}/>
          <Sorter type="shell-sort"     list={this.state.partially_ordered_buf}/>
          <Sorter type="heap-sort"      list={this.state.partially_ordered_buf}/>
        </div>
        <div className="row">
          <div className="row-heading">Already Sorted</div>
          <Sorter type="insertion-sort" list={this.state.ordered_buf}/>
          <Sorter type="selection-sort" list={this.state.ordered_buf}/>
          <Sorter type="bubble-sort"    list={this.state.ordered_buf}/>
          <Sorter type="shell-sort"     list={this.state.ordered_buf}/>
          <Sorter type="heap-sort"      list={this.state.ordered_buf}/>
        </div>
        <div className="row">
          <div className="row-heading">Reversed</div>
          <Sorter type="insertion-sort" list={this.state.reversed_buf}/>
          <Sorter type="selection-sort" list={this.state.reversed_buf}/>
          <Sorter type="bubble-sort"    list={this.state.reversed_buf}/>
          <Sorter type="shell-sort"     list={this.state.reversed_buf}/>
          <Sorter type="heap-sort"      list={this.state.reversed_buf}/>
        </div>
        <div className="row">
          <div className="row-heading">Few Unique</div>
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
