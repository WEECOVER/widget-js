const getInsuranceSelected = updatedInsurance => {
  const selectedInsurance = {
    price: 0,
    codigoOferta: null,
    codigoGrupoSeguro: null,
    complements: []
  };
  updatedInsurance.forEach(insurance => {
    if (insurance.checked) {
      const { precio: _price, codigoOferta, codigoGrupoSeguro } = insurance;
      selectedInsurance.codigoOferta = codigoOferta;
      selectedInsurance.codigoGrupoSeguro = codigoGrupoSeguro;
      selectedInsurance.price += Number(_price);
    }

    if (insurance.complements && insurance.complements.some(({ checked }) => checked)) {
      insurance.complements.forEach(complement => {
        const { checked, precio: _price } = complement;
        if (checked) {
          selectedInsurance.price += Number(_price);
          selectedInsurance.complements.push(complement);
        }
      });
    }
  });
  return selectedInsurance;
};

export { getInsuranceSelected };
