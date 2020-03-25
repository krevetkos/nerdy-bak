const mongoose = require('mongoose');
const JOI = require('joi');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String }

})

const dataValidation = {
    email: JOI.string(),
    password: JOI.string()
}
exports.dataValidation = dataValidation;
exports.UserSchema = mongoose.model('User', UserSchema);