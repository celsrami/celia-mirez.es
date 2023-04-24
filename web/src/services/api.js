// Fichero src/services/api.js
const callToApi = () => {
  return fetch(`http://localhost:4000/products`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default callToApi;
