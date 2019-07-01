import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Card from '../../Card';
import Button from '../../Button';

const Content = ({ insurances, mainModifier, availableStyles, addElement }) => {
  const displayCheckboxInCardTitle =
    availableStyles.compressed === mainModifier || mainModifier === availableStyles.uncompressed;

  const cardsWrapperClassName = classnames('cards-wrapper', {
    'cards-wrapper--compressed': mainModifier === availableStyles.compressed,
    'cards-wrapper--uncompressed': mainModifier === availableStyles.uncompressed,
    'cards-wrapper--single': mainModifier === availableStyles.single
  });
  return (
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
  );
};

Content.propTypes = {
  insurances: PropTypes.array.isRequired,
  mainModifier: PropTypes.string.isRequired,
  availableStyles: PropTypes.object.isRequired,
  addElement: PropTypes.func.isRequired
};

export default Content;
