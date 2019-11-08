import uuidv1 from 'uuid/v1';

const getInitialProps = async (parameters, widgetId, API_CORE_INSTANCE, API_CONFIG_INSTANCE) => {
  const clientInsurances = await API_CONFIG_INSTANCE.applyInitialConfig(widgetId);
  const pricingPromise = clientInsurances.insurance.map(insurance =>
    API_CORE_INSTANCE.getPricing(insurance, parameters)
  );

  const dataPromise = clientInsurances.isgroup
    ? API_CORE_INSTANCE.getGroupInsurance(clientInsurances.insurance)
    : clientInsurances.insurance.map(insurance => API_CORE_INSTANCE.getInsurance(insurance));

  const [prices, data] = await Promise.all([Promise.all(pricingPromise), Promise.all(dataPromise)]);

  const [
    { precioAnual: precioComplementoAnual, precioMensual: precioComplementoMensual }
  ] = await Promise.all(
    data.map(insurance => {
      if (insurance.complementos && insurance.complementos.length) {
        const [{ nombre }] = insurance.complementos;
        parameters.parameters.push({ nombre, valor: true });
        return API_CORE_INSTANCE.getPricing(insurance.codigoSeguro, parameters);
      }
      return insurance;
    })
  );

  const allInsurancesWithPrices = data.map(insurance => {
    let insuranceWithPrice;
    prices.forEach(({ codigoSeguro, precioAnual, precioMensual, codigoOferta }) => {
      if (insurance.codigoSeguro === codigoSeguro) {
        const insuranceId = uuidv1();
        insuranceWithPrice = {
          ...insurance,
          complements: insurance.complementos.map(complement => ({
            ...complement,
            insuranceId,
            checked: false
          })),
          precioComplementoAnual,
          precioComplementoMensual,
          precio: precioAnual || precioMensual,
          codigoOferta,
          id: insuranceId,
          checked: false
        };
        delete insuranceWithPrice.complementos;
      }
    });
    return insuranceWithPrice;
  });
  return allInsurancesWithPrices;
};

export { getInitialProps };
