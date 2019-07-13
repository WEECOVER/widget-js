import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';

// facade pattern
export default {
  widgets: {
    App: {
      render: () => {
        ReactDOM.render(<App />, document.getElementById('widget-root'));
      }
    }
  }
};
