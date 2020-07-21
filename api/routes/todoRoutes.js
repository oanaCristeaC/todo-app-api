module.exports = (app) => {
    const todoList = require('../controllers/todoController');

    // Define routes

    app.route('/tasks')
        .get(todoList.getTask)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.readTask)
        .put(todoList.updateTas)
        .delete(todoList.deleteTask);
}