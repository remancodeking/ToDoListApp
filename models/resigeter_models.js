const mongoose = require("mongoose")

const ToDoListAppSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
  });


const ToDoListApp = mongoose.model('ToDoListApp', ToDoListAppSchema);

module.exports = ToDoListApp
