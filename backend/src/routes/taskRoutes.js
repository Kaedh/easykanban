const taskRoutes = require("express").Router();
const TaskServices = require("../services/taskServices");

const taskServices = new TaskServices;

taskRoutes.get('/', async (req, res) => {
    const data = await taskServices.get();

    if ( req.query.compact ) {
        const dataCompact = {
          todo : [],
          inprogress : [],
          done : []
        };

        data.forEach(task => {
          if (task.status === "todo") dataCompact.todo.push(task);
          if (task.status === "inprogress") dataCompact.inprogress.push(task);
          if (task.status === "done") dataCompact.done.push(task);
        });

        return res.json(dataCompact);
    };

    return res.json(data);
});


taskRoutes.post('/', async (req, res) => {
    const task = req.body;  

    const result = await taskServices.save(task);

    return res.json(result);

});


taskRoutes.delete('/:id', async (req, res) => {
    const taskId = req.params.id;

    const result = await taskServices.delete(taskId);

    return res.json(result);
});


taskRoutes.put('/:id', async (req, res) => {
    const taskId = req.params.id;
    const taskUpdated = req.body;

    const result = await taskServices.update(taskId, taskUpdated);

    return res.json(result);
});


module.exports = taskRoutes;
