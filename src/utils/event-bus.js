/* eslint-disable */ 

function EventBus() {
  let bus = document.getElementById('widget-root');

  this.subscribe = function(event, callback) {
    bus.addEventListener(event, callback);
  };

  this.removeEventListener = function(event, callback) {
    bus.removeEventListener(event, callback);
  };

  this.publish = function(event, detail = {}) {
    bus.dispatchEvent(new CustomEvent(event, { detail }));
  };
}

window.widgetEventBus = new EventBus()
