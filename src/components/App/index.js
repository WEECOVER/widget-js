import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { handleInsuranceSelected, removeComplements } from './handlers/handle-insurances';
import { getInsuranceSelected } from './handlers/get-insurance-selected';

const availableStyles = {
  uncompressed: 'uncompressed',
  single: 'single',
  compressedSideBar: 'compressedSideBar'
};

const App = ({ API_CORE, API_CONFIG, eventBus, dataInsurances, uniqueWidgetId }) => {
  const [mainModifier, setMainModifier] = useState('');
  const [insurances, setInsurances] = useState(null);
  const [previousInsuranceSelected, setPreviousInsuranceSelected] = useState(null);
  const parentRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (!insurances) {
        const data = await dataInsurances;
        setInsurances(data);
      }

      if (parentRef) {
        const parentWidth = parentRef.current && parentRef.current.parentElement.clientWidth > 375;
        const displayMode = parentWidth
          ? availableStyles.uncompressed
          : availableStyles.compressedSideBar;

        insurances && insurances.length > 1
          ? setMainModifier(displayMode)
          : setMainModifier(
              parentWidth ? availableStyles.single : availableStyles.compressedSideBar
            );
      }
    })();
  }, [API_CONFIG, API_CORE, dataInsurances, insurances, mainModifier]);

  const addInsuranceToCart = ({ id = null, insuranceId = null, checked, type }) => {
    if (mainModifier === 'single') {
      const updatedInsurance = id
        ? insurances.map(insurance => ({
            ...insurance,
            complements: insurance.complements.map(complement =>
              complement.id === id ? { ...complement, checked: !complement.checked } : complement
            )
          }))
        : insurances.map(insurance => ({ ...insurance, checked: !insurances[0].checked }));

      if (!checked && type === 'complement') {
        eventBus.publish(eventBus.availableEvents.onRemove, {
          price: insurances[0].precio,
          type: 'deleted',
          complement: insurances[0].complements[0]
        });
      }

      if (checked && type === 'complement') {
        eventBus.publish(eventBus.availableEvents.onSelected, {
          price: insurances[0].totalPrecio,
          type: 'add',
          complement: insurances[0].complements[0]
        });
      }

      if (checked && type === 'add') {
        eventBus.publish(eventBus.availableEvents.onSelected, {
          ...getInsuranceSelected(updatedInsurance)
        });
      }

      if (!checked && type === 'add') {
        eventBus.publish(eventBus.availableEvents.onRemove, insurances[0].codigoSeguro);
      }

      return type === 'add' && checked
        ? setInsurances(removeComplements(updatedInsurance))
        : setInsurances(updatedInsurance);
    }

    const [updatedInsurance, selected] = handleInsuranceSelected(
      insurances,
      id,
      checked,
      insuranceId,
      type
    );

    if (!selected) {
      eventBus.publish(eventBus.availableEvents.onRemove, previousInsuranceSelected.codigoSeguro);
    } else {
      setPreviousInsuranceSelected(selected);
      eventBus.publish(eventBus.availableEvents.onSelected, {
        insurance: getInsuranceSelected(updatedInsurance)
      });
    }

    setInsurances(updatedInsurance);
  };

  if (!mainModifier || !insurances) return null;

  return (
    <main className="wrapper" ref={parentRef}>
      <Header
        uniqueWidgetId={uniqueWidgetId}
        availableStyles={availableStyles}
        mainModifier={mainModifier}
        tooltipGrupoSeguro={insurances[0].tooltipGrupoSeguro}
        mainTitle={insurances[0].descripcionGrupoSeguro}
        mainDescription={insurances[0].descripcionLargaGrupoSeguro}
      />
      <Content
        uniqueWidgetId={uniqueWidgetId}
        addInsuranceToCart={addInsuranceToCart}
        mainModifier={mainModifier}
        insurances={insurances}
        availableStyles={availableStyles}
      />
      <Footer
        mainModifier={mainModifier}
        availableStyles={availableStyles}
        addInsuranceToCart={addInsuranceToCart}
        insurances={insurances}
      />
    </main>
  );
};

App.propTypes = {
  API_CORE: PropTypes.object.isRequired,
  API_CONFIG: PropTypes.object.isRequired,
  eventBus: PropTypes.object.isRequired,
  dataInsurances: PropTypes.object.isRequired,
  uniqueWidgetId: PropTypes.string.isRequired
};

export default App;
