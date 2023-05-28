const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about-us", (req, res)=> {
    res.sendFile(__dirname + "/public/pages/about-us.html");
});

app.get("/amenities", (req, res)=> {
    res.sendFile(__dirname + "/public/pages/amenities.html");
});

app.get("/reservations", (req, res)=> {
    res.sendFile(__dirname + "/public/pages/reservations.html");
});

app.get("/gallery", (req, res)=> {
    res.sendFile(__dirname + "/public/pages/gallery.html");
});

app.get("/contact-us", (req, res)=> {
    res.sendFile(__dirname + "/public/pages/contact-us.html");
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server started.");
})