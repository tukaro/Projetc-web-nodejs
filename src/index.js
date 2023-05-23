const express = require('express');
const path =require('path')
var morgan = require('morgan');
const  handlebars = require ('express-handlebars');


const db = require('./config/db')

db.connect();

const app = express();
const port = 3000;
const route = require('./routes')


app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded());
app.use(express.json());


app.use(morgan('combined'));
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// const ProductItem = require('./app/models/Course');


// const {mutipleMongooseToObject} =require('./util/mongoose')

// app.get('/detail-product', (req, res) => {
//   index(req, res);
// });

// function index(req, res, next) {
//   ProductItem.find({})
//   .then(product_item => {

//     res.render('detail-product', {
//       product_item:mutipleMongooseToObject(product_item)})})
//   .catch(next); 
  
// }

route(app);


// app.get('/model', (req, res) => {
//   res.render('model');
// })
app.listen(port, () => {
  console.log(` app listening on port htttp://localhost:${port}`);
})