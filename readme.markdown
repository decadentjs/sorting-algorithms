# react-starter

bare-bones [react](https://facebook.github.io/react/) starter
using [reactify](https://npmjs.com/package/reactify) for jsx
under [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run)

[view the starter demo](http://substack.neocities.org/react_starter.html)

# quick start

```
$ npm install
$ npm run watch &
$ npm start
```

# commands

* `npm run build` - build for production
* `npm run watch` - automatically recompile during development
* `npm start` - start a static development web server

# starter code

``` js
var React = require('react')
var App = React.createClass({
  getInitialState: function () { return { n: 0 } },
  render: function () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick}>click me!</button>
    </div>
  },
  handleClick: function () {
    this.setState({ n: this.state.n + 1 })
  }
})
React.render(<App />, document.querySelector('#content'))
```

# contributing

If you like what you see, but want to add something more, fork this repo and add
your additional feature to the name of the fork. Try to be specific with the
name of your fork, listing the technologies used plus what features the fork
adds.

# variations

Check out the [list of forks](https://github.com/substack/react-starter/network/members)
to see how other people have customized this starter repo.
