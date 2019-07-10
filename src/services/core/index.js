import axios from 'axios';
import { BASE_URL, API_VERSION } from './constants';

const API_URI = `${BASE_URL}${API_VERSION}`;

const hireInsurance = async () => {
  const data = {
    apellidos: 'string',
    clienteId: 'string',
    codigoPostal: 'string',
    direccion: 'string',
    mail: 'string',
    nif: 'string',
    nombre: 'string',
    oferta: 'string',
    parametros: [
      {
        nombre: 'string',
        valor: 'string',
        valores: ['string']
      }
    ],
    password: 'string',
    poblacion: 'string',
    provincia: 'string',
    seguroId: 'string',
    telefono: 'string',
    transaccionId: 'string'
  };
  const response = await axios.post(`${API_URI}/contrataSeguro`, data);
  return response;
};

const getInsurance = async () => {
  const data = {
    clienteId: 'cli2',
    idioma: 'ES',
    password: '1234',
    seguroId: 'G-BIKE-BASICO',
    transaccionId: '1'
  };
  const response = await axios.post(`${API_URI}/obtenerSeguro`, data);
  return response;
};

const getInsuranceList = async () => {
  const data = {
    clienteId: 'cli2',
    idioma: 'ES',
    password: '1234',
    transaccionId: '1'
  };
  const response = await axios.post(`${API_URI}/obtenerSeguros`, data);
  return response;
};

const getGroupInsurance = async () => {
  const data = {
    clienteId: 'string',
    grupoSeguroId: 'string',
    idioma: 'ES',
    password: 'string',
    transaccionId: 'string'
  };
  const response = await axios.post(`${API_URI}/obtenerSegurosDelGrupo`, data);
  return response;
};

const getInsuranceRate = async () => {
  const data = {
    clienteId: 'string',
    parametros: [
      {
        nombre: 'string',
        valor: 'string',
        valores: ['string']
      }
    ],
    password: 'string',
    seguroId: 'string',
    transaccionId: 'string'
  };
  const response = await axios.post(`${API_URI}/tarificaSeguro`, data);
  return response;
};

export { hireInsurance, getInsurance, getInsuranceList, getGroupInsurance, getInsuranceRate };
