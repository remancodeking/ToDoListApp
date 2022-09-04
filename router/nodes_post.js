const express = require("express")
const router = express.Router()
const nodes_models = require("../models/nodes_models")
const auth = require('../middleware/middleware')

router.post("/", auth, (req, res)=>{
    try {
        const {title, desc}=req.body
        const mynodes = new nodes_models({
            title:title,
            desc:desc,
            userid:req.userid
        })
        mynodes.save().then(()=>{
            res.status(200).json({status:true, massges:'You nodes is svae', data:mynodes})
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})
module.exports = router