const mongoose  = require("mongoose");

const userModel = new mongoose.Schema(
    {
        username : {
            type : String,
            trim : true,
            unique : true,
            required : [ true , "username is required"],
            minLength : [3 , "username must be at least 3 characters"],
        },

        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: [ true , 'Email address is required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        
        },

        password: {
            type: String,
            minlength: 6,
            maxLength : [15 , "username must be at most 15 characters"],
            lowercase: true,    
        }
        

    },
    {
        timestamps : true
    }

);

const user = mongoose.model("user" , userModel);

module.exports = user;