const mongoose = require("mongoose");

const Task = require("../database/models/taskModel");

class TaskServices {
    async save(task) {
        try {
            if(!task) throw { error : "please insert a valid task" };

            await Task.create(task);
            return { message : "new task successfully saved in database", task };

        } catch (error) {
            return error.message;
        };        
    };

    async get() {
        try {
            const data = await Task.find().select({ 'content': 1, 'status': 1, '_id': 1 });
            return data;

        } catch (error) {
            return error.message;

        };        
    };

    async getOrdered() {

    };

    async delete(taskId) {
        try {
            await Task.deleteOne( { "_id" : taskId } ) 
            return { "message" : "task delete sucessfully" }

        } catch (error) {
            return error.message;

        }
    };

    async update(taskId, newTask) {
        try {
            await  Task.updateOne(
                { "_id" : taskId },
                { $set : { "content" : newTask.content , "status" : newTask.status} });
                
                return { "message" : "task updated sucessfully" }

        } catch (error) {
            return error.message;

        };
    };
};


module.exports = TaskServices;