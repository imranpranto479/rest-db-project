const express = require("express");
const cors = require("cors"); //cross origin request hole handle korte pare
//requiring databbase
require("./config/db");
//importing router to use
const userRouter = require("./routes/user.route");
const app = express(); //initialize express

app.use(cors());
app.use(express.urlencoded({extended: true})); //form er data gulo access krte parbo, database e data push zate nite pare
app.use(express.json());

//user router user er zonno
app.use("/api/users/",userRouter);
// api/users: GET
// api/users/:id: GET
// api/users/: POST
// api/users/:id: PATCH (Update)
// api/users/:id: DELETE

// routes e ki kaz krbo logic er zonno=> controller and database er zonno=> model

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
});


//error
app.use((req,res,next)=>{
    res.status(404).json({
        message:"route not found",
    });

});
//error handling---server error

app.use((err, req,res,next)=>{
    res.status(500).json({
        message:"something broke",
    });

});
//exporting app

module.exports = app;