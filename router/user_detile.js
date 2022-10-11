const express = require("express")
const router = express.Router()
const path = require("path")
const multer = require("multer")
const User_detile_models = require("../models/User_detitle_models")
const auth = require("../middleware/middleware")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        const filename = file.fieldname + "-" + Date.now() + ".jpg"
        cb(null, filename)
        req.reqfilename = filename
    }
})
const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
    // mypic is the name of file attribute
}).single("mypic");


router.post('/', auth, async (req, res) => {
    try {
        const newuserdetile = await User_detile_models.find({ userid: req.userid })

        if(newuserdetile.length < 2){
        const { name, gender } = req.body
        const userid = req.userid
        if (name.length > 1 && gender.length > 3) {
            upload(req, res, function (err) {
                try {
                    console.log(req.reqfilename)
                    if (err) {
                        console.log(err)
                        res.status(200).json({ status: false, massges: 'image uploading error...' })
                    }
                    else {
                        const newuserdetile = new User_detile_models({
                            name: name,
                            gender: gender,
                            image: req.reqfilename,
                            userid: userid
                        })
                        newuserdetile.save().then(() => {
                            res.status(200).json({ status: true, massges: 'Success, uploaded!', detile: newuserdetile })
                        })
                    }
                } catch (error) {
                    console.log(error)
                    res.status(500).json({ status: false, massges: 'The Server Error' })
                }

            })

        }else{
            res.status(200).json({ status: true, massges: 'Your datile is alread exsite...' })

        }
        } else {
            res.status(201).json({ status: false, massges: 'Sorry your detile is rong...' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, massges: 'The Server Error' })
    }



})
module.exports = router