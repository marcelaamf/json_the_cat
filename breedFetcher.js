const args = process.argv.splice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
    console.log(typeof data);
    process.exit();
  } else {
    console.log('Breed not found');
    process.exit();
  }
});
