// environment variable guloke ek zaygai ana hbe. zate ek zayga theke sob use krte pari
require("dotenv").config(); //require korla, env. ekhane niye asar zonno config function use kora

const dev = {
    app:{
        port: process.env.port || 4000
    },
    db:{
        url: process.env.DB_URL || "mongodb://localhost:27017/userDemoDb"
    },

};

//exporting module 
module.exports = dev;