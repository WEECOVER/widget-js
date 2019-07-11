import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';

// window.widgetEventBus.subscribe('loadData', data => {
//   console.log('data has been loaded', data);
// });

// window.widgetEventBus.publish('load:widget');

ReactDOM.render(<App />, document.getElementById('widget-root'));
