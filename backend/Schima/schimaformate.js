const mongoose = require("mongoose");

const schemapatter = new mongoose.Schema([{
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    city: {
        type: String
    },
    picimg: {
        type: String
    }

}])

const dbsetdata = new mongoose.model("ducatpros", schemapatter);
module.exports = dbsetdata;

// fullname: "", email: "", phone: "", password: "", gender: "", city: ""