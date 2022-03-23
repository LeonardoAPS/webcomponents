const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const createError = require('http-errors');

const port = 3001;
const routes = require('./routes');
const app = express();
app.locals.siteName = 'WebComponents';
app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
  })
);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//calling directly an HTML file that listen for the another service
app.use('/leo', express.static(path.join(__dirname, './static/leo/leo.html')));
app.use('/ring', express.static(path.join(__dirname, './static/ring/ring.html')));
app.use('/demo', express.static(path.join(__dirname, './static/demo/demo.html')));
app.use('/docs', express.static(path.join(__dirname, './static/docs/docs.html')));
app.use('/sura', express.static(path.join(__dirname, './static/sura/sura.html')));

/*
//to render pages using EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
*/
app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
  })
);

app.use((err, request, response, next) => {
  response.locals.message = err.message;
  console.error(err);
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render('error');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});