const getPrice = updatedInsurance => {
  let price = 0;
  updatedInsurance.forEach(insurance => {
    if (insurance.checked) {
      price += Number(insurance.price);
      insurance.complements.forEach(complement => {
        if (complement.checked) {
          price += Number(complement.price);
        }
      });
    }
  });
  return price;
};

export { getPrice };
