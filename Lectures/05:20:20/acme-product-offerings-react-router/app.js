import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home.js';

const app = document.querySelector("#app");

ReactDOM.render(<Home />, app, ()=> {console.log('render')})