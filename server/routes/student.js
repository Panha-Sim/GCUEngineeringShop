const express = require("express");
const router = express.Router();
const {getById, getAll, saveStudent, getTrained, addTrainning, deleteStudent, removeTrainning} = require("../controllers/student");

router.get("/", getAll);
router.get("/:id",getById)
router.post("/", saveStudent)

router.get("/trained/:trained", getTrained)
router.put("/:studentId/:trained", addTrainning)
router.put("/remove/:studentId/:trained", removeTrainning)
router.delete("/:id", deleteStudent)


module.exports = router;