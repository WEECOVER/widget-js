/* eslint-disable func-names */
import axios from 'axios';
import { API_URI } from './constants';

const API_CONFIG = function(id) {
  this._id = id;
  this._getConfig = async () => {
    const { data } = await axios.get(`${API_URI}/${this._id}`);

    return { styles: data.styles, insurances: data.objects };
  };

  this.applyInitialConfig = async () => {
    const { styles, insurances } = await this._getConfig();
    const { text, borders, primary } = styles;
    document.documentElement.style.setProperty('--text-color', text);
    document.documentElement.style.setProperty('--border-color', borders);
    document.documentElement.style.setProperty('--accent', primary);
    return insurances;
  };
};

export default API_CONFIG;
