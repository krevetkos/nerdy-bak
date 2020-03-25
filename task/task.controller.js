const { createTask, getTasks, deleteTask, updateTask } = require('./task.services');
async function create(req, res, next) {
    try {
        console.log(req.body)
        const data = await createTask(req.body);
        res.json(data);
    } catch (e) {
        next(e)
    };
};
async function getUserTask(req, res, next) {
    try {
        const tasks = await getTasks(req.body);
        res.json(tasks);
    } catch (e) {
        console.log(e)
    }
}
async function deleteUserTask(req, res, next) {
    try {
        const tasks = await deleteTask(req.params);
        res.json(tasks);
    } catch (e) {
        console.log(e)
    }
}
async function updateUserTask(req, res, next) {
    try {
        console.log(req.body, req.params)
        const tasks = await updateTask(req.body, req.params.id);
        res.json(tasks);
    } catch (e) {
        console.log(e)
    }
}

exports.create = create;
exports.getUserTask = getUserTask;
exports.deleteUserTask = deleteUserTask;
exports.updateUserTask = updateUserTask;