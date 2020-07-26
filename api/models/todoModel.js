const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
    
});
module.exports = mongoose.model('Tasks', todoSchema)
