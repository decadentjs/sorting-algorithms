var React = require('react');
var classnames = require('classnames');

class Sortable extends React.Component {
  render () {
    var c = classnames('sortable', {
      'sorted': this.props.sorted,
      'current': this.props.current,
      'target': this.props.target,
      'selected': this.props.selected
    });
    return (
      <div className={c}
        style={{width: this.props.w + 'px'}}></div>
    );
  }
}

export default Sortable;
