import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Complement from './Complement';
import Title from './Title';

const availableStyle = {
  compressed: 'compressed',
  uncompressed: 'uncompressed'
};

const Card = ({ children, modifiers }) => {
  const onSelectComplement = ({ checked }) => {
    console.log(checked);
  };

  console.log(modifiers);

  const parsedModifiers = modifiers.map(modifier => `card--${modifier}`).join('');

  return (
    <div className={`card ${parsedModifiers}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onSelectComplement
        })
      )}
    </div>
  );
};

Card.availableStyle = availableStyle;
Card.Title = Title;
Card.Complement = Complement;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string)
};

Card.defaultProps = {
  modifiers: []
};

export default Card;
