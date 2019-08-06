/* eslint-disable func-names */
import axios from 'axios';
import { BASE_URL, API_VERSION, AVAILABLES_LANG } from './constants';

const API_URI = `${BASE_URL}${API_VERSION}`;

const API_CORE = function(lang) {
  if (!AVAILABLES_LANG.includes(lang)) {
    throw new Error(`${lang} language is not available, available langs ${AVAILABLES_LANG}`);
  }
  this._lang = lang;
  this.hireInsurance = async data => {
    const response = await axios.post(`${API_URI}/contrataSeguro`, data);
    return response;
  };

  this.getInsurance = async insuranceCode => {
    const data = {
      codigoCliente: 'WEEWIDGET001',
      idioma: this._lang,
      password: '?q^PGg5HgccC%qVw',
      transaccionId: '55',
      codigoSeguro: insuranceCode
    };
    const {
      data: { response }
    } = await axios.post(`${API_URI}/obtenerSeguro`, data);
    return response;
  };

  this.getInsuranceList = async () => {
    const data = {
      codigoCliente: 'WEEWIDGET001',
      idioma: this._lang,
      password: '?q^PGg5HgccC%qVw',
      transaccionId: '55'
    };
    const response = await axios.post(`${API_URI}/obtenerSeguros`, data);
    return response;
  };

  this.getGroupInsurance = async codigoGrupoSeguro => {
    const data = {
      codigoCliente: 'WEEWIDGET001',
      idioma: this._lang,
      password: '?q^PGg5HgccC%qVw',
      transaccionId: '55',
      codigoGrupoSeguro: codigoGrupoSeguro.join('')
    };
    const {
      data: { response }
    } = await axios.post(`${API_URI}/obtenerSegurosDelGrupo`, data);
    return response;
  };

  this.getPricing = async (insuranceCode, { parameters }) => {
    const data = {
      codigoCliente: 'WEEWIDGET001',
      parametros: parameters,
      idioma: this._lang,
      password: '?q^PGg5HgccC%qVw',
      transaccionId: 'TEST-WIDGET',
      codigoSeguro: insuranceCode
    };

    const {
      data: { response }
    } = await axios.post(`${API_URI}/tarificaSeguro`, data);
    return { ...response, codigoSeguro: insuranceCode };
  };
};

export default API_CORE;
