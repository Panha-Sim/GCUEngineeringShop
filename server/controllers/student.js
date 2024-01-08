const studentModel = require("../models/student");
const studentWorkerModel = require("../models/StudentWorker")


async function getById(req, res, next) {
    const studentID = req.params.id;
    console.log(studentID);
    const student = await studentModel.findOne({ studentID });

    console.log(student);
    res.json(student).status(200);
}


async function getAll(req,res,next){
    const students = await studentModel.find();
    res.json(students).status(200);
}


async function saveStudent(req,res,next){
    const payload = req.body;
    const newStudent = {
        name: payload.name,
        studentID: payload.studentID
    }

    if(!(await studentWorkerModel.findOne({studentID: payload.workerID}))){
        return res.status(400).json("Invalid Student Worker ID");
    }
    
    if(await studentModel.findOne({studentID: newStudent.studentID})){
        return res.status(400).json("Student with your ID already Exist");
    }

    const savedStudent = new studentModel(newStudent);
    await savedStudent.save();

    return res.json(savedStudent).status(200);
}


async function getTrained(req,res,next){
    const trained = req.params.trained;
    const students = await studentModel.find({trained});
    res.json(students).status(200);
}


async function addTrainning(req,res,next){
    const studentID = Number(req.params.studentID);
    const newSkill = req.params.trained;

    const student = await studentModel.findOne({ studentID });

    // Check if student exists and if trained is an array
    if (student && Array.isArray(student.trained)) {
        student.trained.push(newSkill);
        await student.save();
        res.json(student).status(200);
    } else {
        // Handle the case where student or trained is not defined
        res.status(500).json({ error: 'Student or trained skills not found' });
    }
}


async function deleteStudent(req,res,next){

    const studentID = req.params.id;
    const student = await studentModel.findOne({studentID});
    
    if(student){
        //await studentModel.deleteOne({studentID});
        const student = await studentModel.findOneAndDelete({ studentID });
        return res.json(student).status(200);
    }

    res.json("student doesn't exist");

}


async function removeTrainning(req,res,next){

    const studentID = req.params.studentID;
    const skillToRemove = req.params.trained;
    const student = await studentModel.findOne({studentID});

    if(student && Array.isArray(student.trained)){
        const index = student.trained.indexOf(skillToRemove);
        if(index !== -1){
            student.trained.splice(index,1);
            await student.save(student);
            return res.json(student).status(200);
        }else{
            return res.json("skill not found");
        }
    }
    return res.json("student does not exist");
}

module.exports = {getById, getAll, saveStudent, getTrained, addTrainning,deleteStudent, removeTrainning};