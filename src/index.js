import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';
import EventBus from './utils/event-bus';
import API_CORE from './services/core';
import API_CONFIG from './services/widget-representation';

// facade pattern
export default {
  widgets: {
    App: {
      eventBus: EventBus,
      render: (id, lang, bus) => {
        const API_CORE_INSTANCE = new API_CORE(lang);
        const API_CONFIG_INSTANCE = new API_CONFIG(id);
        ReactDOM.render(
          <App
            widgetId={id}
            eventBus={bus}
            API_CORE={API_CORE_INSTANCE}
            API_CONFIG={API_CONFIG_INSTANCE}
          />,
          document.getElementById('widget-root')
        );
      }
    }
  }
};
