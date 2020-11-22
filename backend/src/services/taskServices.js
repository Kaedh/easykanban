const Task = require("../database/models/taskModel");

class TaskServices {
    async save(task) {
        try {
            if(!task) throw { error : "please insert a valid task" }

            await Task.create(task)
            return { message : "new task successfully saved in database", task }

        } catch (error) {
            return error.message;
        };        
    };

    async get() {
        const data = await Task.find().select({ 'content': 1, 'status': 1, '_id': 0 });

        return data;
    };

    async getOrdered() {

    };

    async delete() {

    };

    async update() {

    };
};


module.exports = TaskServices;