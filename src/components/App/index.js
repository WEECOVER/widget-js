import React from 'react';
import Card from '../Card';
import Button from '../Button';

console.log('CARD.complement', Card.Complement);
console.log('CARD.title', Card.Title);

const App = () => {
  // TODO: Delete when real data implemented

  const fakeData = [
    {
      mainTitle: 'Seguro Lorem Ipsum',
      mainDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
      insurances: [
        {
          id: 1,
          title: 'Básico',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
              id: 1.1,
              checked: false,
              price: 29.99,
              currency: '€',
              description: 'Praesent tincidunt aliquet urna por'
            }
          ]
        },
        {
          id: 2,
          title: 'Premium',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
              id: 2.2,
              checked: false,
              price: 29.99,
              currency: '€',
              description: 'Praesent tincidunt aliquet urna por'
            }
          ]
        },
        {
          id: 3,
          title: 'Top',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
              id: 3.3,
              checked: false,
              price: 29.99,
              currency: '€',
              description: 'Praesent tincidunt aliquet urna por'
            }
          ]
        }
      ]
    }
  ];

  const [{ mainTitle, mainDescription, insurances }] = fakeData;

  return (
    <main className="wrapper">
      <header className="header">
        <h1 className="header-title">{mainTitle}</h1>
        <p className="header-subtitle">{mainDescription}</p>
      </header>
      <section className="cards-wrapper">
        {insurances &&
          insurances.map(({ title, price, currency, description, complements, id }) => (
            <Card key={id}>
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
      <div className="button-wrapper">
        <Button>AÑADIR</Button>
      </div>
    </main>
  );
};

export default App;
