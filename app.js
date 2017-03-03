var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Озеро Селигер",
//         image: "http://2.bp.blogspot.com/-WZVjyxt5GQc/UiNgbZs94kI/AAAAAAAAIb0/YFITjBeCJsY/s1600/1377508951.jpg"
        
//     },
//     function(err, campground){
//       if(err){
//           console.log(err)
//       } else {
//           console.log("Только что созданный кэмпграунд");
//           console.log(campground);
//       }
//     });

   var campgrounds = [
        {name: "Озеро Селигер", image: "http://2.bp.blogspot.com/-WZVjyxt5GQc/UiNgbZs94kI/AAAAAAAAIb0/YFITjBeCJsY/s1600/1377508951.jpg"},
        {name: "Озеро Байкал", image: "http://xn----8sbiecm6bhdx8i.xn--p1ai/sites/default/files/baykal_3.jpg"},
        {name: "Ладожское озеро", image: "http://www.ticrk.ru/upload/iblock/old/5079-original.jpeg"}
    ];


app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});       
       }
    });
    
});

app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image}
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       }else{
            res.redirect("/campgrounds");       
       }
   });
//   campgrounds.push(newCampground);
   
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("стартанул сервер yelpcamp"); 
});