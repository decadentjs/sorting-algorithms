var React = require('react');

class Sortable extends React.Component {
  render () {
    var c = 'sortable';
    if (this.props.sorted) {
      c += ' sorted';
    }
    if (this.props.current) {
      c += ' current';
    }
    if (this.props.target) {
      c += ' target';
    }
    if (this.props.selected) {
      c += ' selected';
    }
    return (
      <div className={c}
        style={{width: this.props.w + 'px'}}></div>
    );
  }
}

export default Sortable;
