require("dotenv").config({ path: "./.env"});

const express = require("express");
const app = express();


// const dotenv = require("dotenv");
// dotenv.config({ path: "./.env"});
// const PORT = process.env.PORT;


//dbconnection
require("./models/dbconfig").dbconnection();

//routes
const userRouter = require("./routes/userRoute");


//logger
const logger = require("morgan");
app.use(logger("tiny"));

//body pasrer
app.use(express.json());
app.use(express.urlencoded(
    { extended : true}));

app.use("/api/user",userRouter);

//server
app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
})

