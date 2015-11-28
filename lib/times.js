var React = require('react')

class Times extends React.Component {
  render () {
    return <h1>clicked {this.props.n} times</h1>
  }
}
export default Times
