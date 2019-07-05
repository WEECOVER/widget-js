import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadCss } from './utils';
import './main.css';
import EventBus from './utils/event-bus';

window.WidgetEventBus = EventBus;
EventBus.subscribe('loadData', data => {
  console.log('data has been loaded', data);
});

const onLoadCss = () => {
  ReactDOM.render(<App />, document.getElementById('widget-root'));
};

loadCss(onLoadCss);
