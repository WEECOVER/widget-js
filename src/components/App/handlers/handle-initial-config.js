import { getConfig } from '../../../services/widget-representation';

const applyInitialConfig = async id => {
  const { styles, insurances } = await getConfig(id);
  const { text, borders, primary } = styles;
  document.documentElement.style.setProperty('--text-color', text);
  document.documentElement.style.setProperty('--border-color', borders);
  document.documentElement.style.setProperty('--accent', primary);
  return insurances;
};

export { applyInitialConfig };
