/* eslint-disable prefer-arrow-callback */
/* eslint-disable default-case */
/* eslint-disable func-names */
/* eslint-disable no-console */

const load = (function() {
  function _load(tag) {
    return function(url) {
      return new Promise(function(resolve, reject) {
        const element = document.createElement(tag);
        let parent = 'body';
        let attr = 'src';

        element.onload = function() {
          resolve(url);
        };
        element.onerror = function() {
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
    };
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img')
  };
})();

Promise.all([load.css('%process.env.BASE_URI%/main.css')]).then(() => {
  Promise.all([load.js('%process.env.BASE_URI%/main.js')])
    .then(function() {
      const bodyElement = document.body;
      console.log(bodyElement);
      const event = new Event('widget:loaded');
      bodyElement.dispatchEvent(event);
    })
    .catch(function(error) {
      console.error(error);
      console.error('Has been an error in widget');
    });
});
