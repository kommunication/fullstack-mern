const mongoose = require("mongoose")

const Notification = mongoose.Schema({
    subject: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model("Notification", Notification)