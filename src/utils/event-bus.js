/* eslint-disable */ 

function EventBus(id) {
  let bus = document.getElementById(id);
  this.availableEvents = {
    onChangePrice: `widget:onchange:price${id}`,
  }

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

export default EventBus

