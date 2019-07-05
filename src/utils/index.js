export const loadCss = onLoadCss => {
  const cssId = 'widget-css';
  if (!document.getElementById(cssId)) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = process.env.CSS_URI;

    document.getElementsByTagName('head')[0].appendChild(link);

    link.onload = () => {
      onLoadCss();
    };
  }
};
