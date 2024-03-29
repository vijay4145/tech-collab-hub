const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = "user";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
    },
    username : {
        type: String,
        required : true,
    },
    githublink : {
        type : String,
        required: true,
    },
    tags : [],
    collegeName : {
        type: String,
    },
    semester : {
        type : String
    },
    generated_tags : {
        type : String,
    },
    knn : [],

})

module.exports = mongoose.model(DATABASE_TABLE_NAME, userSchema);