const studentWorkerModel = require("../models/StudentWorker")


async function getAll(req,res){
    const studentWorker = await studentWorkerModel.find();
    return res.json(studentWorker).status(200);    
}

async function saveStudentWorker(req,res){
    const newStudentWorker = req.body;
    
    if(await studentWorkerModel.findOne({studentID: newStudentWorker.studentID})){
        return res.json("Student with your ID already Exist").status(400);
    }


    const savedStudentWorker = new studentWorkerModel(newStudentWorker);
    await savedStudentWorker.save();

    res.json(savedStudentWorker).status(200);
}

async function deleteStudentWorker(req, res){
    const studentID = req.params.id;
    const studentWorker = await studentWorkerModel.findOne({studentID});
    
    if(studentWorker){
        //await studentModel.deleteOne({studentID});
        const deleteStudentWorker = await studentWorkerModel.findOneAndDelete({ studentID });
        return res.json(deleteStudentWorker).status(200);
    }

    res.json("student worker doesn't exist").status(404);
}

async function getByID(req,res){

    const studentID = req.params.id;    
    const studentWorker = await studentWorkerModel.findOne({ studentID });
    res.json(studentWorker).status(200);

}

module.exports = {getAll, saveStudentWorker, deleteStudentWorker, getByID};