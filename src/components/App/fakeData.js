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

export { fakeData, singleFakeData };
