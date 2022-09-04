const express = require("express")
const router = express.Router()
const nodes_models = require("../models/nodes_models")
const auth = require('../middleware/middleware')

router.get("/", auth, async (req, res)=>{
    try {
       
        const nodes = await nodes_models.find({userid:req.userid})
        if(nodes.length>0){

            res.status(200).json({status:true, massges:'Your all nodes', data:nodes})
        }else{
            res.status(200).json({status:true, massges:'Sorry add you fast node'})

        }
       

    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})
module.exports = router