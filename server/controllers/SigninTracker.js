const SigninTrackerModel = require('../models/SigninTracker ')
const studentModel = require('../models/student');

async function currSignIn(req,res,nenxt){
    const signIn = await SigninTrackerModel.find();
    res.json(signIn).status(200);
}

async function signIn(req,res,next){
    
    const studentID = req.params.id;

    // See if student is signIn
    if(await SigninTrackerModel.findOne({studentID})) {
        return res.json("You are already SignIn!!")
    }
    //Check if student is sign in
    const student = await studentModel.findOne({studentID});

    if(student){   
        const payload = 
        {
            name:student.name,
            studentID: student.studentID,
            trained: student.trained
        }

        const newSignin = new SigninTrackerModel(payload);
        await newSignin.save();
        return res.json(newSignin).status(200);
    }    
    res.json("you are not register yet")
}

async function signOut(req,res,next){
    const studentID = req.params.id;
    try{
        const signInTracker = await SigninTrackerModel.findOne({studentID});
        if(signInTracker){
            const SigninStudent  = await SigninTrackerModel.findOneAndDelete({studentID});
            return res.json(SigninStudent).status(200);
        }else{
            return res.json("Student is not sign in").status(404);
        }
    } catch (err){
        console.log(err);
    }

}

async function signOutAllStudent(req,res){
    try {
        await SigninTrackerModel.deleteMany({}); // Delete all documents in the collection
        return res.status(200).json("All Student SignOut successfully");
      } catch (error) {
        // Handle any errors that may occur during the deletion process
        return res.status(500).json("Internal Server Error");
      }
}

module.exports = {currSignIn, signIn, signOut, signOutAllStudent};