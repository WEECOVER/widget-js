import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { handleInsuranceSelected, removeComplements } from './handlers/handle-insurances';
import { getPrice } from './handlers/handle-price';

const fakeData = [
  {
    mainTitle: 'Seguro Lorem Ipsum',
    mainDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    insurances: [
      {
        id: '1',
        title: 'Básico',
        price: '49.99',
        currency: '€',
        checked: false,
        description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
        complements: [
          {
            insuranceId: '1',
            id: '1.1',
            checked: false,
            price: '29.99',
            currency: '€',
            description: 'Praesent tincidunt aliquet urna por'
          }
        ]
      },
      {
        id: '2',
        title: 'Premium',
        price: '49.99',
        currency: '€',
        checked: false,
        description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
        complements: [
          {
            insuranceId: '2',
            id: '2.2',
            checked: false,
            price: '29.99',
            currency: '€',
            description: 'Praesent tincidunt aliquet urna por'
          }
        ]
      },
      {
        id: '3',
        title: 'Top',
        price: '49.99',
        currency: '€',
        checked: false,
        description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
        complements: [
          {
            insuranceId: '3',
            id: '3.3',
            checked: false,
            price: '29.99',
            currency: '€',
            description: 'Praesent tincidunt aliquet urna por'
          }
        ]
      }
    ]
  }
];

const singleFakeData = [
  {
    mainTitle: 'Seguro Lorem Ipsum',
    mainDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    insurances: [
      {
        id: '1',
        title: 'Básico',
        price: '49.99',
        checked: false,
        currency: '€',
        description: 'Integer enim tellus, dapibus quis dui quis, adam accumsan posuere ipsum.',
        complements: [
          {
            insuranceId: '1',
            id: '1.1',
            checked: false,
            price: '29.99',
            currency: '€',
            description: 'Praesent tincidunt aliquet urna por'
          },
          {
            insuranceId: '1',
            id: '1.2',
            checked: false,
            price: '29.99',
            currency: '€',
            description: 'Praesent tincidunt aliquet urna por'
          }
        ]
      }
    ]
  }
];

const availableStyles = {
  uncompressed: 'uncompressed',
  single: 'single',
  compressedSideBar: 'compressedSideBar'
};

const App = ({ widgetId, API_CORE, API_CONFIG, eventBus }) => {
  const [mainModifier, setMainModifier] = useState('');
  const [insurances, setInsurances] = useState(null);
  const [mainTitle, setMainTitle] = useState(null);
  const [mainDescription, setMainDescription] = useState(null);
  const parentRef = useRef(null);

  useEffect(() => {
    (async () => {
      const [{ mainTitle: _mainTitle, mainDescription: _mainDescription }] = fakeData;

      if (!insurances) {
        const clientInsurances = await API_CONFIG.applyInitialConfig(widgetId);
        if (clientInsurances) {
          const result = clientInsurances.isgroup
            ? API_CORE.getGroupInsurance(clientInsurances.insurance)
            : API_CORE.getInsurance(clientInsurances.insurance);

          const _insurances = await result;
          console.log(_insurances, '_insurances');

          setMainTitle(_mainTitle);
          setMainDescription(_mainDescription);
          setInsurances(_insurances);
        }
      }

      if (parentRef) {
        const parentWidth = parentRef.current && parentRef.current.parentElement.clientWidth > 375;
        const displayMode = parentWidth
          ? availableStyles.uncompressed
          : availableStyles.compressedSideBar;

        insurances && insurances.length > 1
          ? setMainModifier(displayMode)
          : setMainModifier(
              parentWidth ? availableStyles.single : availableStyles.compressedSideBar
            );
      }
    })();
  }, [API_CONFIG, API_CORE, insurances, mainDescription, mainModifier, mainTitle, widgetId]);

  const addInsuanceToCart = ({ id = null, insuranceId = null, checked, type }) => {
    if (mainModifier === 'single') {
      const updatedInsurance = id
        ? insurances.map(insurance => ({
            ...insurance,
            complements: insurance.complements.map(complement =>
              complement.id === id ? { ...complement, checked: !complement.checked } : complement
            )
          }))
        : insurances.map(insurance => ({ ...insurance, checked: !insurances[0].checked }));

      eventBus.publish('widget:onchange:price', getPrice(updatedInsurance));

      return type === 'add' && insurances[0].checked
        ? setInsurances(removeComplements(updatedInsurance))
        : setInsurances(updatedInsurance);
    }

    const updatedInsurance = handleInsuranceSelected(insurances, id, checked, insuranceId, type);

    eventBus.publish('widget:onchange:price', getPrice(updatedInsurance));

    setInsurances(updatedInsurance);
  };

  if (!mainModifier) return null;

  return (
    <main className="wrapper" ref={parentRef}>
      <Header
        availableStyles={availableStyles}
        mainModifier={mainModifier}
        mainTitle={mainTitle}
        mainDescription={mainDescription}
      />
      <Content
        addInsuanceToCart={addInsuanceToCart}
        mainModifier={mainModifier}
        insurances={insurances}
        availableStyles={availableStyles}
      />
      <Footer
        mainModifier={mainModifier}
        availableStyles={availableStyles}
        addInsuanceToCart={addInsuanceToCart}
        insurances={insurances}
      />
    </main>
  );
};

App.propTypes = {
  widgetId: PropTypes.string.isRequired,
  API_CORE: PropTypes.object.isRequired,
  API_CONFIG: PropTypes.object.isRequired,
  eventBus: PropTypes.object.isRequired
};

export default App;
