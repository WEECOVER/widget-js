const getInsuranceSelected = updatedInsurance => {
  const selectedInsurance = {
    price: 0,
    codigoOferta: null,
    codigoGrupoSeguro: null
  };
  updatedInsurance.forEach(insurance => {
    if (insurance.checked) {
      const { precio: _price, codigoOferta, codigoGrupoSeguro } = insurance;
      selectedInsurance.codigoOferta = codigoOferta;
      selectedInsurance.codigoGrupoSeguro = codigoGrupoSeguro;
      selectedInsurance.price += Number(_price);
    }

    if (insurance.complements && insurance.complements.some(({ checked }) => checked)) {
      insurance.complements.forEach(({ checked, precio: _price }) => {
        if (checked) {
          selectedInsurance.price += Number(_price);
        }
      });
    }
  });
  return selectedInsurance;
};

export { getInsuranceSelected };
