import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadCss } from './utils';
import './main.css';
import EventBus from './utils/event-bus';

window.WidgetEventBus = EventBus;
loadCss();

EventBus.subscribe('loadData', data => {
  console.log('data has been loaded', data);
});

ReactDOM.render(<App />, document.getElementById('widget-root'));
