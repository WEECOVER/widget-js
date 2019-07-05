export const loadCss = callback => {
  const cssId = 'widget-css';
  if (!document.getElementById(cssId)) {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = process.env.CSS_URI;

    document.getElementsByTagName('head')[0].appendChild(link);

    const img = document.createElement('img');
    img.onerror = () => callback();
    img.src = process.env.CSS_URI;
  }
};
