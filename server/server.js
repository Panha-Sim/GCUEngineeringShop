const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const student = require("./routes/student");
const signinTracker = require("./routes/SigninTracker")
const studentWorker = require("./routes/StudentWorker")

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
mongoose.connect(process.env.TEST_DB, { useNewUrlParser: true });
app.use(cors());
app.use(express.json());

app.use("/student",student);
app.use("/signinTracker",signinTracker);
app.use("/studentWorker",studentWorker)

app.listen(port, () => {
  console.log("Server Running!!");
});