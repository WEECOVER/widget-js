import React, { useState, useEffect, useRef } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { handleInsuranceSelected, removeComplements } from './handlers/handle-insurances';
import { getPrice } from './handlers/handle-price';
import { fakeData, singleFakeData } from './fakeData';
import { applyInitialConfig } from './handlers/handle-initial-config';

const availableStyles = {
  uncompressed: 'uncompressed',
  single: 'single',
  compressedSideBar: 'compressedSideBar'
};

const App = () => {
  const [mainModifier, setMainModifier] = useState('');
  const [insurances, setInsurances] = useState([]);
  const [mainTitle, setMainTitle] = useState(null);
  const [mainDescription, setMainDescription] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    (async () => {
      await applyInitialConfig();
      const [
        { mainTitle: _mainTitle, mainDescription: _mainDescription, insurances: _insurances }
      ] = singleFakeData;

      if (!insurances.length) {
        setMainTitle(_mainTitle);
        setMainDescription(_mainDescription);
        setInsurances(_insurances);
      }

      if (parentRef) {
        const parentWidth = parentRef.current && parentRef.current.parentElement.clientWidth > 375;
        const displayMode = parentWidth
          ? availableStyles.uncompressed
          : availableStyles.compressedSideBar;

        _insurances.length > 1
          ? setMainModifier(displayMode)
          : setMainModifier(
              parentWidth ? availableStyles.single : availableStyles.compressedSideBar
            );
      }
    })();
  }, [insurances, mainDescription, mainModifier, mainTitle]);

  const addInsuanceToCart = ({ id = null, insuranceId = null, checked, type }) => {
    if (mainModifier === 'single') {
      const updatedInsurance = id
        ? insurances.map(insurance => ({
            ...insurance,
            complements: insurance.complements.map(complement =>
              complement.id === id ? { ...complement, checked: !complement.checked } : complement
            )
          }))
        : insurances.map(insurance => ({ ...insurance, checked: !insurances[0].checked }));

      // TODO: EMIT PRICE getPrice(updatedInsurance)

      setTotalPrice(getPrice(updatedInsurance));
      type === 'add' && insurances[0].checked
        ? setInsurances(removeComplements(updatedInsurance))
        : setInsurances(updatedInsurance);
      return;
    }

    if (!id) {
      setTotalPrice(0);
    }
    const updatedInsurance = handleInsuranceSelected(insurances, id, checked, insuranceId, type);
    // TODO: EMIT PRICE getPrice(updatedInsurance)
    setTotalPrice(getPrice(updatedInsurance));
    setInsurances(updatedInsurance);
  };

  if (!mainModifier) return null;
  console.log(totalPrice, 'price');

  return (
    <main className="wrapper" ref={parentRef}>
      <Header
        availableStyles={availableStyles}
        mainModifier={mainModifier}
        mainTitle={mainTitle}
        mainDescription={mainDescription}
      />
      <Content
        addInsuanceToCart={addInsuanceToCart}
        mainModifier={mainModifier}
        insurances={insurances}
        availableStyles={availableStyles}
      />
      <Footer
        mainModifier={mainModifier}
        availableStyles={availableStyles}
        addInsuanceToCart={addInsuanceToCart}
        insurances={insurances}
      />
    </main>
  );
};

export default App;
