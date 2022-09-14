const express = require("express")
const router = express.Router()
const user_detile_models = require("../models/User_detitle_models")
const auth = require("../middleware/middleware")
router.get('/', auth, async (req, res) => {
    try {
        const userdetile = await user_detile_models.find({ userid: req.userid })
            if (userdetile.length > 0) {
                res.status(200).json({ status: true, massges: 'Your data...', data: userdetile })
            } else {
                res.status(404).json({ status: false, massges: 'Not found...' })
            }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, massges: 'The Server Error' })
    }
})

module.exports = router