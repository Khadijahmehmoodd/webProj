const express = require('express');
const  restaurant = express.Router();
const bodyParser = require('body-parser')
const controller = require('../Controller/controlFood')
const cors = require('cors');
const Restaurant = require('../model/modelRestaurant')

 restaurant.use(bodyParser.json());
 restaurant.use(cors( { origin: '*' , } ));

 restaurant.use(express.urlencoded({extended: false}));

 restaurant.get('/', (req, res) => {
  res.send('In Routes')
})

 restaurant.post('/addRestaurant',controller.addRestaurant);
 restaurant.get('/getRestaurant',controller.getRestaurant);
 restaurant.delete('/deleteRestaurant/:id',controller.deleteRestaurant);
 restaurant.get('/findRestaurant/:name',controller.findRestaurant);
 restaurant.put('/updateRestaurant/:id',controller.updateRestaurant);

module.exports = restaurant;