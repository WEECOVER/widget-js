import React, { useState, useEffect } from 'react';
import { fakeData, SingleFakeData } from './fakeData'; // eslint-disable-line
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

// TODO: Delete faleData when real data implemented
const [{ mainTitle, mainDescription, insurances }] = fakeData;

const availableStyles = {
  compressed: 'compressed',
  uncompressed: 'uncompressed',
  single: 'single'
};

const complementaryModifiers = {
  withCheckbox: 'withCheckbox',
  withButton: 'withButton'
};

const App = () => {
  const [mainModifier, setMainModifier] = useState('');

  useEffect(() => {
    // Seteamos el modificador principal estos datos vienen de API BACK_OFFICE
    setMainModifier(availableStyles.compressed);
  }, [mainModifier]);

  const addElement = ({ type, element }) => {
    console.log(type, element);
  };

  const displayGlobalAddButton =
    availableStyles.compressed === mainModifier || availableStyles.single === mainModifier;

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
        addElement={addElement}
        mainModifier={mainModifier}
        insurances={insurances}
        availableStyles={availableStyles}
      />
      <Footer displayGlobalAddButton={displayGlobalAddButton} addElement={addElement} />
    </main>
  );
};

export default App;
