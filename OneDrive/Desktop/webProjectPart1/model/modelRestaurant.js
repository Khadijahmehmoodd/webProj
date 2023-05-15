const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    
    type:{
      type: String,
      required: true,
    },
    
    seats: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    
    
  });
  module.exports = mongoose.model("transport", UserSchema);