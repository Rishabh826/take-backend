const mongoose = require('mongoose');
const { Schema } = mongoose;
const bannerSchema = new Schema({
    description: String,
    timer: Number,
    link: String,
  
  });
  
  module.exports= mongoose.model('Banner', bannerSchema);