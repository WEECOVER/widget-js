import React, { useState, useEffect, useRef } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { handleInsuranceSelected } from './handlers/handle-insurances';
import { getPrice } from './handlers/handle-price';
import { fakeData, singleFakeData } from './fakeData';

const availableStyles = {
  compressed: 'compressed',
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
      const [
        { mainTitle: _mainTitle, mainDescription: _mainDescription, insurances: _insurances }
      ] = fakeData;

      if (!insurances.length) {
        const displayMode =
          parentRef.current && parentRef.current.parentElement.clientWidth > 375
            ? availableStyles.uncompressed
            : availableStyles.compressedSideBar;
        setMainTitle(_mainTitle);
        setMainDescription(_mainDescription);
        setInsurances(_insurances);

        _insurances.length > 1
          ? setMainModifier(displayMode)
          : setMainModifier(availableStyles.single);
      }
    })();
  }, [insurances, mainDescription, mainModifier, mainTitle]);

  const addInsuanceToCart = ({ id = null, insuranceId = null, checked }) => {
    if (mainModifier === 'single') {
      const updatedInsurance = id
        ? handleInsuranceSelected(insurances, id, checked, insuranceId)
        : insurances.map(insurance => ({ ...insurance, checked: true }));
      setTotalPrice(getPrice(updatedInsurance));
      setInsurances(updatedInsurance);
      return;
    }

    if (!id) {
      console.log(totalPrice, 'send total price');
      setTotalPrice(0);
    }
    const updatedInsurance = handleInsuranceSelected(insurances, id, checked, insuranceId);
    setTotalPrice(getPrice(updatedInsurance));
    setInsurances(updatedInsurance);
  };

  if (!mainModifier) return null;

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
