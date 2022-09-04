const doenv = require("dotenv")
const env = doenv.config()
const jwt = require('jsonwebtoken')
const key = process.env.S_key

const auth = (req, res,next)=>{
    try {
        let token = req.headers.authorization
        if(token){
            token = token.split(' ')[1]
            let user = jwt.verify(token, key)
            req.userid = user.id
            next()
        }else{
            res.status(404).json({status:false, massges:'Not authorize user...'})
        }
        
    } catch (error) {
        res.status(500).json({status:false, massges:'Not authorize user...'})
    }
}

module.exports = auth