const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")

// Models
const Task = require("./models/Task")
const Notification = require("./models/Notification")

// Db connection
mongoose.connect("mongodb://localhost:27017/appdata", {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log("Mongodb connection established successfully")
})


// Express server
const PORT = 4000
const app = express()

app.use(cors())
app.use(express.json())

// Define routes
app.get('/tasks', (req, res) => {
    Task.find((err, tasks) => {
        if (err) {
            console.log(err)
        } else {
            res.json(tasks)
        }
    })
});



app.post('/tasks/create', (req, res) => {
    const task = new Task(req.body)
    task.save().then((task) => {
        res.json(task)
    })
    .catch((err) => {
        res.status(500).send(err.message)
    })
});

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id, (err, task) => {
        res.json(task)
    } )
})

app.post('/tasks/:id', (req, res) => {
    const id = req.params.id
    Task.findById(id, (err, task) => {
        if (!task) {
            console.log(`Could not find task. id: ${id}`)
            res.status(404).send("Task not found")
        } else {
            console.log(`Updating task. id: ${id}`)
            task.text = req.body.text
            task.description = req.body.description

            task.save().then( task => {
                res.json(task)
            }).catch(err => {
                console.log(`Error while save task. id: ${id} error: ${err.message}`)
                res.status(500).send(err.message)
            })

        }
    } )
})

// Define Notification routes
app.get('/notifications', (req, res) => {
    Notification.find((err, notifications) => {
        if (err) {
            console.log(err)
        } else {
            res.json(notifications)
        }
    })
});



app.post('/notifications', (req, res) => {
    const notification = new Notification(req.body)
    notification.save().then((saved) => {
        res.json(saved)
    })
    .catch((err) => {
        res.status(500).send(err.message)
    })
});

app.get('/notifications/:id', (req, res) => {
    const id = req.params.id
    Notification.findById(id, (err, notification) => {
        res.json(notification)
    } )
})

app.post('/notifications/:id', (req, res) => {
    const id = req.params.id
    Notification.findById(id, (err, notification) => {
        if (!notification) {
            console.log(`Could not find notification. id: ${id}`)
            res.status(404).send("Notification not found")
        } else {
            console.log(`Updating notification. id: ${id}`)
            notification.subject = req.body.subject
            notification.message = req.body.message
            
            notification.save().then( saved => {
                res.json(saved)
            }).catch(err => {
                console.log(`Error while save notification. id: ${id} error: ${err.message}`)
                res.status(500).send(err.message)
            })

        }
    } )
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
