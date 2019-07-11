/* eslint-disable */
const load = (function(){
  function _load(tag) {
    return url =>
      new Promise((resolve, reject) => {
        const element = document.createElement(tag);
        let parent = 'body';
        let attr = 'src';

        element.onload = function(){
          resolve(url);
        };
        element.onerror = function(){
          reject(url);
        };

        switch (tag) {
          case 'script':
            element.async = true;
            break;
          case 'link':
            element.type = 'text/css';
            element.rel = 'stylesheet';
            attr = 'href';
            parent = 'head';
        }

        element[attr] = url;
        document[parent].appendChild(element);
      });
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img')
  };
})();

Promise.all([
  load.css('%process.env.BASE_URI%/main.css'), 
  load.js('%process.env.BASE_URI%/event-bus.js')
  // load.js('%process.env.BASE_URI%/vendor.js'),
]).then(() => {
    Promise.all([
      load.js('%process.env.BASE_URI%/main.js'),
    ]).then(function(){
      console.log('loaded')
      const rootElement = document.getElementById('widget-root');
      console.log('ROOT', rootElement)
      const event = new Event('widget:loaded');
      rootElement.dispatchEvent(event);
    }).catch(function(){
      console.log('Oh no, epic failure!');
    })
})