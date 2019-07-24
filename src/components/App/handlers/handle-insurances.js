const cleanPreviousComplements = insurance => ({
  ...insurance,
  checked: false,
  complements:
    insurance.complements &&
    insurance.complements.map(complement => ({
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

const setThroughComplement = (insurance, insuranceId, type) => {
  if (insurance.id !== insuranceId) {
    return cleanPreviousComplements(insurance);
  }

  return type === 'add'
    ? {
        ...insurance,
        checked: true
      }
    : insurance;
};

const switchBetweenInsurances = (complements, id) =>
  complements &&
  complements.map(complement =>
    complement.id === id ? { ...complement, checked: !complement.checked } : complement
  );

const handleInsuranceSelected = (insurances, id, checked, insuranceId, type) => {
  let selected = null;
  const updatedInsurances = insurances.map(insurance => {
    let currentInsurace;
    if (insurance.id === id) {
      currentInsurace = { ...insurance, checked: !insurance.checked };
      selected = currentInsurace;
    } else {
      currentInsurace = setThroughComplement(insurance, insuranceId, type, id);
    }

    currentInsurace.complements = switchBetweenInsurances(currentInsurace.complements, id);
    return currentInsurace;
  });

  return !checked && type !== 'complement'
    ? [removeComplements(updatedInsurances), null]
    : [updatedInsurances, selected];
};
export {
  setThroughComplement,
  switchBetweenInsurances,
  handleInsuranceSelected,
  removeComplements
};
