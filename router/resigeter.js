const express = require("express")
const router = express.Router()
const resigeter_models = require('../models/resigeter_models')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const key = 'codewithreman'

router.post('/', async (req, res)=>{
    try {
        const {name, email, password}= req.body
        const FindUserData  =  await resigeter_models.findOne({email:email})
        if(!FindUserData){
            bcrypt.hash(password, 10, (err,hash)=>{
                const mydate = resigeter_models({
                    name:name,
                    email:email,
                    password:hash
                })
                mydate.save().then(()=>{
                    
                    const token = jwt.sign({id:mydate._id, email:mydate.email}, key)                  
                    res.status(200).json({status:true, massges:'Seccessful Resigeter...', date:mydate,token:token})
                })


            })
        }else{
            res.status(200).json({status:false, massges:'This user is alrede Resigeter...'})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({status:false, massges:'The Server Error'})
    }
})

module.exports = router