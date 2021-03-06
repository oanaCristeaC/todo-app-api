
 /** This handle the routes to the api. */
 
 module.exports = (app) => {
    const todoList = require('../controllers/todoController');

    app.get('/tasks', todoList.getTasks);
    app.post('/tasks', todoList.createTask);
    app.get('/tasks/:taskId', todoList.getTask)
    app.put('/tasks/:taskId', todoList.updateTask)
    app.delete('/tasks/:taskId', todoList.deleteTask)

 }
