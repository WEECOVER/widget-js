const cleanPreviousComplements = insurance => ({
  ...insurance,
  checked: false,
  complements: insurance.complements.map(complement => ({
    ...complement,
    checked: false
  }))
});

const removeComplements = updatedInsurances => {
  const existAnyCheckedInsurance = updatedInsurances.find(insurance => insurance.checked);
  return !existAnyCheckedInsurance
    ? updatedInsurances.map(insurance => cleanPreviousComplements(insurance))
    : updatedInsurances;
};

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

const handleInsuranceSelected = (insurances, id, checked, insuranceId) => {
  const updatedInsurances = insurances.map(insurance => {
    const currentInsurace =
      insurance.id === id
        ? { ...insurance, checked: !insurance.checked }
        : setThroughComplement(insurance, insuranceId);
    currentInsurace.complements = switchBetweenInsurances(currentInsurace.complements, id);
    return currentInsurace;
  });
  return !checked ? removeComplements(updatedInsurances) : updatedInsurances;
};
export { setThroughComplement, switchBetweenInsurances, handleInsuranceSelected };
