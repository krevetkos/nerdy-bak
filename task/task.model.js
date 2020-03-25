const mongoose = require('mongoose');
const JOI = require('joi');
const Schema = mongoose.Schema;
const Types = mongoose.Types
const TaskSchema = new Schema({
    value: { type: String },
    shared: { type: Array },
    owner: { type: Types.ObjectId, ref: 'User' },
    ownerEmail: { type: String }
})

const taskValidation = {
    value: JOI.string(),
    shared: JOI.array(),
    owner: JOI.string(),
    ownerEmail: JOI.string(),
}
exports.taskValidation = taskValidation;
exports.TaskSchema = mongoose.model('Task', TaskSchema);