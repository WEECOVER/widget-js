import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';
import EventBus from './utils/event-bus';

// facade pattern
export default {
  widgets: {
    App: {
      eventBus: EventBus,
      render: () => {
        ReactDOM.render(<App />, document.getElementById('widget-root'));
      }
    }
  }
};
