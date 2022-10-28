
const express = require("express")
const router = express.Router()
const { sendHi, sendHello, addtask, updatetask, getalltask, singletask, deletetask } = require("../controller/taskControler")

router.get("/", sendHi)
router.get("/hello", sendHello)

//route for getting all tasks
router.get("/alltask", getalltask)

//route for adding a task
router.post("/addtask", addtask)

//route for updating a task using it's id
router.patch("/updatetask/:taskid", updatetask)

//get one task
router.get("/singletask/:taskid", singletask)


router.delete("/deletetask/:taskid", deletetask)

module.exports = router