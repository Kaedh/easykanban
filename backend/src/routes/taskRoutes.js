const taskRoutes = require("express").Router();
const TaskServices = require("../services/taskServices");

const taskServices = new TaskServices;

taskRoutes.get('/', async (req, res) => {
    const data = await taskServices.get();

    return res.json(data);
});


taskRoutes.get('/:ordered', async (req, res) => {

});


taskRoutes.post('/', async (req, res) => {
    const task = req.body;  

    const result = await taskServices.save(task);

    return res.json(result);

});


taskRoutes.delete('/:id', async (req, res) => {

});


taskRoutes.put('/:id', async (req, res) => {

});


module.exports = taskRoutes;
