import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadCss } from './utils';
import './main.css';

loadCss();

ReactDOM.render(<App />, document.getElementById('widget-root'));
