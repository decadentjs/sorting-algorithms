import React from 'react';
import ReactDOM from 'react-dom';
import {defn} from 'ud';
import App from './src/app.js';

ReactDOM.render(
  React.createElement(defn(module, App), null),
  document.querySelector('#content')
);
