import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { getModifiers } from '../../../utils/data-mappers';

import styles from './index.css';

const Content = ({
  addInsuranceToCart,
  insurances,
  mainModifier,
  availableStyles,
  uniqueWidgetId
}) => (
  <section className={getModifiers([mainModifier], 'cards-wrapper', styles)}>
    {insurances &&
      insurances.map(
        ({
          id,
          textoCTA,
          precioComplementoAnual,
          precioComplementoMensual,
          precio: price,
          currency,
          descripcion: title,
          description,
          complements,
          checked,
          garantiasIncluidas,
          tooltip,
          tooltipGrupoSeguro,
          garantiasNoIncluidas,
          textoModal
        }) => {
          const complementHasBeenChecked = complements.some(({ checked: _checked }) => _checked);

          return (
            <Card key={id} modifiers={[mainModifier]}>
              <Card.Title
                uniqueWidgetId={uniqueWidgetId}
                onSelect={addInsuranceToCart}
                displayAddButton={mainModifier === availableStyles.compressedSideBar}
                id={id}
                title={title}
                price={complementHasBeenChecked ? precioComplementoAnual : price}
                checked={checked}
                currency={currency}
                textButton={textoCTA}
                warranties={garantiasIncluidas}
                noIncludedWarranties={garantiasNoIncluidas}
                tooltip={tooltip}
                textoModal={textoModal}
                tooltipGrupoSeguro={tooltipGrupoSeguro}></Card.Title>
              <Card.Complement
                onSelect={addInsuranceToCart}
                complements={complements}></Card.Complement>
              <Card.Footer
                checked={checked}
                addInsuranceToCart={addInsuranceToCart}
                availableStyles={availableStyles}
                mainModifier={mainModifier}
                element={{ title, price, currency, description, complements, id }}></Card.Footer>
            </Card>
          );
        }
      )}
  </section>
);

Content.propTypes = {
  insurances: PropTypes.array.isRequired,
  mainModifier: PropTypes.string.isRequired,
  availableStyles: PropTypes.object.isRequired,
  addInsuranceToCart: PropTypes.func.isRequired,
  uniqueWidgetId: PropTypes.string.isRequired
};

export default Content;
