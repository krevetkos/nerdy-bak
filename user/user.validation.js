const { UserSchema, dataValidation } = require('./user.model')
const { validateData } = require('../services/validation');

async function NewUserValidation(body) {
    const { error } = validateData(body, dataValidation);
    if (error) throw new Error('Invalid data')
}

exports.NewUserValidation = NewUserValidation;