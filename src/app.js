var React = require('react');

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
      var list = this.state.list;
      var i = Math.floor(list.length * Math.random());
      var j = Math.floor(list.length * Math.random());
      var tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
      this.setState({list: list});
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
