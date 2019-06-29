import React from 'react';
import PropTypes from 'prop-types';
import Complement from './Complement';
import Title from './Title';

const Card = ({ children }) => {
  const onSelectComplement = ({ checked }) => {
    console.log(checked);
  };

  return (
    <div className="card">
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onSelectComplement
        })
      )}
    </div>
  );
};

Card.Title = Title;
Card.Complement = Complement;

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]).isRequired
};

export default Card;
