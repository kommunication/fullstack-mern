const mongoose = require("mongoose")

const Task = mongoose.Schema({
    text: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("Task", Task)