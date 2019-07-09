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

load.css('%process.env.BASE_URI%/main.css').then(() =>{
  Promise.all([
    load.js('%process.env.BASE_URI%/main.js'),
  ]).then(function(){
    console.log('loaded')
  }).catch(function(){
    console.log('Oh no, epic failure!');
  })
})