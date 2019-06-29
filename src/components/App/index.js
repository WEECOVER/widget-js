import React from 'react';
import Card from '../Card';
import Button from '../Button';

console.log('CARD.complement', Card.Complement);
console.log('CARD.title', Card.Title);

const App = () => {
  const fakeData = [
    {
      mainTitle: 'Seguro Lorem Ipsum',
      mainDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
      insurances: [
        {
          title: 'Básico',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
              checked: false,
              price: 29.99,
              currency: '€',
              description: 'Praesent tincidunt aliquet urna por'
            }
          ]
        },
        {
          title: 'Premium',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
              checked: false,
              price: 29.99,
              currency: '€',
              description: 'Praesent tincidunt aliquet urna por'
            }
          ]
        },
        {
          title: 'Top',
          price: 49.99,
          currency: '€',
          description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
          complements: [
            {
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

  console.log(fakeData);
  const [{ mainTitle, mainDescription, insurances }] = fakeData;
  console.log(mainTitle, mainDescription, insurances);

  return (
    <main className="wrapper">
      <header className="header">
        <h1>{mainTitle}</h1>
        <p>{mainDescription}</p>
      </header>
      <section className="cards-wrapper">
        {insurances &&
          insurances.map(({ title, price, currency, description, complements }) => (
            <Card key={title}>
              <Card.Title
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
