/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';
import EventBus from './utils/event-bus';
import API_CORE from './services/core';
import API_CONFIG from './services/widget-representation';
import { getInitialProps } from './services/getInitialProps';

// facade pattern
export default {
  widget: function(uniqueWidgetId) {
    this.eventBus = new EventBus(uniqueWidgetId);
    const WidgetApp = () => ({
      eventBus: this.eventBus,
      render: (id, lang, parameters) => {
        const API_CORE_INSTANCE = new API_CORE(lang);
        const API_CONFIG_INSTANCE = new API_CONFIG(id);
        this.eventBus.subscribe(this.eventBus.availableEvents.insuranceHired, ({ detail }) =>
          API_CORE_INSTANCE.hireInsurance(detail)
        );

        const node = document.getElementById(uniqueWidgetId);
        node.classList.add('widget-root');

        const initialProps = getInitialProps(
          parameters,
          id,
          API_CORE_INSTANCE,
          API_CONFIG_INSTANCE
        );

        ReactDOM.render(
          <App
            dataInsurances={initialProps}
            eventBus={this.eventBus}
            API_CORE={API_CORE_INSTANCE}
            API_CONFIG={API_CONFIG_INSTANCE}
            uniqueWidgetId={uniqueWidgetId}
          />,
          node
        );
      }
    });

    return new WidgetApp();
  }
};
