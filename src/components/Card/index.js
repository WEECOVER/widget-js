import React from 'react';
import PropTypes from 'prop-types';
import Complement from './Complement';
import Footer from './Footer';
import Title from './Title';
import { getModifiers } from '../../utils/data-mappers';

const availableStyle = {
  compressed: 'compressed',
  uncompressed: 'uncompressed'
};

const Card = ({ children, modifiers }) => {
  const onSelectComplement = ({ checked }) => {
    console.log(checked);
  };

  return (
    <div className={`card ${getModifiers(modifiers, 'card')}`}>
      {React.Children.map(children, child => {
        const allModifiers =
          child && child.props && child.props.modifiers
            ? [...modifiers, ...child.props.modifiers]
            : modifiers;
        return (
          child &&
          React.cloneElement(child, {
            onSelectComplement,
            modifiers: allModifiers,
            className: child.props.className
          })
        );
      })}
    </div>
  );
};

Card.availableStyle = availableStyle;
Card.Title = Title;
Card.Complement = Complement;
Card.Footer = Footer;

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
