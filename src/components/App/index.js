import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Card from '../Card';
import Button from '../Button';
import { fakeData, SingleFakeData } from './fakeData'; // eslint-disable-line
import { getModifiers } from '../../utils/data-mappers';

// TODO: Delete faleData when real data implemented
const [{ mainTitle, mainDescription, insurances }] = fakeData;

const availableStyles = {
  compressed: 'compressed',
  uncompressed: 'uncompressed',
  single: 'single'
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

  const cardsWrapperClassName = classnames('cards-wrapper', {
    'cards-wrapper--compressed': mainModifier === availableStyles.compressed,
    'cards-wrapper--uncompressed': mainModifier === availableStyles.uncompressed,
    'cards-wrapper--single': mainModifier === availableStyles.single
  });

  const displayGlobalAddButton =
    availableStyles.compressed === mainModifier || availableStyles.single === mainModifier;

  const displayCheckboxInCardTitle =
    availableStyles.compressed === mainModifier || mainModifier === availableStyles.uncompressed;

  if (!mainModifier) return null;

  return (
    <main className="wrapper">
      {availableStyles.single !== mainModifier && (
        <header className="header">
          <h1 className="header-title">{mainTitle}</h1>
          <p className="header-subtitle">{mainDescription}</p>
        </header>
      )}
      <section className={cardsWrapperClassName}>
        {insurances &&
          insurances.map(({ title, price, currency, description, complements, id }) => (
            <Card key={id} modifiers={[mainModifier]}>
              <Card.Title
                id={id}
                title={title}
                price={price}
                currency={currency}
                description={description}
                displayCheckbox={displayCheckboxInCardTitle}></Card.Title>
              <Card.Complement complements={complements}></Card.Complement>
              {mainModifier === availableStyles.uncompressed && (
                <Button
                  onClick={() =>
                    addElement({
                      type: 'single',
                      element: { title, price, currency, description, complements, id }
                    })
                  }
                  modifiers={[Button.availableSizes.sm]}>
                  AÑADIR
                </Button>
              )}
            </Card>
          ))}
      </section>
      {displayGlobalAddButton && (
        <div className="button-wrapper">
          <Button onClick={() => addElement({ type: 'global', element: 'all' })}>AÑADIR</Button>
        </div>
      )}
    </main>
  );
};

export default App;
