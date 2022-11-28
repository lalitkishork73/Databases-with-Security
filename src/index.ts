const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app=express();

app.listen(3000,()=>{
    console.log("connected 3000")
})


