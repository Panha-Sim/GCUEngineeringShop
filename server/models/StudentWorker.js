const mongoose = require("mongoose");;
const { Schema } = mongoose;

const studentWorkerSchema = new Schema({
  name: String,
  studentID: String,
});

const studentWorkerModel = mongoose.model("studentWorker",studentWorkerSchema)
module.exports = studentWorkerModel;
