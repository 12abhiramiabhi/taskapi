const express = require("express")
const app = express()
const path = require('path');
const cors = require('cors');

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://abhirami:123@cluster0.hsgwgwj.mongodb.net/taskdb?retryWrites=true&w=majority', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("conneted to db");
    }
});

const taskRouter = require("./routes/task")
app.use("/api/task", taskRouter)

app.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server started");
    }
})
