const express = require("express");
const router = express.Router();
const {getAll, saveStudentWorker, deleteStudentWorker, getByID} = require("../controllers/StudentWorker");

router.get("/", getAll)
router.get("/:id", getByID)
router.post("/", saveStudentWorker)
router.delete("/:id", deleteStudentWorker)


module.exports = router;