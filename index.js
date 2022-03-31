const express = require("express"), 
app =express(),
homeController= require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
express.urlencoded({
    extended: false
})
);
app.get('/home', (req,res)=>{
    res.render('home')
});
app.get("/images/:image", homeController.respondwithimage);

app.listen(app.get("port"), ()=>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
});