// mongose package er sathe database connect korbo

const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

//connecting
mongoose.connect(dbURL)
.then(()=>{
    console.log('mongo atlas is connected');
})
.catch((error)=>{  //error dhora porle server theke ber hoye zabe
    console.log(error);
    process.exit(1);
});
//database er file app er sathe add kra lagbe na hole kaz korbe na