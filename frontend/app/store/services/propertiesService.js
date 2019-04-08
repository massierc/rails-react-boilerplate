const fetchProperties = params => fetch(
  `${process.env.REACT_APP_MOCK_SERVER_URL}/properties`,
  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
).then(data => console.log(data));

const propertiesService = { fetchProperties };

export default propertiesService;
