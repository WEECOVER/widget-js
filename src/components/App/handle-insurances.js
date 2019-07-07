const cleanPreviousComplements = insurance => ({
  ...insurance,
  checked: false,
  complements: insurance.complements.map(complement => ({
    ...complement,
    checked: false
  }))
});

const setCurrentAddButtonThroughComplement = insurance => ({
  ...insurance,
  checked: true
});

const setThroughComplement = (insurance, insuranceId) => {
  if (insurance.id !== insuranceId) {
    return cleanPreviousComplements(insurance);
  }
  return setCurrentAddButtonThroughComplement(insurance);
};

const switchBetweenInsurances = (complements, id) =>
  complements.map(complement =>
    complement.id === id ? { ...complement, checked: !complement.checked } : complement
  );

export { setThroughComplement, switchBetweenInsurances };
