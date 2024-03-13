require("dotenv").config({ path: "./.env"});

const express = require("express");
const app = express();


// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env"});
// const PORT = process.env.PORT;


//dbconnection
require("./models/dbconfig").dbconnection();

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
})

