const User=require("../model/user");
const express = require('express');
const router=new express.Router();
const path = require('path');
const auth=require("../middleware/auth")


router.post('/users', async (req, res) => {
    try{
        if (typeof localStorage === "undefined" || localStorage === null) {
            var LocalStorage = require('node-localstorage').LocalStorage;
            localStorage = new LocalStorage("");
        }
    const user = new User(req.body)
    await user.save();
    let token=await user.generateAuthToken();
    localStorage.setItem('Token',token);
    res.sendFile(path.join(__dirname, '../../public/html/main.html'));
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/users/the/json",auth,async (req, res) => {
    res.send(req.user);
});
router.post('/users/login', async (req, res) => {
    try {
        if (typeof localStorage === "undefined" || localStorage === null) {
            var LocalStorage = require('node-localstorage').LocalStorage;
            localStorage = new LocalStorage("");
        }   
        const user=await User.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(!user){
           return  res.status(404).send("Not Found");
        }
        
        let token=await user.generateAuthToken();
        localStorage.setItem('Token',token);
        res.sendFile(path.join(__dirname, '../../public/html/main.html'));

    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

module.exports={router};

