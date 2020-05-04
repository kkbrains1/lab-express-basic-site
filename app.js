const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  console.log(__dirname);
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/app.js', (request, response) => {
  response.sendFile(__dirname + '/app.js');
});

/* app.get('/public/styles/main.css', (request, response) => {
  response.sendFile(__dirname + '/public/styles/main.css');
}); */


app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/photo-gallery', (request, response) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('/*', (request, response) => {
  response.send('Houston we have a problem');
});

app.listen(3000);