import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getModifiers } from '../../../../utils/data-mappers';

import styles from '../index.css';

const Price = ({ title, modifiers, price, currency }) => (
  <h3 className={getModifiers(modifiers, 'card-title-text', styles)}>
    {title}
    <span className={getModifiers(modifiers, 'card-title-price', styles)}>
      {modifiers.includes('single') ? (
        <Fragment>
          <span className={styles['card-title-price-prefix']}> por </span>
          {price}
        </Fragment>
      ) : (
        price
      )}{' '}
      {currency}
    </span>
  </h3>
);

Price.propTypes = {
  title: PropTypes.string.isRequired,
  modifiers: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};

export default Price;
