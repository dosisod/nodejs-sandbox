const express=require("express")
const path=require("path")

var app=express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.get("/", (req, res)=>{
	res.render("index")
})

module.exports=app