const request = require('request');
const api = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  request(`${api}${breedName}`, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (!data[0]) {
        return callback("Breed not found", null);
      }
      return callback(null, data[0].description);
    } else {
      return callback(error, null);
    }
  });
};
module.exports = {fetchBreedDescription};
