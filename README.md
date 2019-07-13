# WeecoverWidget:

Instructions:
- prod.env contains BASE_URI should contains a valid uri to your CDN where will be hosted all the necessary files to render the widget.
- The comunication between the web and the widget will be throught events, we have the next available events:

|event name| description |
|----------|-------------|
|widget:loaded| fired when widget has been loaded by first time|
|widget:onchange:price| fired when the user has selected any product and price has changed|

## Integration inside existing react App:

Class component:

```
import React from react;

Class MyComponent extends from Component {
  constructor(props) {
    super(props)
     this.widgetRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.widgetRef, 'this.widgetRef');
    if (this.widgetRef && this.widgetRef.current) {
      const widgetUrl = 'https://weecover-widget.s3.eu-west-2.amazonaws.com/downloader.js';
      const scriptNode = document.createElement('script');
      scriptNode.src = widgetUrl;
      document.body.append(scriptNode);
      document.getElementById('widget-root').addEventListener('widget:loaded', () => {
      const widgetEventBus = weecoverWidgert.default.widgets.App.eventBus  
      weecoverWidgert.default.widgets.App.render(id, lang, widgetEventBus);  
      console.log('EL WIDGET HA CARGADO', widgetEventBus); 
        widgetEventBus.subscribe('widget:onchange:price', ({ detail }) => {
        console.log('price has change', detail);
        });
      });
    }
  }

  render() {
    return (
      <div>
      <div>My stuff<div>
      <div id="widget-root"><div>

      </div>
    )
  }
}
```

Function component:
```
import React, {useRef} from react;

const MyComponent = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (this.widgetRef && this.widgetRef.current) {
          const widgetUrl = 'https://weecover-widget.s3.eu-west-2.amazonaws.com/downloader.js';
          const scriptNode = document.createElement('script');
          scriptNode.src = widgetUrl;
          document.body.append(scriptNode);
          document.getElementById('widget-root').addEventListener('widget:loaded', () => {
          const widgetEventBus = weecoverWidgert.default.widgets.App.eventBus  
          weecoverWidgert.default.widgets.App.render(id, lang, widgetEventBus);  
            widgetEventBus.subscribe('widget:onchange:price', ({ detail }) => {
            console.log('price has change', detail);
            });
          });
        }
  }, [])
  
    return (
      <div>
        <div>My stuff<div>
        <div id="widget-root" />
      </div>
    )
}
```

## Integration script:

This code below is an example how to load your widget in your html file.
```
<body>
  <script src="https://weecover-widget.s3.eu-west-2.amazonaws.com/downloader.js"></script>
  <script>
      var el = document.getElementById("widget-root").addEventListener("widget:loaded", function() {
        const widgetEventBus = weecoverWidgert.default.widgets.App.eventBus  
        // Pass a valid widget id and valid lang
        weecoverWidgert.default.widgets.App.render(id, lang, widgetEventBus);
        console.log('EL WIDGET HA CARGADO', window.widgetEventBus)
        window.widgetEventBus.subscribe('widget:onchange:price', function({detail}) {
          console.log('price has change', detail)
        })
      })
  </script>
</body>
```