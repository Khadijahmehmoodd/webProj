const mongoose = require('mongoose');
mongoose.connect('mongodb:localhost:27017', {useNewUrlParser: true,useUnifiedTopology:true});
const { MongoClient, ObjectId } = require('mongodb');
const express = require('express')
const Restaurant= require('../model/modelRestaurant')


const addRestaurant= async (req,res) => {
  console.log("Creation: ");
  
  const {name,type,location,rate,image} = req.body;

    const newRestaurant= new Restaurant({
        name,type,location,rate,image
      });
      
    console.log(req.body);

    
    const result = await newRestaurant.save().catch((err) => 
    {
    console.error(err);
    });

    console.log("RestaurantCreated!");


}

const getRestaurant= (req, res) => {

  Restaurant.find()
  .then((Restaurant) => {
    res.status(200).json({
      Restaurant: Restaurant,
    });
  }).catch((err) => 
  {
  console.error(err);
  });
}

const deleteRestaurant= async (req, res) => {

  const { id } = req.params;
  console.log("Restaurantdeleted: " + id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid' });
  }
  const Restaurants = await Restaurant.findOneAndDelete({ _id: id });
  if (Restaurants) {
    res.status(200).json(Restaurants);
  } else {
    res.status(404).json({ error: 'Not Found!' });
  }
};

const findRestaurant= async (req,res) => {
  const {name} = req.params;
  console.log("Found: " + name);
  Restaurant.findOne({name: name})
  .then((Restaurant) => {
    res.status(200).json({
      Restaurant: Restaurant,
    });
  }).catch((err) => 
  {
  console.error(err);
  });
}


const updateRestaurant= async (req,res) => {
  const{id} = req.params;
  
  const newRestaurant= {
    name:req.body.namee,
    type:req.body.type,
    location:req.body.location,
    rate:req.body.rate,
    image:req.body.image,
  }

  console.log(req.body);

  Restaurant.findByIdAndUpdate(id,newRestaurant,function(err,updatedprofile)
    {
      res.json("Profile Updated")
    }
  ).clone().catch((err) => 
  {
  console.error(err);
  });
 

}

  exports.getRestaurant= getRestaurant;
  exports.addRestaurant= addRestaurant;
  exports.deleteRestaurant= deleteRestaurant;
  exports.updateRestaurant= updateRestaurant;
  exports.findRestaurant= findRestaurant;