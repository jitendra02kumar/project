const mongoose = require("mongoose");

const db_path_url = "mongodb+srv://jitukumar:jitu7084@cluster0.3woghe7.mongodb.net/jitu";

mongoose.connect(db_path_url).then(() => {
    console.log("db conect");
}).catch((error) => {
    console.log(error.message);
})


