const { TaskSchema } = require('./task.model');
const { UserSchema } = require('../user/user.model');
async function createTask(body) {
    console.log(body.user._id)
    const user = await UserSchema.findOne({ _id: body.user._id });
    const owner = await UserSchema.findOne({ _id: body.user._id });
    const task = {
        value: body.task,
        owner: user._id,
        ownerEmail: owner.email
    }
    const newTask = await TaskSchema.create(task)
    return newTask
}
async function getTasks(body) {
    const tasks = await TaskSchema.find({ $or: [{ owner: body._id }, { shared: { "$in": [body.email] } }] })
    return tasks
}
async function deleteTask(body) {
    const deleted = await TaskSchema.deleteOne({ _id: body.id });
    return body
}
async function updateTask(body, id) {
    const updated = await TaskSchema.updateOne({ _id: id }, {...body })
    return id
}
exports.updateTask = updateTask;
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.deleteTask = deleteTask;