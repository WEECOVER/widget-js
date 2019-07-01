import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Card from '../Card';
import Button from '../Button';
import { fakeData } from './fakeData';

// TODO: Delete faleData when real data implemented
const [{ mainTitle, mainDescription, insurances }] = fakeData;

const availableStyles = {
  compressed: 'compressed',
  uncompressed: 'uncompressed'
};

const App = () => {
  const [mainModifier, setMainModifier] = useState('');

  useEffect(() => {
    // Seteamos el modificador principal estos datos vienen de API BACK_OFFICE
    setMainModifier(availableStyles.uncompressed);
  }, []);

  const cardsWrapperClassName = classnames('cards-wrapper', {
    'cards-wrapper--compressed': mainModifier === availableStyles.compressed,
    'cards-wrapper--uncompressed': mainModifier === availableStyles.uncompressed
  });

  const buttonWrapperClassname = classnames('button-wrapper', {
    'button-wrapper--uncompressed': mainModifier === availableStyles.uncompressed
  });

  return (
    <main className="wrapper">
      <header className="header">
        <h1 className="header-title">{mainTitle}</h1>
        <p className="header-subtitle">{mainDescription}</p>
      </header>
      <section className={cardsWrapperClassName}>
        {insurances &&
          insurances.map(({ title, price, currency, description, complements, id }) => (
            <Card key={id} modifiers={[mainModifier]}>
              <Card.Title
                id={id}
                title={title}
                price={price}
                currency={currency}
                description={description}></Card.Title>
              <Card.Complement complements={complements}></Card.Complement>
            </Card>
          ))}
      </section>
      <div className={buttonWrapperClassname}>
        <Button>AÑADIR</Button>
      </div>
    </main>
  );
};

export default App;
