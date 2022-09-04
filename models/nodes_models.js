const mongoose = require("mongoose")

const NodesSchema = new mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    userid:{
        type:String
    },
    date:{
        type:String,
        default:Date()
    }
  });


const Nodes = mongoose.model('Nodes', NodesSchema);

module.exports = Nodes
