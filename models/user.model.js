const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    //database create korbo setar structure
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    createdOn:{
        type: Date,
        default: Date.now,
    },
});
// no sql data base tai, tabler poriborte collection create kri
module.exports = mongoose.model("User", userSchema)
// ey database userschema follow krbe
