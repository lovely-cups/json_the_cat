const request = require('request');

const breed = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
const data = JSON.parse(body);  
const description = data[0].description;
if(description === undefined) {
  console.log("Breed not found!");
}
if (error) {
  console.log(error);
}

});
//fs.readFile("https://api.thecatapi.com/v1/breeds/search?q=sib", "utf8")


