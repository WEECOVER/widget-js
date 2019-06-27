import React from 'react';
import Card from '../Card';
import Button from '../Button';

const App = () => (
  <main className="wrapper">
    <header className="header">
      <h1>Seguro lorem ipsum</h1>
      <p>
        Nulla fermentum libero sit amet urna facilisis pretium. Proin imperdiet imperdiet
        vestibulum. Praesent mollis justo vel suscipit dapibus. Curabitur dolor neque, luctus in
        molestie a, condimentum sit amet dolor.
      </p>
    </header>
    <section className="cards-wrapper">
      <Card />
      <Card />
      <Card />
    </section>
    <div className="button-wrapper">
      <Button>AÑADIR</Button>
    </div>
  </main>
);

export default App;
