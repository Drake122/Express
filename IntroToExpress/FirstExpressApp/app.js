/**
 * Created by sa on 2017.01.13..
 */
console.log("OUR EXPRESS APP WILL GO HERE!");
var express =require("express");
var app =express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
    res.send("Hi there!");
});

// "/bye"=> "Goodbye!"
// "/dog"=> "MEOW!"

app.listen(3000, '81.2.254.9', function () {
    console.log("Server has started!!");
});