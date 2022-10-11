const express = require("express")
const router = express.Router()
const nodes_models = require("../models/nodes_models")
const auth = require('../middleware/middleware')

router.delete("/:id", auth, async (req, res)=>{
    try {
        if(req.params.id){
            const userdelete = await nodes_models.findByIdAndDelete(req.params.id)
            res.status(202).json({status:false, massges:'Delete Nodes', nodes:userdelete})
        }
    
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})
module.exports = router