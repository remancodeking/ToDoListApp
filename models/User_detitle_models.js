const mongoose = require("mongoose")

const UserDetileiSchema = new mongoose.Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    },
    image:{
        type:String
    },
    userid:{
        type:String
    }
  });


const UserDetilei = mongoose.model('UserDetilei', UserDetileiSchema);

module.exports = UserDetilei
