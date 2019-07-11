Instructions:
- prod.env contains BASE_URI should contains a valid uri to your CDN where will be hosted all the necessary files to render the widget.
- The comunication between the web and the widget will be throught events, we have the next available events:

|event name| description |
|----------|-------------|
|widget:loaded| fired when widget has been loaded by first time|
|widget:onchange:price| fired when the user has selected any product and price has changed|


This code below is an example how to load your widget if you dont have loaded React in your App.
```
  <script src="http://MY_CDN/downloader.js" ></script>
  <script src="http://MY_CDN/vendor.js"></script>
  <script>
      var el = document.getElementById("widget-root").addEventListener("widget:loaded", function() {
        window.widgetEventBus.subscribe('widget:onchange:price', function({detail}) {
          console.log('price has change', detail)
        })
      })
  </script>
```

If you App has loaded react before then don´t add vendor script and the following code below:
```
  <script src="http://MY_CDN/downloader.js" ></script>
  <script>
      var el = document.getElementById("widget-root").addEventListener("widget:loaded", function() {
        window.widgetEventBus.subscribe('widget:onchange:price', function({detail}) {
          console.log('price has change', detail)
        })
      })
  </script>
```