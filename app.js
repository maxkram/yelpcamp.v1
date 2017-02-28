var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.get("/", function(req, res){
   res.render("landing");
});
app.get("/campgrounds", function(req, res){
   var campgrounds = [
        {name: "Озеро Селигер", image: "http://2.bp.blogspot.com/-WZVjyxt5GQc/UiNgbZs94kI/AAAAAAAAIb0/YFITjBeCJsY/s1600/1377508951.jpg"},
        {name: "Озеро Байкал", image: "http://xn----8sbiecm6bhdx8i.xn--p1ai/sites/default/files/baykal_3.jpg"},
        {name: "Ладожское озеро", image: "http://www.ticrk.ru/upload/iblock/old/5079-original.jpeg"}
    ] 
    res.render("campgrounds", {campgrounds:campgrounds});
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("стартанул сервер yelpcamp"); 
});