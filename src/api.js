 export const getTasks = () => fetch("http://localhost:4000/tasks").then(res => res.json())

 export const createTask = (task) => fetch("http://localhost:4000/tasks/create", {
     method: "POST",
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
     },
     body: JSON.stringify(task)
 })

 export const updateTask = (task, id) => fetch(`http://localhost:4000/tasks/${id}`, {
     method: "POST",
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
     },
     body: JSON.stringify(task)
 })

 export const getTask = (id) => fetch(`http://localhost:4000/tasks/${id}`).then(res => res.json())



// Api proxy for notification endpoints
 export const getNotification = (id) => fetch(`http://localhost:4000/notifications/${id}`).then(res => res.json())


 export const getNotifications = () => fetch("http://localhost:4000/notifications").then(res => res.json())

 export const createNotification = (notification) => fetch("http://localhost:4000/notifications", {
     method: "POST",
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
     },
     body: JSON.stringify(notification)
 })

 export const updateNotification = (notification, id) => fetch(`http://localhost:4000/notifications/${id}`, {
     method: "POST",
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
     },
     body: JSON.stringify(notification)
 })


 
