import axios from 'axios';
import { API_URI } from './constants';

const fakeId = '6eff0290-a181-11e9-a41f-7940f295bd3f';

const getConfig = async () => {
  const { data } = await axios.get(`${API_URI}/${fakeId}`);

  return { styles: data.styles, insurances: data.objects };
};

export { getConfig };
