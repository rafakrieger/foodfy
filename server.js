const express = require("express")
const nunjucks = require("nunjucks")

server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/about", function(req, res){
    return res.render("about")    
})

server.get("/recipes", function(req, res){
    return res.render("recipes")    
})

server.listen(4000, function(){
    console.log("server is running")
})
