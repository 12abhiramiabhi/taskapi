const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxLength: 50
    },
    discription: {
        type: String,
        maxLength: 50,
        required: [true, "you must enter disri"]
    },
    createdAt: {
        type: String,
        maxLength: 50,
        required: true
    },
    completed: {
        default: false,
        type: Boolean
    }
})
module.exports = mongoose.model('task', taskSchema);

