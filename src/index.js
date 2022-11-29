require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const app = express();
const port = process.env.PORT || 3000;
require('./database/mongoConnect');

app.use(bodyParser.json());

app.use('/', route);

app.listen(port, () => {
    console.log(`server connected ${port}`)
});


