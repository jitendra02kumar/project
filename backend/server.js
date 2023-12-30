



const express = require("express");
const app = express();
const route = require("./Route/rout")
const cors = require("cors");

require("./DB/connection");

require("dotenv").config()
const port = process.env.port || 6000

app.use(express.json());
app.use(cors());
app.use(route);
app.listen(port, () => {
    console.log(`server is run ${port}`);
})

// rest api ko fetch karne ke liye url
//http://localhost:7000/dballdata