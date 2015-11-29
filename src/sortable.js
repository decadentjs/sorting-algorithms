var React = require('react');

class Sortable extends React.Component {
  render () {
    return (
      <div className="sortable"
        style={{width: this.props.w + 'px'}}></div>
    );
  }
}

export default Sortable;
