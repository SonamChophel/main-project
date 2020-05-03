var mongoose                = require("mongoose");
    passportLocalMongoose   = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username:String,
    cid: Number,
    dob: Date,
    email: String,
    phonenumber: Number,
    address: String,
    password: String,
    acctype: String
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);
