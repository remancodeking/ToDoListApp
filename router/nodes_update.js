const express = require("express")
const router = express.Router()
const nodes_models = require("../models/nodes_models")
const auth = require('../middleware/middleware')

router.put("/:id", auth, async (req, res)=>{
    try {
        let id = req.params.id
        let {title, desc} = req.body

        const newnodes = {
            title:title,
            desc:desc
        }
        await nodes_models.findByIdAndUpdate(id,newnodes,{new:true})
        res.status(200).json({status:true, massges:'Update nodes', newnodes})
    
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})
module.exports = router