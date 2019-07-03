import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { getModifiers } from '../../../utils/data-mappers';

const Content = ({ insurances, mainModifier, availableStyles, addElement }) => {
  const displayCheckboxInCardTitle =
    availableStyles.compressed === mainModifier || mainModifier === availableStyles.uncompressed;

  return (
    <section className={getModifiers([mainModifier], 'cards-wrapper')}>
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
            <Card.Footer
              addElement={addElement}
              availableStyles={availableStyles}
              mainModifier={mainModifier}
              element={{ title, price, currency, description, complements, id }}></Card.Footer>
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
