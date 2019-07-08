import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { getModifiers } from '../../../utils/data-mappers';

const Content = ({ addInsuanceToCart, insurances, mainModifier, availableStyles }) => {
  const displayCheckboxInCardTitle =
    availableStyles.compressed === mainModifier || mainModifier === availableStyles.uncompressed;

  return (
    <section className={getModifiers([mainModifier], 'cards-wrapper')}>
      {insurances &&
        insurances.map(({ title, price, currency, description, complements, id, checked }) => (
          <Card key={id} modifiers={[mainModifier]}>
            <Card.Title
              onSelect={addInsuanceToCart}
              displayAddButton={mainModifier === availableStyles.compressedSideBar}
              id={id}
              title={title}
              price={price}
              checked={checked}
              currency={currency}
              description={description}
              displayCheckbox={displayCheckboxInCardTitle}></Card.Title>
            <Card.Complement
              onSelect={addInsuanceToCart}
              complements={complements}></Card.Complement>
            <Card.Footer
              checked={checked}
              addInsuanceToCart={addInsuanceToCart}
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
  addInsuanceToCart: PropTypes.func.isRequired
};

export default Content;
