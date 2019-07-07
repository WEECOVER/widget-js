import React, { useState, useEffect } from 'react';
// import { fakeData, SingleFakeData } from './fakeData'; // eslint-disable-line
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { setThroughComplement, switchBetweenInsurances } from './handle-insurances';

const availableStyles = {
  compressed: 'compressed',
  uncompressed: 'uncompressed',
  single: 'single',
  compressedSideBar: 'compressedSideBar'
};

console.log('AAAA');

const App = () => {
  const [mainModifier, setMainModifier] = useState('');
  const [insurances, setInsurances] = useState([]);
  const [mainTitle, setMainTitle] = useState(null);
  const [mainDescription, setMainDescription] = useState(null);

  useEffect(() => {
    (async () => {
      const { fakeData, singleFakeData } = await import('./fakeData');
      // TODO: Delete faleData when real data implemented
      const [
        { mainTitle: _mainTitle, mainDescription: _mainDescription, insurances: _insurances }
      ] = fakeData;
      if (!insurances.length) {
        setMainTitle(_mainTitle);
        setMainDescription(_mainDescription);
        setInsurances(_insurances);
      }
    })();
    // Seteamos el modificador principal estos datos vienen de API BACK_OFFICE
    setMainModifier(availableStyles.uncompressed);
  }, [insurances, mainDescription, mainModifier, mainTitle]);

  const addInsuanceToCart = ({ id, insuranceId = null }) => {
    const updatedInsurance = insurances.map(insurance => {
      const currentInsurace =
        insurance.id === id
          ? { ...insurance, checked: !insurance.checked }
          : setThroughComplement(insurance, insuranceId);

      currentInsurace.complements = switchBetweenInsurances(currentInsurace.complements, id);

      return currentInsurace;
    });

    setInsurances(updatedInsurance);
  };

  if (!mainModifier) return null;

  return (
    <main className="wrapper">
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
      />
    </main>
  );
};

export default App;
