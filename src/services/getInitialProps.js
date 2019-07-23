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
  const allInsurancesWithPrices = data.map(insurance => {
    let insuranceWithPrice;
    prices.forEach(({ codigoSeguro, precio, codigoOferta }) => {
      if (insurance.codigoSeguro === codigoSeguro) {
        insuranceWithPrice = { ...insurance, precio, codigoOferta, uniqueId: uuidv1() };
      }
    });
    return insuranceWithPrice;
  });

  return allInsurancesWithPrices;
};

export { getInitialProps };
