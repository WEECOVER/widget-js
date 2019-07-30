import uuidv1 from 'uuid/v1';

const getInitialProps = async (parameters, widgetId, API_CORE_INSTANCE, API_CONFIG_INSTANCE) => {
  const clientInsurances = await API_CONFIG_INSTANCE.applyInitialConfig(widgetId);

  const pricingPromise = clientInsurances.insurance.map(insurance =>
    API_CORE_INSTANCE.getPricing(insurance, parameters)
  );

  const dataPromise = clientInsurances.isgroup
    ? API_CORE_INSTANCE.getGroupInsurance(clientInsurances.insurance)
    : clientInsurances.insurance.map(insurance => API_CORE_INSTANCE.getInsurance(insurance));

  const [prices, data] = await Promise.all([Promise.all(pricingPromise), Promise.all(dataPromise)]);
  const allInsurancesWithPrices = data.map(insurance => {
    let insuranceWithPrice;
    prices.forEach(({ codigoSeguro, precio, codigoOferta }) => {
      if (insurance.codigoSeguro === codigoSeguro) {
        const insuranceId = uuidv1();
        insuranceWithPrice = {
          ...insurance,
          complements: insurance.complementos.map(complement => ({
            ...complement,
            insuranceId,
            checked: false
          })),
          precio,
          codigoOferta,
          id: insuranceId,
          checked: false
        };
        delete insuranceWithPrice.complementos;
      }
    });
    return insuranceWithPrice;
  });
  console.log('allInsurancesWithPrices -->', allInsurancesWithPrices);
  return allInsurancesWithPrices;
  return [
    {
      codigoSeguro: 'WEE-MASCOTAS-001',
      codigoGrupoSeguro: 'MASCOTAS',
      descripcionGrupoSeguro: 'Asegura tu mascota',
      descripcionLargaGrupoSeguro:
        'Contrata ahora con un sólo click la tranquilidad total para tu amigo fiel.',
      tooltipGrupoSeguro: 'Tooltip mascotas CAS',
      nombre: 'Cobertura Veterinaria',
      descripcion: 'Cobertura Veterinaria',
      textoCTA: 'Cómpralo!',
      tooltip: 'Tooltip MASCOTAS CAT',
      precio: 27.47,
      parametros: [
        {
          tipo: 'LISTA',
          nombre: 'especie001',
          texto: 'Especie',
          id: 13,
          opcional: true,
          multiple: false,
          dependeDeParametroId: null,
          valor: null,
          itemList: [
            {
              id: 1,
              valor: '1',
              texto: 'Perro',
              seleccionado: true,
              dependeDeValorId: null
            },
            {
              id: 2,
              valor: '2',
              texto: 'Gato',
              seleccionado: false,
              dependeDeValorId: null
            }
          ]
        },
        {
          tipo: 'LISTA',
          nombre: 'raza001',
          texto: 'Raza',
          id: 14,
          opcional: true,
          multiple: false,
          dependeDeParametroId: 13,
          valor: null,
          itemList: [
            {
              id: 3,
              valor: '1',
              texto: 'Affenpinscher',
              seleccionado: true,
              dependeDeValorId: 1
            },
            {
              id: 4,
              valor: '2',
              texto: 'Agua Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 5,
              valor: '3',
              texto: 'Agua Irlandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 6,
              valor: '4',
              texto: 'Airedale Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 7,
              valor: '5',
              texto: 'Akita Inu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 8,
              valor: '6',
              texto: 'Alano Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 9,
              valor: '7',
              texto: 'Alaskan Malamute',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 10,
              valor: '8',
              texto: 'American Stafforshire Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 11,
              valor: '9',
              texto: 'Anglo-francais De Petite Venerie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 12,
              valor: '10',
              texto: 'Antiguo Perro Pastor Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 13,
              valor: '11',
              texto: 'Azawakh',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 14,
              valor: '12',
              texto: 'Bardino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 15,
              valor: '13',
              texto: 'Basenji',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 16,
              valor: '14',
              texto: 'Basset Artesien Normand',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 17,
              valor: '15',
              texto: 'Basset Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 18,
              valor: '16',
              texto: 'Basset Fauve De Bretagne',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 19,
              valor: '17',
              texto: 'Basset Hound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 20,
              valor: '18',
              texto: 'Beagle',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 21,
              valor: '19',
              texto: 'Beagle Harrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 22,
              valor: '20',
              texto: 'Bearded Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 23,
              valor: '21',
              texto: 'Bedlington Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 24,
              valor: '22',
              texto: 'Bichon Boloñes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 25,
              valor: '23',
              texto: 'Bichon Frise',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 26,
              valor: '24',
              texto: 'Bichon Habanero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 27,
              valor: '25',
              texto: 'Bichon Maltes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 28,
              valor: '26',
              texto: 'Bob Tail',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 29,
              valor: '27',
              texto: 'Border Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 30,
              valor: '28',
              texto: 'Border Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 31,
              valor: '29',
              texto: 'Borzoi',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 32,
              valor: '30',
              texto: 'Boston Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 33,
              valor: '31',
              texto: 'Bouvier Bernois',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 34,
              valor: '32',
              texto: 'Bouvier De Flandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 35,
              valor: '33',
              texto: 'Boxer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 36,
              valor: '34',
              texto: 'Boyero De Flandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 37,
              valor: '35',
              texto: 'Braco Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 38,
              valor: '36',
              texto: 'Braco De Weimar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 39,
              valor: '37',
              texto: 'Braco Frances Tipo Gascuña (grande)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 40,
              valor: '38',
              texto: 'Braco Frances Tipo Pirineos (peque)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 41,
              valor: '39',
              texto: 'Braco Hungaro De Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 42,
              valor: '40',
              texto: 'Braco Hungaro De Pelo Duro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 43,
              valor: '41',
              texto: 'Braco Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 44,
              valor: '42',
              texto: 'Briquet Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 45,
              valor: '43',
              texto: 'British Staffordshire Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 46,
              valor: '44',
              texto: 'Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 47,
              valor: '45',
              texto: 'Bulldog Americano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 48,
              valor: '46',
              texto: 'Bulldog Frances',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 49,
              valor: '47',
              texto: 'Bulldog Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 50,
              valor: '48',
              texto: 'Bullmastiff',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 51,
              valor: '49',
              texto: 'Cain Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 52,
              valor: '50',
              texto: 'Cane Corso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 53,
              valor: '51',
              texto: 'Caniche',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 54,
              valor: '52',
              texto: 'Cao Da Serra Da Estrella',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 55,
              valor: '53',
              texto: 'Cao Da Serra De Aires',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 56,
              valor: '54',
              texto: 'Carlino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 57,
              valor: '55',
              texto: 'Cavalier King Charles Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 58,
              valor: '56',
              texto: 'Cesky Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 59,
              valor: '57',
              texto: 'Chesapeake Bay Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 60,
              valor: '58',
              texto: 'Chien De Sant Hubert (bloodhound)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 61,
              valor: '59',
              texto: 'Chihuahua',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 62,
              valor: '60',
              texto: 'Chinese Crested Dog',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 63,
              valor: '61',
              texto: 'Chow Chow',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 64,
              valor: '62',
              texto: 'Cirneco Dell´Etna',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 65,
              valor: '63',
              texto: 'Clumber Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 66,
              valor: '64',
              texto: 'Cocker Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 67,
              valor: '65',
              texto: 'Cocker Spaniel Americano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 68,
              valor: '66',
              texto: 'Cocker Spaniel Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 69,
              valor: '67',
              texto: 'Coton De Tuelar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 70,
              valor: '68',
              texto: 'Curly - Coated Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 71,
              valor: '69',
              texto: 'Dalmata',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 72,
              valor: '70',
              texto: 'Dandie Dinmont Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 73,
              valor: '71',
              texto: 'Deerhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 74,
              valor: '72',
              texto: 'Deutsth Drahtahaar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 75,
              valor: '73',
              texto: 'Doberman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 76,
              valor: '74',
              texto: 'Dogo Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 77,
              valor: '75',
              texto: 'Dogo Argentino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 78,
              valor: '76',
              texto: 'Dogo Arlequin',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 79,
              valor: '77',
              texto: 'Dogo Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 80,
              valor: '78',
              texto: 'Dogo De Burdeos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 81,
              valor: '79',
              texto: 'Dogo Del Tibet',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 82,
              valor: '80',
              texto: 'Dogo Mallorquin (ca De Bou)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 83,
              valor: '81',
              texto: 'English Springer Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 84,
              valor: '82',
              texto: 'Epagneul Breton',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 85,
              valor: '83',
              texto: 'Epagneul Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 86,
              valor: '84',
              texto: 'Epagneul Nain Continental',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 87,
              valor: '85',
              texto: 'Eurasier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 88,
              valor: '86',
              texto: 'Pastor Vasco (Euskal Artain Txacurra)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 89,
              valor: '87',
              texto: 'Fila Brasileiro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 90,
              valor: '88',
              texto: 'Finlandes De Laponia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 91,
              valor: '89',
              texto: 'Flat - Coated Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 92,
              valor: '90',
              texto: 'Fox Terrier De Pelo Duro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 93,
              valor: '91',
              texto: 'Fox Terrier De Pelo Liso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 94,
              valor: '92',
              texto: 'Galgo Afgano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 95,
              valor: '93',
              texto: 'Galgo Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 96,
              valor: '94',
              texto: 'Golden Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 97,
              valor: '95',
              texto: 'Gran Bouvier Suizo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 98,
              valor: '96',
              texto: 'Gran Danes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 99,
              valor: '97',
              texto: 'Gran Perro Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 100,
              valor: '98',
              texto: 'Gran Sabueso Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 101,
              valor: '99',
              texto: 'Grand Basset Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 102,
              valor: '100',
              texto: 'Greyhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 103,
              valor: '101',
              texto: 'Griffon Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 104,
              valor: '102',
              texto: 'Griffon D´Arret A Poir Dur',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 105,
              valor: '103',
              texto: 'Griffon De Bruselas',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 106,
              valor: '104',
              texto: 'Griffon Fauve De Bretagne',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 107,
              valor: '105',
              texto: 'Griffon Nivernais',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 108,
              valor: '106',
              texto: 'Gronlandshund',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 109,
              valor: '107',
              texto: 'Irish Glen Of Imaal Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 110,
              valor: '108',
              texto: 'Irish Soft - Coated Wheaten Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 111,
              valor: '109',
              texto: 'Irish Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 112,
              valor: '110',
              texto: 'Irish Wolfhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 113,
              valor: '111',
              texto: 'Kelpie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 114,
              valor: '112',
              texto: 'Kerry Blue Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 115,
              valor: '113',
              texto: 'Kleiner Munsterlander Vorstehhund',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 116,
              valor: '114',
              texto: 'Komondor',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 117,
              valor: '115',
              texto: 'Laika De Siberia Oriental',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 118,
              valor: '116',
              texto: 'Lakeland Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 119,
              valor: '117',
              texto: 'Landseer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 120,
              valor: '118',
              texto: 'Leonberger',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 121,
              valor: '119',
              texto: 'Lhasa Apso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 122,
              valor: '120',
              texto: 'Lobo Checoslovaco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 123,
              valor: '121',
              texto: 'Lobo De Saarloos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 124,
              valor: '122',
              texto: 'Majorero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 125,
              valor: '123',
              texto: 'Manchester Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 126,
              valor: '124',
              texto: 'Mastiff',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 127,
              valor: '125',
              texto: 'Mastin De Los Pirineos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 128,
              valor: '126',
              texto: 'Mastin Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 129,
              valor: '127',
              texto: 'Mastin Leones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 130,
              valor: '128',
              texto: 'Mastin Napolitano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 131,
              valor: '129',
              texto: 'Mestizo Sin Raza Conocida',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 132,
              valor: '130',
              texto: 'Montaña De Los Pirineos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 133,
              valor: '131',
              texto: 'Nihon Supittsu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 134,
              valor: '132',
              texto: 'Norfolk Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 135,
              valor: '133',
              texto: 'Norwich Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 136,
              valor: '134',
              texto: 'Oso De Carelia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 137,
              valor: '135',
              texto: 'Pachon Navarro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 138,
              valor: '136',
              texto: 'Papillon - Spaniel Enano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 139,
              valor: '137',
              texto: 'Parson Jack Russell Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 140,
              valor: '138',
              texto: 'Pastor Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 141,
              valor: '139',
              texto: 'Pastor Alsaciano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 142,
              valor: '140',
              texto: 'Pastor Belga',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 143,
              valor: '141',
              texto: 'Pastor Catalan (gos d´atura)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 144,
              valor: '142',
              texto: 'Pastor De Anatolia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 145,
              valor: '143',
              texto: 'Pastor De Asia Central',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 146,
              valor: '144',
              texto: 'Pastor De Beauce',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 147,
              valor: '145',
              texto: 'Pastor De Bergamasco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 148,
              valor: '146',
              texto: 'Pastor De Brie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 149,
              valor: '147',
              texto: 'Pastor De Los Pirineos De Cara Rasa',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 150,
              valor: '148',
              texto: 'Pastor De Los Pirineos-pelo Largo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 151,
              valor: '149',
              texto: 'Pastor De Rusia Meridional',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 152,
              valor: '150',
              texto: 'Pastor Del Caucaso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 153,
              valor: '151',
              texto: 'Pastor Escoces (rough Collie)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 154,
              valor: '152',
              texto: 'Pastor Garafiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 155,
              valor: '153',
              texto: 'Pastor Majonero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 156,
              valor: '154',
              texto: 'Pastor Mallorquin (ca De Bestiar)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 157,
              valor: '155',
              texto: 'Pastor Polaco De Las Llanuras',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 158,
              valor: '156',
              texto: 'Pastor Polaco De Podhale',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 159,
              valor: '228',
              texto: 'Pastor suizo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 160,
              valor: '157',
              texto: 'Pekines',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 161,
              valor: '158',
              texto: 'Pequeño Lebrel Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 162,
              valor: '159',
              texto: 'Pequeño Sabueso Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 163,
              valor: '160',
              texto: 'Perdiguero De Burgos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 164,
              valor: '161',
              texto: 'Perdiguero Portugues',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 165,
              valor: '162',
              texto: 'Peru Sin Pelo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 166,
              valor: '163',
              texto: 'Petit Basset Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 167,
              valor: '164',
              texto: 'Petit Brabancon',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 168,
              valor: '165',
              texto: 'Petit Chien Lion',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 169,
              valor: '166',
              texto: 'Petit Gascon Saintongeois',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 170,
              valor: '167',
              texto: 'Pinsher',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 171,
              valor: '168',
              texto: 'Pit Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 172,
              valor: '169',
              texto: 'Podenco Andaluz',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 173,
              valor: '170',
              texto: 'Podenco Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 174,
              valor: '171',
              texto: 'Podenco De Los Faraones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 175,
              valor: '172',
              texto: 'Podenco Ibicenco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 176,
              valor: '173',
              texto: 'Podenco Portugues',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 177,
              valor: '174',
              texto: 'Pointer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 178,
              valor: '175',
              texto: 'Pomerania',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 179,
              valor: '176',
              texto: 'Porcelaine',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 180,
              valor: '177',
              texto: 'Presa Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 181,
              valor: '178',
              texto: 'Presa Mallorquin (ca De Bou)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 182,
              valor: '179',
              texto: 'Puli',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 183,
              valor: '180',
              texto: 'Pumi',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 184,
              valor: '181',
              texto: 'Ratonero - Bodeguero Andaluz',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 185,
              valor: '182',
              texto: 'Retriever De Labrador',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 186,
              valor: '183',
              texto: 'Rhodesian Ridgeback',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 187,
              valor: '184',
              texto: 'Rottweiler',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 188,
              valor: '185',
              texto: 'Sabueso De Sangre De Babiera',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 189,
              valor: '186',
              texto: 'Sabueso Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 190,
              valor: '187',
              texto: 'Saluki',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 191,
              valor: '188',
              texto: 'Samoyedo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 192,
              valor: '189',
              texto: 'San Bernardo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 193,
              valor: '190',
              texto: 'Schipperke',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 194,
              valor: '191',
              texto: 'Schnauzer Gigante',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 195,
              valor: '192',
              texto: 'Schnauzer Mediano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 196,
              valor: '193',
              texto: 'Schnauzer Miniatura',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 197,
              valor: '194',
              texto: 'Scottish Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 198,
              valor: '195',
              texto: 'Sealyham Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 199,
              valor: '196',
              texto: 'Setter Gordon',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 200,
              valor: '197',
              texto: 'Setter Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 201,
              valor: '198',
              texto: 'Setter Irlandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 202,
              valor: '199',
              texto: 'Shar Pei',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 203,
              valor: '200',
              texto: 'Shetland Sheepdog',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 204,
              valor: '201',
              texto: 'Shiba Inu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 205,
              valor: '202',
              texto: 'Shih - Tzu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 206,
              valor: '203',
              texto: 'Shikoku',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 207,
              valor: '204',
              texto: 'Siberian Husky',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 208,
              valor: '205',
              texto: 'Silky Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 209,
              valor: '206',
              texto: 'Skye Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 210,
              valor: '207',
              texto: 'Smooth Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 211,
              valor: '208',
              texto: 'Spinone Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 212,
              valor: '209',
              texto: 'Spitz Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 213,
              valor: '210',
              texto: 'Staffordshire Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 214,
              valor: '211',
              texto: 'Sussex Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 215,
              valor: '212',
              texto: 'Teckel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 216,
              valor: '213',
              texto: 'Terranova',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 217,
              valor: '214',
              texto: 'Terrier Aleman De Caza',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 218,
              valor: '215',
              texto: 'Terrier Brasileño',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 219,
              valor: '216',
              texto: 'Terrier Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 220,
              valor: '217',
              texto: 'Terrier Negro Ruso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 221,
              valor: '218',
              texto: 'Tibetan Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 222,
              valor: '219',
              texto: 'Tosa Inu (tosa Japones)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 223,
              valor: '220',
              texto: 'Volpino Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 224,
              valor: '221',
              texto: 'Welsh Corgi Pembroke',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 225,
              valor: '222',
              texto: 'Welsh Springer Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 226,
              valor: '223',
              texto: 'Welsh Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 227,
              valor: '224',
              texto: 'West Higland White Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 228,
              valor: '225',
              texto: 'Whippet',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 229,
              valor: '226',
              texto: 'Yorkshire Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 230,
              valor: '227',
              texto: 'Zwergpinscher',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 231,
              valor: '229',
              texto: 'Villano de las Encartaciones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 232,
              valor: '230',
              texto: 'American Bully',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 233,
              valor: '1',
              texto: 'Abisinio',
              seleccionado: true,
              dependeDeValorId: 2
            },
            {
              id: 234,
              valor: '2',
              texto: 'Americano - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 235,
              valor: '3',
              texto: 'Angora',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 236,
              valor: '4',
              texto: 'Azul Ruso',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 237,
              valor: '5',
              texto: 'Balines',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 238,
              valor: '6',
              texto: 'Bengal',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 239,
              valor: '7',
              texto: 'Birmano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 240,
              valor: '8',
              texto: 'Bobtail Japones',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 241,
              valor: '9',
              texto: 'Bombay',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 242,
              valor: '10',
              texto: 'Bosque de Noruega',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 243,
              valor: '11',
              texto: 'Brasileño - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 244,
              valor: '12',
              texto: 'Britanico - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 245,
              valor: '13',
              texto: 'Burmes',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 246,
              valor: '14',
              texto: 'Burmilla',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 247,
              valor: '15',
              texto: 'California Spangled',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 248,
              valor: '16',
              texto: 'Cartujo',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 249,
              valor: '17',
              texto: 'Colourpoint Pelo Largo',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 250,
              valor: '18',
              texto: 'Cornish Rex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 251,
              valor: '19',
              texto: 'Curl Americano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 252,
              valor: '20',
              texto: 'Cymric',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 253,
              valor: '21',
              texto: 'Devon Rex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 254,
              valor: '22',
              texto: 'Europeo - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 255,
              valor: '23',
              texto: 'Exotico - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 256,
              valor: '24',
              texto: 'Fold Escoces',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 257,
              valor: '25',
              texto: 'Foldex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 258,
              valor: '26',
              texto: 'Habana',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 259,
              valor: '27',
              texto: 'Himalaya',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 260,
              valor: '28',
              texto: 'Javanes',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 261,
              valor: '29',
              texto: 'Keuda',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 262,
              valor: '30',
              texto: 'Angora Turco',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 263,
              valor: '31',
              texto: 'Maine',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 264,
              valor: '32',
              texto: 'Manx',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 265,
              valor: '33',
              texto: 'Mau Egipcio',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 266,
              valor: '55',
              texto: 'Gato Mestizo Sin Raza Conocida',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 267,
              valor: '34',
              texto: 'Mojave',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 268,
              valor: '35',
              texto: 'Munchkin',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 269,
              valor: '36',
              texto: 'Nebelung',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 270,
              valor: '37',
              texto: 'Ocicat',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 271,
              valor: '38',
              texto: 'Oriental',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 272,
              valor: '39',
              texto: 'Persa',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 273,
              valor: '40',
              texto: 'Pixie Bob',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 274,
              valor: '41',
              texto: 'Ragamuffin',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 275,
              valor: '42',
              texto: 'Ragdoll',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 276,
              valor: '43',
              texto: 'Rex Selkirk',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 277,
              valor: '44',
              texto: 'Ringtail',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 278,
              valor: '45',
              texto: 'Siames',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 279,
              valor: '46',
              texto: 'Siberiano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 280,
              valor: '47',
              texto: 'Singapura',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 281,
              valor: '48',
              texto: 'Snowshoe',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 282,
              valor: '49',
              texto: 'Sokoke',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 283,
              valor: '50',
              texto: 'Somali',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 284,
              valor: '51',
              texto: 'Sphynx',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 285,
              valor: '52',
              texto: 'Tonquines',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 286,
              valor: '53',
              texto: 'Van Turco',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 287,
              valor: '54',
              texto: 'York Chocolate',
              seleccionado: false,
              dependeDeValorId: 2
            }
          ]
        },
        {
          tipo: 'ESCALAR',
          nombre: 'fechaNacimiento001',
          texto: 'Fecha Nacimiento',
          id: 15,
          opcional: true,
          valor: '01/01/2018'
        },
        {
          tipo: 'ESCALAR',
          nombre: 'chip001',
          texto: 'Chip',
          id: 16,
          opcional: true,
          valor: '123456'
        },
        {
          tipo: 'ESCALAR',
          nombre: 'cp001',
          texto: 'Código Postal',
          id: 17,
          opcional: false,
          valor: '08080'
        }
      ],
      garantiasIncluidas: [
        'Acceso a precio fijo un 40% más barato en más de 300 clínicas',
        'Teléfono de asistencia veterinaria las 24 horas.',
        'Coberturas de Muerte (500€), Robo (500€), Extravío y sacrificio (150€)'
      ],
      garantiasNoIncluidas: [],
      complements: [
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 18,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false,
          insuranceId: '0a1bd010-aefb-11e9-8301-15f5fa510ak3'
        },
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 19,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false,
          insuranceId: '0a1bd010-aefb-11e9-8301-15f5fa510ak3'
        },
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 20,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false,
          insuranceId: '0a1bd010-aefb-11e9-8301-15f5fa510ak3'
        }
      ],
      codigoOferta: '1255',
      id: '0a1bd010-aefb-11e9-8301-15f5fa510ak3',
      checked: false
    },
    {
      codigoSeguro: 'WEE-MASCOTAS-001',
      codigoGrupoSeguro: 'MASCOTAS',
      descripcionGrupoSeguro: 'Asegura tu mascota',
      descripcionLargaGrupoSeguro:
        'Contrata ahora con un sólo click la tranquilidad total para tu amigo fiel.',
      tooltipGrupoSeguro: 'Tooltip mascotas CAS',
      nombre: 'Cobertura Veterinaria',
      descripcion: 'Cobertura Veterinaria',
      textoCTA: 'Cómpralo!',
      tooltip: 'Tooltip MASCOTAS CAT',
      precio: 27.47,
      parametros: [
        {
          tipo: 'LISTA',
          nombre: 'especie001',
          texto: 'Especie',
          id: 13,
          opcional: true,
          multiple: false,
          dependeDeParametroId: null,
          valor: null,
          itemList: [
            {
              id: 1,
              valor: '1',
              texto: 'Perro',
              seleccionado: true,
              dependeDeValorId: null
            },
            {
              id: 2,
              valor: '2',
              texto: 'Gato',
              seleccionado: false,
              dependeDeValorId: null
            }
          ]
        },
        {
          tipo: 'LISTA',
          nombre: 'raza001',
          texto: 'Raza',
          id: 14,
          opcional: true,
          multiple: false,
          dependeDeParametroId: 13,
          valor: null,
          itemList: [
            {
              id: 3,
              valor: '1',
              texto: 'Affenpinscher',
              seleccionado: true,
              dependeDeValorId: 1
            },
            {
              id: 4,
              valor: '2',
              texto: 'Agua Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 5,
              valor: '3',
              texto: 'Agua Irlandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 6,
              valor: '4',
              texto: 'Airedale Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 7,
              valor: '5',
              texto: 'Akita Inu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 8,
              valor: '6',
              texto: 'Alano Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 9,
              valor: '7',
              texto: 'Alaskan Malamute',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 10,
              valor: '8',
              texto: 'American Stafforshire Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 11,
              valor: '9',
              texto: 'Anglo-francais De Petite Venerie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 12,
              valor: '10',
              texto: 'Antiguo Perro Pastor Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 13,
              valor: '11',
              texto: 'Azawakh',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 14,
              valor: '12',
              texto: 'Bardino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 15,
              valor: '13',
              texto: 'Basenji',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 16,
              valor: '14',
              texto: 'Basset Artesien Normand',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 17,
              valor: '15',
              texto: 'Basset Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 18,
              valor: '16',
              texto: 'Basset Fauve De Bretagne',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 19,
              valor: '17',
              texto: 'Basset Hound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 20,
              valor: '18',
              texto: 'Beagle',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 21,
              valor: '19',
              texto: 'Beagle Harrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 22,
              valor: '20',
              texto: 'Bearded Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 23,
              valor: '21',
              texto: 'Bedlington Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 24,
              valor: '22',
              texto: 'Bichon Boloñes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 25,
              valor: '23',
              texto: 'Bichon Frise',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 26,
              valor: '24',
              texto: 'Bichon Habanero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 27,
              valor: '25',
              texto: 'Bichon Maltes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 28,
              valor: '26',
              texto: 'Bob Tail',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 29,
              valor: '27',
              texto: 'Border Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 30,
              valor: '28',
              texto: 'Border Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 31,
              valor: '29',
              texto: 'Borzoi',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 32,
              valor: '30',
              texto: 'Boston Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 33,
              valor: '31',
              texto: 'Bouvier Bernois',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 34,
              valor: '32',
              texto: 'Bouvier De Flandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 35,
              valor: '33',
              texto: 'Boxer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 36,
              valor: '34',
              texto: 'Boyero De Flandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 37,
              valor: '35',
              texto: 'Braco Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 38,
              valor: '36',
              texto: 'Braco De Weimar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 39,
              valor: '37',
              texto: 'Braco Frances Tipo Gascuña (grande)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 40,
              valor: '38',
              texto: 'Braco Frances Tipo Pirineos (peque)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 41,
              valor: '39',
              texto: 'Braco Hungaro De Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 42,
              valor: '40',
              texto: 'Braco Hungaro De Pelo Duro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 43,
              valor: '41',
              texto: 'Braco Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 44,
              valor: '42',
              texto: 'Briquet Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 45,
              valor: '43',
              texto: 'British Staffordshire Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 46,
              valor: '44',
              texto: 'Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 47,
              valor: '45',
              texto: 'Bulldog Americano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 48,
              valor: '46',
              texto: 'Bulldog Frances',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 49,
              valor: '47',
              texto: 'Bulldog Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 50,
              valor: '48',
              texto: 'Bullmastiff',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 51,
              valor: '49',
              texto: 'Cain Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 52,
              valor: '50',
              texto: 'Cane Corso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 53,
              valor: '51',
              texto: 'Caniche',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 54,
              valor: '52',
              texto: 'Cao Da Serra Da Estrella',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 55,
              valor: '53',
              texto: 'Cao Da Serra De Aires',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 56,
              valor: '54',
              texto: 'Carlino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 57,
              valor: '55',
              texto: 'Cavalier King Charles Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 58,
              valor: '56',
              texto: 'Cesky Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 59,
              valor: '57',
              texto: 'Chesapeake Bay Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 60,
              valor: '58',
              texto: 'Chien De Sant Hubert (bloodhound)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 61,
              valor: '59',
              texto: 'Chihuahua',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 62,
              valor: '60',
              texto: 'Chinese Crested Dog',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 63,
              valor: '61',
              texto: 'Chow Chow',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 64,
              valor: '62',
              texto: 'Cirneco Dell´Etna',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 65,
              valor: '63',
              texto: 'Clumber Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 66,
              valor: '64',
              texto: 'Cocker Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 67,
              valor: '65',
              texto: 'Cocker Spaniel Americano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 68,
              valor: '66',
              texto: 'Cocker Spaniel Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 69,
              valor: '67',
              texto: 'Coton De Tuelar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 70,
              valor: '68',
              texto: 'Curly - Coated Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 71,
              valor: '69',
              texto: 'Dalmata',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 72,
              valor: '70',
              texto: 'Dandie Dinmont Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 73,
              valor: '71',
              texto: 'Deerhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 74,
              valor: '72',
              texto: 'Deutsth Drahtahaar',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 75,
              valor: '73',
              texto: 'Doberman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 76,
              valor: '74',
              texto: 'Dogo Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 77,
              valor: '75',
              texto: 'Dogo Argentino',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 78,
              valor: '76',
              texto: 'Dogo Arlequin',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 79,
              valor: '77',
              texto: 'Dogo Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 80,
              valor: '78',
              texto: 'Dogo De Burdeos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 81,
              valor: '79',
              texto: 'Dogo Del Tibet',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 82,
              valor: '80',
              texto: 'Dogo Mallorquin (ca De Bou)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 83,
              valor: '81',
              texto: 'English Springer Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 84,
              valor: '82',
              texto: 'Epagneul Breton',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 85,
              valor: '83',
              texto: 'Epagneul Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 86,
              valor: '84',
              texto: 'Epagneul Nain Continental',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 87,
              valor: '85',
              texto: 'Eurasier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 88,
              valor: '86',
              texto: 'Pastor Vasco (Euskal Artain Txacurra)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 89,
              valor: '87',
              texto: 'Fila Brasileiro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 90,
              valor: '88',
              texto: 'Finlandes De Laponia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 91,
              valor: '89',
              texto: 'Flat - Coated Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 92,
              valor: '90',
              texto: 'Fox Terrier De Pelo Duro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 93,
              valor: '91',
              texto: 'Fox Terrier De Pelo Liso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 94,
              valor: '92',
              texto: 'Galgo Afgano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 95,
              valor: '93',
              texto: 'Galgo Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 96,
              valor: '94',
              texto: 'Golden Retriever',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 97,
              valor: '95',
              texto: 'Gran Bouvier Suizo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 98,
              valor: '96',
              texto: 'Gran Danes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 99,
              valor: '97',
              texto: 'Gran Perro Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 100,
              valor: '98',
              texto: 'Gran Sabueso Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 101,
              valor: '99',
              texto: 'Grand Basset Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 102,
              valor: '100',
              texto: 'Greyhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 103,
              valor: '101',
              texto: 'Griffon Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 104,
              valor: '102',
              texto: 'Griffon D´Arret A Poir Dur',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 105,
              valor: '103',
              texto: 'Griffon De Bruselas',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 106,
              valor: '104',
              texto: 'Griffon Fauve De Bretagne',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 107,
              valor: '105',
              texto: 'Griffon Nivernais',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 108,
              valor: '106',
              texto: 'Gronlandshund',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 109,
              valor: '107',
              texto: 'Irish Glen Of Imaal Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 110,
              valor: '108',
              texto: 'Irish Soft - Coated Wheaten Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 111,
              valor: '109',
              texto: 'Irish Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 112,
              valor: '110',
              texto: 'Irish Wolfhound',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 113,
              valor: '111',
              texto: 'Kelpie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 114,
              valor: '112',
              texto: 'Kerry Blue Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 115,
              valor: '113',
              texto: 'Kleiner Munsterlander Vorstehhund',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 116,
              valor: '114',
              texto: 'Komondor',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 117,
              valor: '115',
              texto: 'Laika De Siberia Oriental',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 118,
              valor: '116',
              texto: 'Lakeland Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 119,
              valor: '117',
              texto: 'Landseer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 120,
              valor: '118',
              texto: 'Leonberger',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 121,
              valor: '119',
              texto: 'Lhasa Apso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 122,
              valor: '120',
              texto: 'Lobo Checoslovaco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 123,
              valor: '121',
              texto: 'Lobo De Saarloos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 124,
              valor: '122',
              texto: 'Majorero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 125,
              valor: '123',
              texto: 'Manchester Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 126,
              valor: '124',
              texto: 'Mastiff',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 127,
              valor: '125',
              texto: 'Mastin De Los Pirineos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 128,
              valor: '126',
              texto: 'Mastin Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 129,
              valor: '127',
              texto: 'Mastin Leones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 130,
              valor: '128',
              texto: 'Mastin Napolitano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 131,
              valor: '129',
              texto: 'Mestizo Sin Raza Conocida',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 132,
              valor: '130',
              texto: 'Montaña De Los Pirineos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 133,
              valor: '131',
              texto: 'Nihon Supittsu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 134,
              valor: '132',
              texto: 'Norfolk Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 135,
              valor: '133',
              texto: 'Norwich Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 136,
              valor: '134',
              texto: 'Oso De Carelia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 137,
              valor: '135',
              texto: 'Pachon Navarro',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 138,
              valor: '136',
              texto: 'Papillon - Spaniel Enano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 139,
              valor: '137',
              texto: 'Parson Jack Russell Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 140,
              valor: '138',
              texto: 'Pastor Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 141,
              valor: '139',
              texto: 'Pastor Alsaciano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 142,
              valor: '140',
              texto: 'Pastor Belga',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 143,
              valor: '141',
              texto: 'Pastor Catalan (gos d´atura)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 144,
              valor: '142',
              texto: 'Pastor De Anatolia',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 145,
              valor: '143',
              texto: 'Pastor De Asia Central',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 146,
              valor: '144',
              texto: 'Pastor De Beauce',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 147,
              valor: '145',
              texto: 'Pastor De Bergamasco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 148,
              valor: '146',
              texto: 'Pastor De Brie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 149,
              valor: '147',
              texto: 'Pastor De Los Pirineos De Cara Rasa',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 150,
              valor: '148',
              texto: 'Pastor De Los Pirineos-pelo Largo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 151,
              valor: '149',
              texto: 'Pastor De Rusia Meridional',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 152,
              valor: '150',
              texto: 'Pastor Del Caucaso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 153,
              valor: '151',
              texto: 'Pastor Escoces (rough Collie)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 154,
              valor: '152',
              texto: 'Pastor Garafiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 155,
              valor: '153',
              texto: 'Pastor Majonero',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 156,
              valor: '154',
              texto: 'Pastor Mallorquin (ca De Bestiar)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 157,
              valor: '155',
              texto: 'Pastor Polaco De Las Llanuras',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 158,
              valor: '156',
              texto: 'Pastor Polaco De Podhale',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 159,
              valor: '228',
              texto: 'Pastor suizo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 160,
              valor: '157',
              texto: 'Pekines',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 161,
              valor: '158',
              texto: 'Pequeño Lebrel Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 162,
              valor: '159',
              texto: 'Pequeño Sabueso Azul De Gascuña',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 163,
              valor: '160',
              texto: 'Perdiguero De Burgos',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 164,
              valor: '161',
              texto: 'Perdiguero Portugues',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 165,
              valor: '162',
              texto: 'Peru Sin Pelo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 166,
              valor: '163',
              texto: 'Petit Basset Griffon Vendeen',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 167,
              valor: '164',
              texto: 'Petit Brabancon',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 168,
              valor: '165',
              texto: 'Petit Chien Lion',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 169,
              valor: '166',
              texto: 'Petit Gascon Saintongeois',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 170,
              valor: '167',
              texto: 'Pinsher',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 171,
              valor: '168',
              texto: 'Pit Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 172,
              valor: '169',
              texto: 'Podenco Andaluz',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 173,
              valor: '170',
              texto: 'Podenco Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 174,
              valor: '171',
              texto: 'Podenco De Los Faraones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 175,
              valor: '172',
              texto: 'Podenco Ibicenco',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 176,
              valor: '173',
              texto: 'Podenco Portugues',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 177,
              valor: '174',
              texto: 'Pointer',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 178,
              valor: '175',
              texto: 'Pomerania',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 179,
              valor: '176',
              texto: 'Porcelaine',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 180,
              valor: '177',
              texto: 'Presa Canario',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 181,
              valor: '178',
              texto: 'Presa Mallorquin (ca De Bou)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 182,
              valor: '179',
              texto: 'Puli',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 183,
              valor: '180',
              texto: 'Pumi',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 184,
              valor: '181',
              texto: 'Ratonero - Bodeguero Andaluz',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 185,
              valor: '182',
              texto: 'Retriever De Labrador',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 186,
              valor: '183',
              texto: 'Rhodesian Ridgeback',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 187,
              valor: '184',
              texto: 'Rottweiler',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 188,
              valor: '185',
              texto: 'Sabueso De Sangre De Babiera',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 189,
              valor: '186',
              texto: 'Sabueso Español',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 190,
              valor: '187',
              texto: 'Saluki',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 191,
              valor: '188',
              texto: 'Samoyedo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 192,
              valor: '189',
              texto: 'San Bernardo',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 193,
              valor: '190',
              texto: 'Schipperke',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 194,
              valor: '191',
              texto: 'Schnauzer Gigante',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 195,
              valor: '192',
              texto: 'Schnauzer Mediano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 196,
              valor: '193',
              texto: 'Schnauzer Miniatura',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 197,
              valor: '194',
              texto: 'Scottish Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 198,
              valor: '195',
              texto: 'Sealyham Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 199,
              valor: '196',
              texto: 'Setter Gordon',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 200,
              valor: '197',
              texto: 'Setter Ingles',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 201,
              valor: '198',
              texto: 'Setter Irlandes',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 202,
              valor: '199',
              texto: 'Shar Pei',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 203,
              valor: '200',
              texto: 'Shetland Sheepdog',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 204,
              valor: '201',
              texto: 'Shiba Inu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 205,
              valor: '202',
              texto: 'Shih - Tzu',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 206,
              valor: '203',
              texto: 'Shikoku',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 207,
              valor: '204',
              texto: 'Siberian Husky',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 208,
              valor: '205',
              texto: 'Silky Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 209,
              valor: '206',
              texto: 'Skye Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 210,
              valor: '207',
              texto: 'Smooth Collie',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 211,
              valor: '208',
              texto: 'Spinone Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 212,
              valor: '209',
              texto: 'Spitz Aleman',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 213,
              valor: '210',
              texto: 'Staffordshire Bull Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 214,
              valor: '211',
              texto: 'Sussex Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 215,
              valor: '212',
              texto: 'Teckel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 216,
              valor: '213',
              texto: 'Terranova',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 217,
              valor: '214',
              texto: 'Terrier Aleman De Caza',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 218,
              valor: '215',
              texto: 'Terrier Brasileño',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 219,
              valor: '216',
              texto: 'Terrier Japones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 220,
              valor: '217',
              texto: 'Terrier Negro Ruso',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 221,
              valor: '218',
              texto: 'Tibetan Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 222,
              valor: '219',
              texto: 'Tosa Inu (tosa Japones)',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 223,
              valor: '220',
              texto: 'Volpino Italiano',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 224,
              valor: '221',
              texto: 'Welsh Corgi Pembroke',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 225,
              valor: '222',
              texto: 'Welsh Springer Spaniel',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 226,
              valor: '223',
              texto: 'Welsh Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 227,
              valor: '224',
              texto: 'West Higland White Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 228,
              valor: '225',
              texto: 'Whippet',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 229,
              valor: '226',
              texto: 'Yorkshire Terrier',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 230,
              valor: '227',
              texto: 'Zwergpinscher',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 231,
              valor: '229',
              texto: 'Villano de las Encartaciones',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 232,
              valor: '230',
              texto: 'American Bully',
              seleccionado: false,
              dependeDeValorId: 1
            },
            {
              id: 233,
              valor: '1',
              texto: 'Abisinio',
              seleccionado: true,
              dependeDeValorId: 2
            },
            {
              id: 234,
              valor: '2',
              texto: 'Americano - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 235,
              valor: '3',
              texto: 'Angora',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 236,
              valor: '4',
              texto: 'Azul Ruso',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 237,
              valor: '5',
              texto: 'Balines',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 238,
              valor: '6',
              texto: 'Bengal',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 239,
              valor: '7',
              texto: 'Birmano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 240,
              valor: '8',
              texto: 'Bobtail Japones',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 241,
              valor: '9',
              texto: 'Bombay',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 242,
              valor: '10',
              texto: 'Bosque de Noruega',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 243,
              valor: '11',
              texto: 'Brasileño - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 244,
              valor: '12',
              texto: 'Britanico - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 245,
              valor: '13',
              texto: 'Burmes',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 246,
              valor: '14',
              texto: 'Burmilla',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 247,
              valor: '15',
              texto: 'California Spangled',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 248,
              valor: '16',
              texto: 'Cartujo',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 249,
              valor: '17',
              texto: 'Colourpoint Pelo Largo',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 250,
              valor: '18',
              texto: 'Cornish Rex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 251,
              valor: '19',
              texto: 'Curl Americano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 252,
              valor: '20',
              texto: 'Cymric',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 253,
              valor: '21',
              texto: 'Devon Rex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 254,
              valor: '22',
              texto: 'Europeo - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 255,
              valor: '23',
              texto: 'Exotico - Pelo Corto',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 256,
              valor: '24',
              texto: 'Fold Escoces',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 257,
              valor: '25',
              texto: 'Foldex',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 258,
              valor: '26',
              texto: 'Habana',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 259,
              valor: '27',
              texto: 'Himalaya',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 260,
              valor: '28',
              texto: 'Javanes',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 261,
              valor: '29',
              texto: 'Keuda',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 262,
              valor: '30',
              texto: 'Angora Turco',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 263,
              valor: '31',
              texto: 'Maine',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 264,
              valor: '32',
              texto: 'Manx',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 265,
              valor: '33',
              texto: 'Mau Egipcio',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 266,
              valor: '55',
              texto: 'Gato Mestizo Sin Raza Conocida',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 267,
              valor: '34',
              texto: 'Mojave',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 268,
              valor: '35',
              texto: 'Munchkin',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 269,
              valor: '36',
              texto: 'Nebelung',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 270,
              valor: '37',
              texto: 'Ocicat',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 271,
              valor: '38',
              texto: 'Oriental',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 272,
              valor: '39',
              texto: 'Persa',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 273,
              valor: '40',
              texto: 'Pixie Bob',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 274,
              valor: '41',
              texto: 'Ragamuffin',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 275,
              valor: '42',
              texto: 'Ragdoll',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 276,
              valor: '43',
              texto: 'Rex Selkirk',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 277,
              valor: '44',
              texto: 'Ringtail',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 278,
              valor: '45',
              texto: 'Siames',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 279,
              valor: '46',
              texto: 'Siberiano',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 280,
              valor: '47',
              texto: 'Singapura',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 281,
              valor: '48',
              texto: 'Snowshoe',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 282,
              valor: '49',
              texto: 'Sokoke',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 283,
              valor: '50',
              texto: 'Somali',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 284,
              valor: '51',
              texto: 'Sphynx',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 285,
              valor: '52',
              texto: 'Tonquines',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 286,
              valor: '53',
              texto: 'Van Turco',
              seleccionado: false,
              dependeDeValorId: 2
            },
            {
              id: 287,
              valor: '54',
              texto: 'York Chocolate',
              seleccionado: false,
              dependeDeValorId: 2
            }
          ]
        },
        {
          tipo: 'ESCALAR',
          nombre: 'fechaNacimiento001',
          texto: 'Fecha Nacimiento',
          id: 15,
          opcional: true,
          valor: '01/01/2018'
        },
        {
          tipo: 'ESCALAR',
          nombre: 'chip001',
          texto: 'Chip',
          id: 16,
          opcional: true,
          valor: '123456'
        },
        {
          tipo: 'ESCALAR',
          nombre: 'cp001',
          texto: 'Código Postal',
          id: 17,
          opcional: false,
          valor: '08080'
        }
      ],
      garantiasIncluidas: [
        'Acceso a precio fijo un 40% más barato en más de 300 clínicas',
        'Teléfono de asistencia veterinaria las 24 horas.',
        'Coberturas de Muerte (500€), Robo (500€), Extravío y sacrificio (150€)'
      ],
      garantiasNoIncluidas: [],
      complements: [
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 22,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false
        },
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 23,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false
        },
        {
          tipo: 'COMPLEMENTO',
          nombre: 'rc001',
          texto:
            'Incorpora cobertura de responsabilidad civil (obligatoria para raza peligrosa) por 170 mil euros por',
          id: 25,
          opcional: true,
          valor: 'false',
          tooltip: 'Tooltip complemento RC MASCOTAS CAS',
          checked: false
        }
      ],
      codigoOferta: '1255',
      id: '0a1bd010-aefb-11e9-8301-15f5fa510ad3',
      checked: false
    }
  ];
};

export { getInitialProps };
