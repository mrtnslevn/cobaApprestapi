const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse json

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//routes dipanggil

var routes = require("./routes");
routes(app);


//port api berjalan
app.listen(3000, ()=> {
    console.log('server started at port: ');
})



