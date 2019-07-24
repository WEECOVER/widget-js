const getPrice = updatedInsurance => {
  let price = 0;
  updatedInsurance.forEach(insurance => {
    if (insurance.checked) {
      const { precio: _price } = insurance;
      price += Number(_price);
    }

    if (insurance.complements && insurance.complements.some(({ checked }) => checked)) {
      insurance.complements.forEach(({ checked, precio: _price }) => {
        if (checked) {
          price += Number(_price);
        }
      });
    }
  });
  return price;
};

export { getPrice };
