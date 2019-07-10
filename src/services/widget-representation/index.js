import axios from 'axios';
import { API_URI } from './constants';

const fakeId = '355717f0-9d9c-11e9-bce5-55959cb314b7';

const getConfig = async () => {
  const { data } = await axios.get(`${API_URI}/${fakeId}`);
  return data.styles;
};

export { getConfig };
