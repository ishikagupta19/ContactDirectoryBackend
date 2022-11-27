const express = require("express");
const app = express();
const otpservice = require("./controller/otp");
const userapis = require("./controller/users");
const connectdb = require("./connectors/dbconnection");
require("dotenv").config();
app.use(express.json());

app.use("/api/otp" , otpservice);
app.use("/api/user", userapis);

const port = process.env.PORT || 5000;

connectdb();
app.listen(port, () => console.log(`server is running at ${port}`));