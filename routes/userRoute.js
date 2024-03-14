const express = require("express");
const router  = express.Router();


// /api/user + /
router.get("/" , function(req,res,next){
    res.status(200).json({succes: true , message: "this is test route"});
});

router.post("/create" , function(req,res,next){
    res.status(201).json({success:true , user : req.body});
});

module.exports = router;
