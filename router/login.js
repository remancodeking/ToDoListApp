const express = require("express")
const router = express.Router()
const resigeter_models = require('../models/resigeter_models')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const key = 'codewithreman'

router.post('/', async (req, res)=>{
    try {
        const {email, password}= req.body
        const FindUserData  =  await resigeter_models.findOne({email:email})
        if(FindUserData){
            bcrypt.compare(password, FindUserData.password, (err,data)=>{
                if(data){
                    const token = jwt.sign({id:FindUserData._id, email:FindUserData.email}, key)                  
                    res.status(200).json({status:true, massges:'Seccessful Login...', date:FindUserData,token:token})
                }else{
                    res.status(404).json({status:false, massges:'This user not found...'})
                }
            })
        }else{
            res.status(404).json({status:false, massges:'This user not found...'})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})

module.exports = router