import { getConfig } from '../../../services/widget-representation';

const applyInitialConfig = async () => {
  const { primary, text, borders } = await getConfig();
  document.documentElement.style.setProperty('--text-color', text);
  document.documentElement.style.setProperty('--border-color', borders);
  document.documentElement.style.setProperty('--accent', primary);
};

export { applyInitialConfig };
