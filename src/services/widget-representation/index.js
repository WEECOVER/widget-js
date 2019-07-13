import axios from 'axios';
import { API_URI } from './constants';

const getConfig = async id => {
  const { data } = await axios.get(`${API_URI}/${id}`);

  return { styles: data.styles, insurances: data.objects };
};

export { getConfig };
