const db = require("../db");


const taskSchema = new db.Schema({
    content : { type: String, required: true },
    status : { type: String, required: true }
});


module.exports = db.model('Task', taskSchema);