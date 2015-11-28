var React = require('react');
var ReactDOM = require('react-dom');
var ud = require('ud');
import App from './lib/app.js';

ReactDOM.render(
  React.createElement(ud.defn(module, App), null),
  document.querySelector('#content')
);
