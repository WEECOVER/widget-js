export const loadCss = () => {
  const cssId = 'widget-css';
  if (!document.getElementById(cssId)) {
    const head = document.getElementsByTagName('HEAD')[0];
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = process.env.CSS_URI;

    head.appendChild(link);
  }
};
