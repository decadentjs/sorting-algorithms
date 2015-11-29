var React = require('react');

function selection_sort(a) {
  /* a[0] to a[n-1] is the array to sort */
  var i, j, n = a.length;
  var iMin, tmp;

  /* advance the position through the entire array */
  /*   (could do j < n-1 because single element is also min element) */
  for (j = 0; j < n-1; j++) {
    /* find the min element in the unsorted a[j .. n-1] */

    /* assume the min is the first element */
    iMin = j;
    /* test against elements after j to find the smallest */
    for ( i = j+1; i < n; i++) {
      /* if this element is less, then it is the new minimum */
      if (a[i] < a[iMin]) {
        /* found new minimum; remember its index */
        iMin = i;
      }
    }

    if (iMin != j) {
      tmp = a[j];
      a[j] = a[iMin];
      a[iMin] = tmp;
      return;
    }
  }
}

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
    console.log('mounted');
    setInterval(function() {
      selection_sort(this.state.list);
      this.setState({list: this.state.list});
    }.bind(this), 1000);
  }
  render () {
    return <div>{this.state.list.map(function(w){ return <Sortable w={w}/>;})}</div>;
  }
}

class Sortable extends React.Component {
  render () {
    return (
      <div className="sortable"
        style={{width: this.props.w + 'px'}}></div>
    );
  }
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { n: 0 };
  }
  render () {
    return (
      <Sorter />
    );
  }
}

export default App;
