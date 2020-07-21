const mongoose = require("mongoose")
const Task = mongoose.model("Tasks");

/**Get all tasks */
exports.getTasks = (req, res) => {
    Task.find({}, (error, task) => {
        if (error) {
            res.send(error)
        }
        res.json(task);
    });
};

/**Create a task */
exports.createTask = (req, res) {
    const newTask = new Task(req.body);
    newTask.save((error, task) => {
        if (error) {
            res.send(error)
        };
        res.json(task)
    })
}

/**Get a task by id */
exports.getTask = (req, res) => {
    Task.findById(req.params.id, req.body, {new: true}, 
        (error, task) => {
            if (error) {
                res.send(error);
            };
            res.json(task)
        }
    )
}

/**Update a task */
exports.updateTask = (req, res) => {
    Task.findOneAndUpdate(req.params.id, req.body, {new: true},
        (error, task) => {
            if (error){
                res.send(error)
            };
            res.send(task)
        }
    )
}

/**Delete a task */
exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete({_id: req.params.id}, (error, task) => {
        if (error) {
            res.send(error);
        };
        res.json({message: 'Task deleted!'})
    })
}