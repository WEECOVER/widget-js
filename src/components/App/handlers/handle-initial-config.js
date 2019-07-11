import { getConfig } from '../../../services/widget-representation';

const applyInitialConfig = async () => {
  const { styles, insurances } = await getConfig();
  const { text, borders, primary } = styles;
  document.documentElement.style.setProperty('--text-color', text);
  document.documentElement.style.setProperty('--border-color', borders);
  document.documentElement.style.setProperty('--accent', primary);
  return insurances;
};

export { applyInitialConfig };
