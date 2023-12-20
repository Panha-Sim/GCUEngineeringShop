const mongoose = require("mongoose");;
const { Schema } = mongoose;

const studentSchema = new Schema({
  registered_date:{
    type: Date,
    default: Date.now,
  },
  studentID: String,
  name: String,

});

const studentModel = mongoose.model("student",studentSchema)
module.exports = studentModel;