
const express = require("express");
const schimdata = require("../Schima/schimaformate")
const route = express.Router();

route.get("/", (req, res) => {
    res.send("home page hai ")
})

route.get("/about", (req, res) => {
    res.send("about page")
})


//all data api,  Rest full API fetch
route.get("/dballdata", async (req, res) => {
    const showdata = await schimdata.find()
    res.json(showdata);
    console.log(showdata);
})

// post API  create
route.post("/create", async (req, res) => {
    const { fullname, email, phone, password, gender, city, picimg } = req.body;

    const adduser = new schimdata({
        fullname, email, phone, password, gender, city, picimg
    })
    await adduser.save()
    res.status(200).json(adduser);
    console.log(adduser);
})

//view(Read page) operation 

//single data api create
route.get("/singleviewdata/:id", async (req, res) => {
    const { id } = req.params;
    const singdata = await schimdata.findById({ _id: id });
    res.json(singdata);
    console.log(singdata);
})

route.get("/singleviewdata/:id", async (req, res) => {
    const { id } = req.params;
    const singdata = await schimdata.findById(id);
    res.json(singdata);
    console.log(singdata);
})

//delete API 
route.delete("/deletedata/:id", async (req, res) => {
    const { id } = req.params;
    const deldata = await schimdata.findByIdAndDelete({ _id: id });
    res.status(201).json(deldata)
})

//update data api
route.patch("/updatedata/:id", async (req, res) => {
    const { id } = req.params;
    const userdataupdate = await schimdata.findByIdAndUpdate(id, req.body, { new: true });
    console.log(userdataupdate);
    res.status(201).json(userdataupdate);
})

module.exports = route;















