const mongoose = require("mongoose")

const TaskModel = require("../models/taskModel")

const sendHi = function (req, res) {
    res.send("hai")
}
const sendHello = (req, res) => {
    res.send("hai3")
}


// const Cat = mongoose.model('Cat', { name: String });


// const addtask = (req, res) => {
//     console.log(req.body)
//     let kitty = new Cat(req.body);
//     kitty.save()
//     res.send("addtask")
// }


///data base kanikkan//
const addtask = async (req, res) => {
    console.log(req.body)
    // let taskRunning = new TaskModel(req.body);
    // taskRunning.save()
    let d = new Date()
    d = d.toLocaleDateString()
    req.body.createdAt = d
    console.log(d);
    try {
        await TaskModel.create(req.body)
        res.json({ sucess: true, message: "sucessfully added task" })

    } catch (error) {
        console.log(error);
        res.json({ sucess: false, message: "Failed to add task" })
    }
}

const updatetask = async (req, res) => {
    console.log(req.params.taskid, req.body);
    try {
        await TaskModel.findOneAndUpdate({ _id: req.params.taskid }, req.body)
        res.json({ success: true, message: "successfully update task" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "faild to update task" })
    }
}
const getalltask = async (req, res) => {
    try {
        let alltask = await TaskModel.find()
        console.log(alltask);
        res.json({ success: true, alltask })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "faild to getting task" })
    }
}

const singletask = async (req, res) => {
    try {
        let onetask = await TaskModel.findOne({ _id: req.params.taskid })// onedata 
        res.json({ success: true, message: " task got", onetask })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "faild to fetch task" })
    }
    console.log(req.params.taskid);

}

const deletetask = async (req, res) => {
    try {
        let taskdelet = await TaskModel.findOneAndDelete({ _id: req.params.taskid })
        res.json({ success: true, message: "task delete", taskdelet })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "faild to delete" })
    }
    console.log(req.params.taskid);
}


module.exports = { sendHi, sendHello, addtask, updatetask, getalltask, singletask, deletetask }

