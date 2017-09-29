const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name_first : {
    type : String,
    trim : true
  },

  name_last : {
    type : String,
    trim : true
  },

  email : {
    type     : String,
    required : true,
    index    : true,
  },

  google_id : {
    type   : String,
    sparse : true,
    unique : true
  },

  google_token : {
    type     : String,
    required : false
  }

});

module.exports = mongoose.model('User', userSchema);
