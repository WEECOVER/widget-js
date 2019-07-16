/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';
import EventBus from './utils/event-bus';
import API_CORE from './services/core';
import API_CONFIG from './services/widget-representation';

// facade pattern
export default {
  widget: function(uniqueWidgetId) {
    this.eventBus = new EventBus(uniqueWidgetId);
    const WidgetApp = () => ({
      eventBus: this.eventBus,
      render: (id, lang, bus) => {
        const API_CORE_INSTANCE = new API_CORE(lang);
        const API_CONFIG_INSTANCE = new API_CONFIG(id);
        this.eventBus.subscribe(
          this.eventBus.availableEvents.widgetAddPricingParameters,
          ({ detail }) => {
            console.log('pricingParameters on widget', detail.parametros);
          }
        );
        ReactDOM.render(
          <App
            widgetId={id}
            eventBus={this.eventBus}
            API_CORE={API_CORE_INSTANCE}
            API_CONFIG={API_CONFIG_INSTANCE}
          />,
          document.getElementById(uniqueWidgetId)
        );
      }
    });

    return new WidgetApp();
  }
};
