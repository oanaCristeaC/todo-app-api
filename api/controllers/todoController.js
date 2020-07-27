const Task = require('../models/todoModel');

/**Get all tasks */
exports.getTasks = async function (req, res) {
    try {
        await Task.find({}, (error, task) => {
            if (error) {
                res.send(error)
            }
            res.json(task);
        });
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message})
    }
    
};

/**Create a task */
exports.createTask = async function(req, res){
  try {
    const newTask = new Task(req.body);
    await newTask.save((error, task) => {
        if (error) {
            res.send(error)
        };
        res.json(task)
    })
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message})
  }
}

/**Get a task by id */
exports.getTask = async function(req, res) {
    try {
        await Task.findById(req.params.taskId, function (error, task) {
                if (error) {
                    res.send(error);
                };
                res.json(task)
            }
        )
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

/**Update a task */
exports.updateTask = async function(req, res) {
   try {
    await Task.findOneAndUpdate({_id: req.params.taskId}, {"$set": req.body}, {new: true},
        function (error, task) {
            if (error){
                res.send(error)
            };
            console.log("task", task, req.body)
            res.send(task)
        }
    )
   } catch (e) {
       return res.status(400).json({status: 400, message: e.message})
   }
}

/**Delete a task */
exports.deleteTask = async function(req, res) {
  try {
    await Task.findByIdAndDelete({_id: req.params.taskId}, (error, task) => {
        if (error) {
            res.send(error);
        } else {
            res.json({message: 'Task deleted!'})
        }
    })
  } catch(error) {
    return res.status(400).json({status: 400, message: e.message})
  }
}