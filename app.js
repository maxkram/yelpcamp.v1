var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Это будет лэндин пэйдж");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("стартанул сервер yelpcamp"); 
});