import React from 'react';
import CheckBox from '../CheckBox';

const Card = () => {
  const onClickCheckBox = ({ checked }) => {
    console.log(checked);
  };

  return (
    <div className="card">
      <h3>
        Básico <span className="price">XX,XX€</span>
      </h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
      <div>
        <CheckBox onClick={onClickCheckBox} />
        <p>
          Praesent tincidunt aliquet urna por <span className="price">XX,XX€</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
