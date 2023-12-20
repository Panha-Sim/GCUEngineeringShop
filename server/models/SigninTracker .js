const mongoose = require("mongoose");;
const { Schema } = mongoose;

const SigninTrackerShema = new Schema({
  name: String,
  studentID: String,
  trained: [String],
},
{
  timestamps: {
    createdAt: 'SignInTime',
    updatedAt: 'updated_at' 
  }

});

const SigninTrackerModel = mongoose.model("SigninTracker",SigninTrackerShema)
module.exports = SigninTrackerModel;