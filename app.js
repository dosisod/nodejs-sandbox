const express=require("express")
const path=require("path")

var app=express()

app.set("views", __dirname+"/views")
app.set("view engine", "jade")

app.get("/", function(req, res) {
	res.render("index")
})

module.exports=app